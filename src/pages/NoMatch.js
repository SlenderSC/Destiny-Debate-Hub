import React, { Component } from "react";
import PageContainer from "../components/PageContainer/index";
import DuckerZ from "../assets/duckerz.png";
import "./styles/Home.css";

class Home extends Component {
     render() {
          return (
               <PageContainer>
                    <div className="NoMatchContainer">
                         <h1 className="NoMatchHeader">404</h1>
                         <text>The page you are looking for isn't available</text>
                         <img className="duckerz" src={DuckerZ} alt="DuckerZ emote"/>
                    </div>
               </PageContainer>
          );
     }
}

export default Home;
