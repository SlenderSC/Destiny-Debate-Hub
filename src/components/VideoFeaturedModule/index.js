import React from "react";
import "./style.css";

function VideoFeaturedModule({ featured }) {
     return (
          <ul>
               <li className="featuredItem">{featured}</li>
          </ul>
     );
}

export default VideoFeaturedModule;
