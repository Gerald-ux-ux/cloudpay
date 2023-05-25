import React from "react";
import images from "../../Assets/Images/Auth";

function login() {
  return (
    <div className=" flex flex-col justify-center w-11/12">
      {images.map((image) => (
        <div className="flex  items-center">
          <div className="flex justify-center space-x-2 space-y-10 items-center">
            <img src={image.src} alt="" className="mt-6" />
            <div className="flex flex-col ">
              <p className="font-bold text-base">{image.title}</p>
              <p dangerouslySetInnerHTML={{ __html: image.caption }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default login;
