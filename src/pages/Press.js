import React, { Component } from "react";
import PageContainer from "../components/PageContainer/index";
import "./styles/Press.css";

class Press extends Component {
     state = {};

     componentWillMount() {}

     render() {
          return (
               <PageContainer>
                    <span className="tag is-dark">News Articles</span>
                    <ul className="pressItemWrapper">
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.wired.com/story/twitch-politics-online-debate/"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   <i>Can This Notorious Troll Turn People Away From Extremism?</i>
                              </a>{" "}
                              - by Trevor Quirk - <b>Wired</b>, January 2020
                         </li>
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.npr.org/2019/07/09/739999739/youtube-creators-are-trying-to-fight-radicalization-online"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   <i>YouTube Creators Are Trying To Fight Radicalization Online</i>
                              </a>{" "}
                              - All Things Considered (Radio) - <b>NPR</b>, July 2019
                         </li>
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.nytimes.com/interactive/2019/06/08/technology/youtube-radical.html"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   <i>The Making of a YouTube Radical</i>
                              </a>{" "}
                              - by Kevin Roose - <b>The New York Times</b>, June, 2019
                         </li>
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.magzter.com/article/News/Mother-Jones/Call-of-Duty/"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   <i>
                                        Meet the streamer who fights the online right while speaking the language of
                                        gamergate
                                   </i>
                              </a>{" "}
                              - by Ali Breland - <b>Mother Jones</b>, 2019
                         </li>
                    </ul>
                    <span className="tag is-dark">US Congressional Candidate Interviews</span>
                    <ul className="pressItemWrapper">
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.youtube.com/watch?v=TMO5Q_L9W6I"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   Skylar Hurwitz
                              </a>
                              <text> - </text>
                              <a className="pressItem" href="https://www.skylarforcongress.com/" target="_blank" rel="noopener noreferrer">
                                   Pennsylvania 1st District
                              </a>
                              <text> - January 2020</text>
                         </li>
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.youtube.com/watch?v=QeIqlTNUpFU"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   Jose Caballero
                              </a>
                              <text> - </text>
                              <a className="pressItem" href="https://joseforcongress.us/" target="_blank" rel="noopener noreferrer">
                                   California 53rd District
                              </a>
                              <text> - October 2019</text>
                         </li>
                         <li>
                              <a
                                   className="pressItem"
                                   href="https://www.youtube.com/watch?v=9AoEIeVrbWU"
                                   target="_blank" rel="noopener noreferrer"
                              >
                                   Liam O'Mara
                              </a>
                              <text> - </text>
                              <a className="pressItem" href="https://www.liamomara.org/" target="_blank" rel="noopener noreferrer">
                                   California 42nd District
                              </a>
                              <text> - August 2019</text>
                         </li>
                    </ul>
               </PageContainer>
          );
     }
}

export default Press;
