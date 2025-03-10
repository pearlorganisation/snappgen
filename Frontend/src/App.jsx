import { useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

// Lazy loading for the routes
const Home = lazy(() => import("./pages/Home/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Dating = lazy(() => import("./pages/Dating/Dating"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const CancellationAndRefunds = lazy(() =>
  import("./pages/CancellationAndRefunds/CancellationAndRefunds")
);
const TermsAndConditions = lazy(() =>
  import("./pages/TermsAndConditions/TermsAndConditions")
);
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const UploadPage = lazy(() => import("./pages/UploadPage/UploadPage"));
const HowItWorks = lazy(() => import("./pages/HowItWorks/HowItWorks"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogDetails = lazy(() => import("./pages/Blog/BlogDetails"));
const FreeHeadshots = lazy(() => import("./pages/FreeHeadshots/FreeHeadshots"));
const FreeHeadshotsTab = lazy(() =>
  import("./pages/FreeHeadshots/FreeHeadshotsTab")
);
const AddReview = lazy(() => import("./pages/Reviews/AddReview"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="w-full h-screen text-xl text-center pt-40 font-semibold text-[#f1f1f1]">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home page routes */}
          <Route path="/" element={<Home />} />
          <Route path="/ai-headshot-generator" element={<Home />} />
          <Route path="/ai-professional-headshots" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/cancellation-and-refunds"
            element={<CancellationAndRefunds />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dating-ai-headshot-generator" element={<Dating />} />

          {/* Upload page routes */}
          <Route
            path="/dating-ai-headshots"
            element={<UploadPage section={"dating"} />}
          />
          <Route
            path="/corporate-ai-headshots"
            element={<UploadPage section={"Corporate Headshots"} />}
          />
          <Route
            path="/doctor-ai-headshots"
            element={<UploadPage section={"Doctor Headshots"} />}
          />
          <Route
            path="/lawyer-ai-headshots"
            element={<UploadPage section={"Lawyer Headshots"} />}
          />
          <Route
            path="/salesman-ai-headshots"
            element={<UploadPage section={"Sales Headshots"} />}
          />
          <Route
            path="/students-ai-headshots"
            element={<UploadPage section={"Students Headshots"} />}
          />
          <Route
            path="/teacher-ai-headshots"
            element={<UploadPage section={"Teacher Headshots"} />}
          />

          <Route
            path="/free-ai-headshot-generator"
            element={<FreeHeadshots />}
          />
          <Route path="/free-ai-headshots" element={<FreeHeadshotsTab />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
