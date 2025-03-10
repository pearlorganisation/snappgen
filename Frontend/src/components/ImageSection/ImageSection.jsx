import React, { useRef, useState } from "react";
import DragAndDrop from "./DragAndDrop/DragAndDrop";
import ImgCropT from "./CropTool/ImgCropT";

const ImageSection = ({
  files,
  setFiles,
  fileErrorMsg,
  setFileErrorMsg,
  maxUploads = 4,
  type="individualHeadshot",
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imgCropRef = useRef(null);
  const toolContainerRef = useRef(null);

  const correctData = [
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022323/headgen/Headshots/photo%20reqirements%20and%20restrictions/v7lowyibwkdiowyhvgeh.webp",
      content: (
        <>
          👁️ <strong>Eye Contact:</strong> You should be looking directly at the
          camera.
        </>
      ),
    },
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022322/headgen/Headshots/photo%20reqirements%20and%20restrictions/c7hyyeisgymbxzbu84ht.webp",
      content: (
        <>
          🆕 <strong> Recent:</strong> Photos taken recently, ideally within the
          past six months.
        </>
      ),
    },
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022322/headgen/Headshots/photo%20reqirements%20and%20restrictions/tmwy8e4pofkcuv2ksow9.webp",
      content: (
        <>
          ☀️ <strong> Clear:</strong> Plain background, Very important Head
          Straight and no Head tilt, Good lighting , head to waist shot,
          standing against a plain white or grey background really helps!
        </>
      ),
    },
  ];

  const incorrectData = [
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022319/headgen/Headshots/photo%20reqirements%20and%20restrictions/loodqytoupcgksyyfb5j.webp",
      content: (
        <>
          🧢 <strong>No Accessories:</strong> (e.g. Hats, backpacks, sunglasses,
          earrings, nose rings, headphones, excess makeup, scarfs, chains,
          necklaces, glasses etc. ).
        </>
      ),
    },
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022320/headgen/Headshots/photo%20reqirements%20and%20restrictions/i2fhsscfx1ubzknfiauk.webp",
      content: (
        <>
          👙 <strong>No Group Photos or Revealing Clothes:</strong> (eg. Group
          Images with 2 or more, tank tops, shirtless, bikins. ).
        </>
      ),
    },
    {
      imgPath:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022321/headgen/Headshots/photo%20reqirements%20and%20restrictions/hlpqhewthmj7owwogetf.webp",
      content: (
        <>
          🥴 <strong> No Goofy Faces:</strong>No unusual expressions like closed
          eyes, duck faces, tongue out, peace sign, very important to keep head
          straight and no head tilt , no half faces .
        </>
      ),
    },
  ];

 

  const updateFile = (oldFile, newFile) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(oldFile);
      newSelection[fileIndex] = newFile;
      // setSelectedImage(newFile);
      setSelectedImage(null);
      return newSelection;
    });
  };

  return (
    <div className="grid gap-y-5 md:grid-cols-2 w-full h-full min-h-[700px] justify-center">
      <DragAndDrop
        files={files}
        setFiles={setFiles}
        maxUploads={maxUploads}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        fileErrorMsg={fileErrorMsg}
        setFileErrorMsg={setFileErrorMsg}
        imgCropRef={imgCropRef}
        toolContainerRef={toolContainerRef}
        type={type}
      />

      <div
        className="w-full relative  max-h-[700px] overflow-auto md:px-4 flex flex-col gap-2"
        ref={imgCropRef}
      >
        {selectedImage && (
          <>
            {selectedImage && (
              <div className="relative w-full">
                <ImgCropT
                  alt=""
                  selectedImage={selectedImage}
                  updateFile={updateFile}
                />
              </div>
            )}
          </>
        )}

        <div className="w-full h-fit bg-[#ecfff1] text-black rounded-md flex flex-col gap-2 p-4" >
          <div className="text-[18px] text-center md:text-left">
            ✅ PHOTO REQUIREMENTS
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {correctData &&
              correctData?.map((item, idx) => (
                <div key={`photoReq${idx}`} className="flex flex-col  rounded-2xl w-full max-w-[200px] mx-auto ">
                  <img
                    alt=""
                    src={item?.imgPath}
                    className="w-full object-contain rounded-2xl"
                    width={150}
                    height={200}
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-1">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full h-fit bg-[#ffecec] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px] text-center md:text-left">
            ❌ PHOTO RESTRICTIONS
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {incorrectData &&
              incorrectData?.map((item, idx) => (
                <div key={`photoRest${idx}`} className="flex flex-col items-center rounded-2xl w-full mx-auto  max-w-[200px] ">
                  <img
                    alt=""
                    src={item?.imgPath}
                    className="w-full object-contain rounded-2xl"
                    width={150}
                    height={200}
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-2">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* {croppedImage && <img alt=""  src={croppedImage} />} */}
    </div>
  );
};

export default ImageSection;
