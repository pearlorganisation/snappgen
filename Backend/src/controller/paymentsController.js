import dotenv from "dotenv";
import Stripe from "stripe";
import {
  sendMailToCustomer,
  sendMailToTeamsCustomer,
} from "../utils/nodeMailer.js";
import { uploadFile } from "../utils/cloudinary.js";
import { addUser, deleteUser, getUser } from "../utils/users.js";
import { addCustomer, addTeamsCustomer } from "./customersController.js";

dotenv.config();

const stripe = Stripe(process.env.SK_LIVE);

const stripeLinks = [
  {
    price: "€9",
    packName: "Starter Pack",
    generationType: "individual",
    id: "price_1Qk2jDCvLjbx73iCjwwH9CRF", // euro
  },
  {
    price: "€29",
    packName: "Basic Pack",
    generationType: "individual",
    id: "price_1Qk2k9CvLjbx73iCSQnNwwF4", // euro
  },
  {
    price: "€35",
    packName: "Premium Pack",
    generationType: "individual",
    id: "price_1Qk2l0CvLjbx73iC0vWIeWxw", // euro
  },
  {
    price: "€50",
    packName: "Basic Pack",
    generationType: "customize",
    id: "price_1QmUfnCvLjbx73iC9SMh5ThC", 
  },
  {
    price: "€100",
    packName: "Premium Pack",
    generationType: "customize",
    id: "price_1QmUgPCvLjbx73iCx9RBbw2v", // euro
  },
  {
    price: "€200",
    packName: "Prompts Pack",
    generationType: "prompt",
    id: "price_1QmahoCvLjbx73iCgQOhNi4W", // euro - dating prompt used
  },
  {
    price: "€9",
    packName: "Starter Pack",
    generationType: "individualDating",
    id: "price_1QmafVCvLjbx73iCpppkwGCa", //euro
  },
  {
    price: "€29",
    packName: "Basic Pack",
    generationType: "individualDating",
    id: "price_1Qmag6CvLjbx73iC38GxfxVR", //euro
  },
  {
    price: "€35",
    packName: "Premium Pack",
    generationType: "individualDating",
    id: "price_1QmagQCvLjbx73iCcy2CLx97", //euro
  },

  {
    price: "€50",
    packName: "Basic Pack",
    generationType: "datingCustomize",
    id: "price_1QmahJCvLjbx73iCM6B0uAGD", //euro
  },
  {
    price: "€100",
    packName: "Premium Pack",
    generationType: "datingCustomize",
    id: "price_1QmahaCvLjbx73iC1ryaLTV7", //euro
  },
  {
    price: "€200",
    packName: "Prompts Pack",
    generationType: "datingPrompt",
    id: "price_1QmahoCvLjbx73iCgQOhNi4W", //euro
  },
];

export const checkout = async (req, res) => {
  // return
// console.log("req.body", req.body);
  try {
    const selectedPlan = JSON.parse(req.body.selectedPlan);
    const generationType = req.body.generationType;
    const idx = stripeLinks.findIndex((e) => {
      return (
        e.price == selectedPlan.price && e.generationType === generationType
      );
    });

    let price = stripeLinks[idx].id;
    // console.log(price)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${price}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: req.body.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/complete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/cancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(req.body),
      files: JSON.stringify(req.files),
      sessionId: session.id,
      stripeLink: stripeLinks[idx],
    };

    const user = addUser(data);
    if (user.status) {
      res.status(200).json({
        sessionUrl: `${session.url}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const complete = async (req, res) => {
  const user = getUser(req.query.sessionId);

  if (user.status) {
    const imgResult = await uploadFile(JSON.parse(user.user.files));
    await addCustomer(user?.user, imgResult?.result);
    if (imgResult) {
      await sendMailToCustomer(user.user, imgResult.result).catch(
        console.error
      );
      const result = deleteUser(req.query.sessionId);
      if (result) {
      // console.log(user);
        const userBody = JSON.parse(user.user.body);
        const selectedPlan = JSON.parse(userBody.selectedPlan);
        res.render("payment-success", {
          type: "solo",
          email: userBody.email,
          gender: userBody.gender,
          amount: selectedPlan.price,
          packName: selectedPlan.packName,
          FRONTEND_URL: process.env.FRONTEND_URL,
        });

        // res.redirect(`${process.env.FRONTEND_URL}/success`);
      }
    } else {
      // const result = deleteUser(req.query.sessionId);

      res.render("payment-success", {
        type: "solo",
        userName: userName,
        amount: amount,
        transactionId: transactionId,
      });

      // res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({
      status: false,
      message:
        "There's some error completing this process, kindly go back to main site",
    });
  }
};

export const cancel = (req, res) => {
  const result = deleteUser(req.query.sessionId);
  res.render("payment-failed", {
    FRONTEND_URL: process.env.FRONTEND_URL,
  });
  // res.redirect(`${process.env.FRONTEND_URL}/cancel`);
};

export const teamsCheckout = async (req, res) => {
  try {
    const teamsData = { ...req.body };
    let price = Number(teamsData.price) * Number(teamsData.users);
  // console.log(teamsData);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Teams plan",
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: teamsData.email,
      allow_promotion_codes: true,
      success_url: `${process.env.BASE_URL}/api/v1/payment/teamscomplete?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/api/v1/payment/teamscancel?sessionId={CHECKOUT_SESSION_ID}`,
    });

    const data = {
      body: JSON.stringify(teamsData),
      sessionId: session.id,
    };

    const user = addUser(data);
    if (user.status) {
      res.status(200).json({
        sessionUrl: `${session.url}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const teamsComplete = async (req, res) => {
  const user = getUser(req.query.sessionId);
  if (user.status) {
    await addTeamsCustomer(user?.user);
    await sendMailToTeamsCustomer(user.user).catch(console.error);
    const result = deleteUser(req.query.sessionId);
    if (result) {
      const userBody = JSON.parse(user.user.body);

      res.render("payment-success", {
        type: "teams",
        email: userBody.email,
        teamName: userBody.companyName,
        teamCount: userBody.users,
        price: userBody.price,
        amount: Number(userBody.price) * Number(userBody.users),
        firstName: userBody.firstName,
        lastName: userBody.lastName,
        packName: `Teams Pack`,
        FRONTEND_URL: process.env.FRONTEND_URL,
      });

      // res.redirect(`${process.env.FRONTEND_URL}/success`);
    }
  } else {
    const result = deleteUser(req.query.sessionId);
    res.send({
      status: false,
      message:
        "There's some issue completing this process, kindly go back to main site",
    });
  }
};

export const teamsCancel = (req, res) => {
  const result = deleteUser(req.query.sessionId);
  res.render("payment-failed", {
    FRONTEND_URL: process.env.FRONTEND_URL,
  });
  // res.redirect(`${process.env.FRONTEND_URL}/teamscancel`);
};
