import React from "react";
import { ButtonLink, Title } from "../styles/ComponentStyle";

const JobRoleContainer = ({ roleImg, title, btnName, bgColor, textColor, handleClick }) => (
  <>
    <Title text={title} />
    <div className="h-40 w-30">
      <img
        src={roleImg}
        className="h-full w-full object-contain object-center"
        alt=""
      />
    </div>
    <div className="text-center md:py-2">
      <ButtonLink bgColor={bgColor} textColor={textColor} text={btnName}
      clickHandler ={handleClick}
      />
    </div>
  </>
);

export default JobRoleContainer;
