import React from "react";


const Links = ({ linkName, className, icon }) => {
  return (
    <div className="flex underline gap-4">
      <a className={className}>{linkName}</a>
      <img src={icon} />
    </div>
  );
};

export default Links;
