import React, { Component } from "react";
import PageContainer from "../components/PageContainer/index";
import Notification from "../components/Notification/index";
import "./styles/Home.css";

class Home extends Component {
     render() {
          return (
               <PageContainer>
                    <Notification />
                    <h3 className="is-3 headerTitle">Welcome to Destiny Debate Hub</h3>
                    <div className="blockWrapper">
                         <div className="homeHeader">What is this site?</div>
                         <ul className="homeWrapper">
                              <li className="homeItem">
                                   A site that catalogs Destiny's (the streamer) political debates and content by the
                                   individuals featured and the topics covered
                              </li>
                         </ul>
                         <div className="homeHeader homeSpace">What are each of the tabs?</div>
                         <ul className="homeWrapper">
                              <li className="homeItem">
                                   <i>Featured</i> - Individuals participating or the heavy focus of discussion for a
                                   debate
                              </li>
                              <li className="homeItem">
                                   <i>Topics</i> - Topics that are covered in the debate. Includes individuals that are
                                   briefly mentioned but aren't featured in the debate
                              </li>
                              <li className="homeItem">
                                   <i>Press</i> - Collection of news articles that feature Destiny
                              </li>
                         </ul>
                         <div className="homeHeader homeSpace">
                              I noticed that one of his debates/political videos isn't found on this site; why is that?
                         </div>
                         <ul className="homeWrapper">
                              <li className="homeItem">
                                   So far only about ~200 videos have been cataloged and added. There is a good chance
                                   it just hasn't been added yet but will in the future.
                              </li>
                         </ul>
                         <div className="homeHeader homeSpace">Does this site feature any easter eggs?</div>
                         <ul className="homeWrapper">
                              <li className="homeItem">Sure, probably, I'd have to think about it</li>
                         </ul>
                    </div>
               </PageContainer>
          );
     }
}

export default Home;
