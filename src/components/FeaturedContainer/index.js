import React from "react";
import "./style.css";

function FeaturedContainer({ title, length, onClick, data }) {
     return (
          <div className="fContainerWrapper">
               <span className="featuredContainer">
                    <u onClick={onClick} data={data}>{title}</u>
               </span>{" "}
               <span>
                    {" - "}
                    <i>({length})</i>
               </span>
          </div>
     );
}

export default FeaturedContainer;
