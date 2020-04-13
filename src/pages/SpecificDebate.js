import React, { Component } from "react";
import API from "../utils/API";
import "./styles/SpecificDebate.css";

import VideoFeaturedModule from "../components/VideoFeaturedModule/index";
import VideoTagsModule from "../components/VideoTagsModule/index";
import LoadingSVG from "../assets/Eclipse-1s-200px.svg";
import PageContainer from "../components/PageContainer/index";

class SpecificDebate extends Component {
     state = {
          title: "",
          date: "",
          featured: [""],
          tags: [""],
          urlid: "",
          loading: true,
          error: false,
     };

     componentWillMount() {
          let debateId = this.props.match.params.id;
          this.getSpecificDebateData(debateId);
     }

     getSpecificDebateData = (debateId) => {
          API.getSpecificDebateData(debateId)
               .then((res) => {
                    this.setState({
                         title: res.data.Item.title,
                         date: res.data.Item.date,
                         featured: res.data.Item.features,
                         tags: res.data.Item.tags,
                         urlid: res.data.Item.url,
                         loading: false,
                    });
               })
               .catch((err) => window.location.assign("/YouTriedToEnterAnInvalidDebateIDEitherYouDidntEnterANumberOrPickedAValueThatDoesntExistDuckerZ"));
     };

     render() {
          return this.state.loading ? (
               <PageContainer>
                    <div className="loadingContainer">
                         <img src={LoadingSVG} alt="Loading animation"/>
                    </div>
               </PageContainer>
          ) : (
               <PageContainer>
                    <div className="innerContainer">
                         <div className="video-container">
                              <iframe
                                   title="title"
                                   width="560"
                                   height="315"
                                   src={[`https://www.youtube.com/embed/${this.state.urlid}`].join(" ")}
                                   frameborder="0"
                                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                   allowfullscreen="allowfullscreen"
                              ></iframe>
                         </div>
                         <div className="columns">
                              <div className="column">
                                   <div className="videoInfoContainer">
                                        <div className="tagsWrapper">
                                             <i className="titleText">{this.state.title}</i>
                                             <p className="postText">Streamed on: {this.state.date}</p>
                                        </div>

                                        <div className="featuredWrapper">
                                             <p>Features: </p>
                                             {this.state.featured.map((returnedFeaturedData, index) => (
                                                  <VideoFeaturedModule key={index} featured={returnedFeaturedData} />
                                             ))}
                                        </div>
                                   </div>
                              </div>
                              <div className="column">
                                   <div className="tagsWrapper">
                                        <text className="titleText">Topics: </text>
                                        {this.state.tags.map((returnedTagsData, index) => (
                                             <VideoTagsModule key={index} tags={returnedTagsData} />
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </PageContainer>
          );
     }
}

export default SpecificDebate;
