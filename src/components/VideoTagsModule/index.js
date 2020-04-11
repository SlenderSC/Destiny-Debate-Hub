import React from "react";
import "./style.css";

function VideoTagsModule({ tags }) {
     return (
          <ul>
               <li className="tagItem">{tags}</li>
          </ul>
     );
}

export default VideoTagsModule;
