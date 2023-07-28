import React from "react";

const ResultCard = (props) => {
  const { image, name, link, heading, content } = props;

  return (
    <div className="ml-[18.5%] mt-[5vh]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="pt-2 ">
            <img
              class="w-8 rounded-full  md:pl-1 md:w-8 cursor-pointer"
              src={image}
              alt="..."
            ></img>
          </div>
          <div className="flex flex-col ml-2 ">
            <div className="text-md font">{name} </div>
            <div className="text-xs text-black-400 font	">{link}</div>
          </div>
        </div>

        <div className="mt-[1.5vh] hover:underline text-[#1a0db3] text-2xl font-[450] font	">
          {heading}
        </div>
        <div className="mt-[0.5vh] text-sm text-gray-600	 font-[450] font mr-[20%]">
          {content}{" "}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
