import React, { useRef, useState } from "react";
import "./styles.css";
import { GoPlus } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { FaCropSimple } from "react-icons/fa6";
import heic2any from "heic2any";

const DragAndDrop = ({
  files,
  setFiles,
  selectedImage,
  setSelectedImage,
  fileErrorMsg,
  setFileErrorMsg,
  maxUploads,
  imgCropRef,
  toolContainerRef,
  type = "Regular",
}) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Object.fromEntries(
      Object.entries(event.target.files).slice(0, maxUploads)
    );
    const filesArray = Object.keys(selectedFiles).map(
      (key) => selectedFiles[key]
    );
    filesArray.forEach((file) => {
      if (file.size / 1000000 <= 2) {
        displayFile(file);
      } else {
        setFileErrorMsg("Couldn't upload file greater than  2mb");
        return;
      }
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFiles = Object.fromEntries(
      Object.entries(event.dataTransfer.files).slice(0, maxUploads)
    );
    const filesArray = Object.keys(selectedFiles).map(
      (key) => selectedFiles[key]
    );
    filesArray.forEach((file) => {
      if (file.size / 1000000 <= 2) {
        displayFile(file);
      } else {
        setFileErrorMsg("Couldn't upload file greater than  2mb");
        return;
      }
    });
  };

  const displayFile = async (selectedFile) => {
    let imgData = selectedFile;
  // console.log(imgData);
    let jpegData;
    const fileNameArr = selectedFile.name.split(".");
    if (fileNameArr[1] === "heic" || fileNameArr[1] === "HEIC") {
      jpegData = await heic2any({ blob: selectedFile, toType: "image/jpeg" });
    // console.log(jpegData);
      imgData = new File(
        [jpegData],
        selectedFile.name.replace(".heic", ".jpg"),
        {
          type: "image/jpeg",
          lastModified: selectedFile.lastModified,
          lastModifiedDate: selectedFile.lastModifiedDate,
        }
      );
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileURL = fileReader.result;
      setFiles((prevImages) => {
        if (prevImages.length < maxUploads) {
          return [...prevImages, fileURL];
        } else {
          setFileErrorMsg(null);
          return prevImages;
        }
      });
    };
    fileReader.readAsDataURL(imgData);
  };

  const deleteFile = (file) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(file);
      if (selectedImage === file) {
        setSelectedImage(null);
      }
      newSelection.splice(fileIndex, 1);
      return newSelection;
    });
    // Reset the input so the same file can be uploaded again
    inputRef.current.value = null;
  };

  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg overflow-auto p-4">
      <div
        className={`w-full border-dashed p-3  border-2  rounded-2xl ${
          isDragActive ? "border-blue-600" : "border-gray-400"
        }`}
      >
        <div
          className={`drag-area  flex flex-col items-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="icon">
            <GoPlus />
          </div>
          <span className="header">Drag & Drop</span>
          <span className="header">
            or{" "}
            <label
              htmlFor="fileInput"
              className="text-blue-600 px-1 rounded-sm cursor-pointer"
            >
              browse
            </label>
          </span>
          <input
            id="fileInput"
            type="file"
            multiple
            maxLength={maxUploads}
            hidden
            onChange={handleFileChange}
            ref={inputRef}
            accept=".heic, .jpg, .jpeg, .png"
          />
        </div>
      </div>
      {fileErrorMsg && (
        <div className="text-red-500 text-center text-lg">{fileErrorMsg}</div>
      )}
      <div className="w-full flex flex-wrap gap-2">
        {files &&
          files?.map((item, idx) => (
            <div
              key={`previewImg${idx}`}
              className="w-[120px] h-auto rounded-lg flex flex-col gap-1"
            >
              <div className="shadow-[0_0_0_1px#c9c9c9] rounded-lg h-2/3 max-h-[150px]">
                <img
                  alt=""
                  src={item}
                  className="w-full h-full rounded-lg object-contain"
                />
              </div>
              <div className="flex justify-center w-full gap-4">
                <div className="transition duration-300 ">
                  <FaCropSimple
                    size={24}
                    className="text-blue-500 cursor-pointer hover:text-blue-800"
                    onClick={() => {
                      setSelectedImage(item);
                      if (screen.width > 750) {
                        imgCropRef.current.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      } else {
                        imgCropRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                  />
                </div>
                <div className="transition duration-300">
                  <MdDelete
                    size={24}
                    className="text-blue-500 cursor-pointer hover:text-blue-800"
                    onClick={() => deleteFile(item)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="px-6 text-sm">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Upload requirements:
        </h2>
        <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside">
          <li>
            {type === "freeHeadshot"
              ? "Please upload 1 image."
              : "Please upload 1-4 images."}
          </li>
          <li>Accepted format .jpeg, .jpg or .heic</li>
          <li>Please ensure that your image is less than 2mb</li>
          <li>Please make sure only 1 person is in the image.</li>
          <li>
            Please ensure all your information is correct as you will not able
            to change this later.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DragAndDrop;
