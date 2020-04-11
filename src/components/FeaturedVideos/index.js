import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function FeaturedVideos({ title, link, className, postType }) {
     return (
          <div className="mleft">
               <ul className={className}>
                    <li>
                         <Link to={[`/debate/${link}`].join(" ")} target="_blank">
                              <a className="postText">
                                   {title} - <i>{postType}</i>
                              </a>
                         </Link>
                    </li>
               </ul>
          </div>
     );
}

export default FeaturedVideos;
