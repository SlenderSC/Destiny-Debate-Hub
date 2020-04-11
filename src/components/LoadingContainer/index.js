import React from "react";
import PageContainer from "../PageContainer/index";
import LoadingSVG from "../../assets/Eclipse-1s-200px.svg";
import "./style.css";

function LoadingContainer({ title }) {
     return (
          <PageContainer>
               <text className="headerTitle">{title}</text>
               <div className="loadingContainer">
                    <img src={LoadingSVG} alt="Loading animation" />
               </div>
          </PageContainer>
     );
}

export default LoadingContainer;
