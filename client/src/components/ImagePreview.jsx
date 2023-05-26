import { useState } from "react";
import { BsPen } from "react-icons/bs";

const ImagePreview = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const [image, setImage] = useState("");

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert("File Uploaded");
      console.log(selectedFile);
    } else {
      alert("select a file");
    }
  };

  const handleChange = (e) => {
    console.log("handle change", e.target.files);
    setImage(e.target.files[0]);
  };
  return (
    <div className="border shadow-lg rounded-2xl w-1/3 p-5">
      {/* <div className="bg-gray-300 flex justify-center items-center px-2">
        <div className="w-[320px] grid gap-2">
          <div className="h-24 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200">
            <input
              type="file"
              name="file"
              onChange={imageHandler}
              className="z-20 opacity-0 cursor-pointer h-full w-full"
            />
            <div className="absolute flex justify-center items-center gap-2">
              <img
                className={`h-10 w-10 rounded-full ${
                  checkFile ? "opacity-1" : "opacity-0"
                }`}
                src={selectedFile ? URL.createObjectURL(selectedFile) : null}
                alt="img"
              />
              <span className="text-[18px] w-56 truncate">
                {checkFile ? selectedFile.name : "choose a file"}
              </span>
            </div>
          </div>
          <button
            onClick={imagesubmission}
            className="w-full h-14 bg-green-600 text-white rounded-md"
          >
            Upload
          </button>
        </div>
      </div> */}
      <div className="flex justify-center">
        <div class="avatar-upload">
          <div class="avatar-edit">
            <input
              type="file"
              onChange={handleChange}
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
            />
            <label
              htmlFor="imageUpload"
              className="bg-gray-200  border-2 p-1 rounded-circle"
            >
              <BsPen />{" "}
            </label>
          </div>
          <div class="avatar-preview">
            <img
              className="border border-4"
              id="imagePreview"
              src={image ? URL.createObjectURL(image) : null}
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center mt-5">
        Allowed *.jpeg, *.jpg, *.png, *.gif, max size of 3.1 MB
      </p>
    </div>
  );
};

export default ImagePreview;
