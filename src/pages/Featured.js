import React, { Component } from "react";
import API from "../utils/API";
import "./styles/Featured.css";
import find from "lodash/find";

import PageContainer from "../components/PageContainer/index";
import LoadingContainer from "../components/LoadingContainer/index";
import FeaturedContainer from "../components/FeaturedContainer/index";
import FeaturedVideos from "../components/FeaturedVideos/index";

class Featured extends Component {
     state = {
          returnedData: [],
          featuredList: [
               {
                    featured: "",
                    visibility: "",
                    videos: [
                         {
                              title: "",
                              link: "",
                         },
                    ],
               },
          ],
          featuredCheckList: [],
          error: true,
     };

     componentDidMount() {
          this.getAllDebateData();
     }

     getAllDebateData = () => {
          API.getAllDebateData()
               .then((res) => {
                    this.setState(
                         {
                              returnedData: res.data,
                              error: false,
                         },
                         function () {
                              this.parseFeaturedData(
                                   this.state.returnedData,
                                   this.state.featuredList,
                                   this.state.featuredCheckList
                              );
                         }
                    );
               })
               .catch((err) => console.log(err));
     };

     parseFeaturedData = (returnedData, featuredList, fCheckList) => {
          for (let i = 0; i < returnedData.length; i++) {
               if (returnedData[i].features.length > 1) {
                    for (let j = 0; j < returnedData[i].features.length; j++) {
                         if (
                              fCheckList.indexOf(returnedData[i].features[j]) === -1 &&
                              returnedData[i].features[j] !== "None"
                         ) {
                              this.newObjPush(returnedData, featuredList, fCheckList, [i], [j]);
                         } else {
                              this.existingObjPush(returnedData, featuredList, [i], [j]);
                         }
                    }
               } else {
                    if (
                         fCheckList.indexOf(returnedData[i].features[0]) === -1 &&
                         returnedData[i].features[0] !== "None"
                    ) {
                         this.newObjPush(returnedData, featuredList, fCheckList, [i], 0);
                    } else {
                         this.existingObjPush(returnedData, featuredList, [i], [0]);
                    }
               }
          }
          let Arr = this.state.featuredList;
          Arr.splice(0, 1);
          Arr.sort(function (a, b) {
               var textA = a.featured.toUpperCase();
               var textB = b.featured.toUpperCase();
               return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
          this.setState({
               featuredList: Arr,
          });
     };

     newObjPush = (returnedData, featuredList, fCheckList, iValue, fValue) => {
          fCheckList.push(returnedData[iValue].features[fValue]);
          let newObjFeature = {
               featured: returnedData[iValue].features[fValue],
               visibility: "hidState",
               videos: [
                    {
                         title: returnedData[iValue].title,
                         link: returnedData[iValue].id,
                         postType: returnedData[iValue].postType,
                    },
               ],
          };
          featuredList.push(newObjFeature);
     };

     existingObjPush = (returnedData, featuredList, iValue, fValue) => {
          let result = find(featuredList, {
               featured: returnedData[iValue].features[fValue],
          });
          if (result !== undefined) {
               let newObjVideo = {
                    title: returnedData[iValue].title,
                    link: returnedData[iValue].id,
                    postType: returnedData[iValue].postType,
               };
               result.videos.push(newObjVideo);
          }
     };

     handleVisibility = (event) => {
          let target;
          event.target.getAttribute("data") !== null ? (target = event.target.getAttribute("data")) : (target = "None");

          let featuredList = this.state.featuredList;
          let foundIndex = featuredList.findIndex((x) => x.featured === target);
          if (featuredList[foundIndex].visibility === "hidState") {
               featuredList[foundIndex].visibility = "visState";
               return this.setState({
                    featuredList: featuredList,
               });
          } else {
               featuredList[foundIndex].visibility = "hidState";
               return this.setState({
                    featuredList: featuredList,
               });
          }
     };

     render() {
          return this.state.error ? (
               <LoadingContainer title="Featured" />
          ) : (
               <PageContainer>
                    <text className="headerTitle">Featured</text>
                    <div className="listWrapper">
                         {this.state.featuredList.map((featuredListData, index) => (
                              <div>
                                   <FeaturedContainer
                                        key={index}
                                        title={featuredListData.featured}
                                        length={featuredListData.videos.length}
                                        onClick={this.handleVisibility}
                                        data={featuredListData.featured}
                                   />
                                   {featuredListData.videos.map((videoData, index) => (
                                        <FeaturedVideos
                                             key={index}
                                             title={videoData.title}
                                             link={videoData.link}
                                             postType={videoData.postType}
                                             className={featuredListData.visibility}
                                        />
                                   ))}
                              </div>
                         ))}
                    </div>
               </PageContainer>
          );
     }
}

export default Featured;
