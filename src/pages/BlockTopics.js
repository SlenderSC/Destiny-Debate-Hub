import React, { Component } from "react";
import API from "../utils/API";
import "./styles/BlockTopics.css";
import find from "lodash/find";

import PageContainer from "../components/PageContainer/index";
import LoadingContainer from "../components/LoadingContainer/index";
import FeaturedContainer from "../components/FeaturedContainer/index";
import FeaturedVideos from "../components/FeaturedVideos/index";

class BlockTopics extends Component {
     state = {
          None: [],
          altRightGroupCheck: [],
          altRightGroup: [],
          contentCreatorsGroupCheck: [],
          contentCreatorsGroup: [],
          economicsGroupCheck: [],
          economicsGroup: [],
          healthcareGroupCheck: [],
          healthcareGroup: [],
          musicGroupCheck: [],
          musicGroup: [],
          otherGroupCheck: [],
          otherGroup: [],
          philosophyGroupCheck: [],
          philosophyGroup: [],
          relationshipsGroupCheck: [],
          relationshipsGroup: [],
          scienceGroupCheck: [],
          scienceGroup: [],
          USPoliticsGroupCheck: [],
          USPoliticsGroup: [],
          WorldGroupCheck: [],
          WorldGroup: [],
          placeHolder: [],
          Settings: [
               {
                    title: "US Politics",
                    className: "visVisbile",
                    data: "USPoliticsGroup",
                    toggleContent: "-",
               },
               {
                    title: "Alternative Media",
                    className: "visVisbile",
                    data: "altRightGroup",
                    toggleContent: "-",
               },
               {
                    title: "Content Creators",
                    className: "visVisbile",
                    data: "contentCreatorsGroup",
                    toggleContent: "-",
               },
               {
                    title: "Economics and Finance",
                    className: "visVisbile",
                    data: "economicsGroup",
                    toggleContent: "-",
               },
               {
                    title: "Philosophy",
                    className: "visVisbile",
                    data: "philosophyGroup",
                    toggleContent: "-",
               },
               {
                    title: "Science and Technology",
                    className: "visVisbile",
                    data: "scienceGroup",
                    toggleContent: "-",
               },
               {
                    title: "Music",
                    className: "visVisbile",
                    data: "musicGroup",
                    toggleContent: "-",
               },
               {
                    title: "World Politics",
                    className: "visVisbile",
                    data: "WorldGroup",
                    toggleContent: "-",
               },
               {
                    title: "Healthcare",
                    className: "visVisbile",
                    data: "healthcareGroup",
                    toggleContent: "-",
               },
               {
                    title: "Relationships and LGBTQ",
                    className: "visVisbile",
                    data: "relationshipsGroup",
                    toggleContent: "-",
               },
               {
                    title: "Other",
                    className: "visVisbile",
                    data: "otherGroup",
                    toggleContent: "-",
               },
          ],
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
          this.getGroupData();
     }

     getGroupData = () => {
          API.getGroupData()
               .then((res) => {
                    this.setState(
                         {
                              altRightGroupCheck: res.data[0].altRGroupCheck,
                              contentCreatorsGroupCheck: res.data[0].contentCreatorsGroupCheck,
                              economicsGroupCheck: res.data[0].economicsGroupCheck,
                              relationshipsGroupCheck: res.data[0].relationshipsGroupCheck,
                              healthcareGroupCheck: res.data[0].healthcareGroupCheck,
                              musicGroupCheck: res.data[0].musicGroupCheck,
                              otherGroupCheck: res.data[0].otherGroupCheck,
                              philosophyGroupCheck: res.data[0].philosophyGroupCheck,
                              scienceGroupCheck: res.data[0].scienceGroupCheck,
                              USPoliticsGroupCheck: res.data[0].USPoliticsGroupCheck,
                              WorldGroupCheck: res.data[0].WorldGroupCheck,
                         },
                         function () {
                              this.getAllDebateData();
                         }
                    );
               })
               .catch((err) => console.log(err));
     };

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
               if (returnedData[i].tags.length > 1) {
                    for (let j = 0; j < returnedData[i].tags.length; j++) {
                         if (fCheckList.indexOf(returnedData[i].tags[j]) === -1 && returnedData[i].tags[j] !== "None") {
                              this.newObjPush(returnedData, featuredList, fCheckList, [i], [j]);
                         } else {
                              this.existingObjPush(returnedData, featuredList, [i], [j]);
                         }
                    }
               } else {
                    if (fCheckList.indexOf(returnedData[i].tags[0]) === -1 && returnedData[i].tags[0] !== "None") {
                         this.newObjPush(returnedData, featuredList, fCheckList, [i], 0);
                    } else {
                         this.existingObjPush(returnedData, featuredList, [i], [0]);
                    }
               }
          }
          let Arr = this.state.featuredList;
          Arr.splice(0, 1);
          //pushing values into the array doesn't trigger the refresh of the state so the props are never passed down
          //Not sure if there is a better way to do this but this forces the refresh at least for now
          this.setState(
               {
                    featuredList: Arr,
               },
               function () {
                    this.checkGroup(
                         this.state.featuredList,
                         this.state.altRightGroupCheck,
                         this.state.contentCreatorsGroupCheck,
                         this.state.economicsGroupCheck,
                         this.state.philosophyGroupCheck,
                         this.state.healthcareGroupCheck,
                         this.state.musicGroupCheck,
                         this.state.otherGroupCheck,
                         this.state.relationshipsGroupCheck,
                         this.state.scienceGroupCheck,
                         this.state.USPoliticsGroupCheck,
                         this.state.WorldGroupCheck
                    );
               }
          );
     };

     newObjPush = (returnedData, featuredList, fCheckList, iValue, fValue) => {
          fCheckList.push(returnedData[iValue].tags[fValue]);
          let newObjFeature = {
               featured: returnedData[iValue].tags[fValue],
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
               featured: returnedData[iValue].tags[fValue],
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

     checkGroup = (
          featuredList,
          AltRCheck,
          contentCreateCheck,
          EconCheck,
          PhilosoCheck,
          healthcareCheck,
          musicCheck,
          otherCheck,
          RelationCheck,
          ScienceCheck,
          USPoliticsCheck,
          WorldCheck
     ) => {
          for (let i = 0; i < featuredList.length; i++) {
               this.searchGroupIndex(USPoliticsCheck, this.state.USPoliticsGroup, featuredList, [i]);
               this.searchGroupIndex(AltRCheck, this.state.altRightGroup, featuredList, [i]);
               this.searchGroupIndex(contentCreateCheck, this.state.contentCreatorsGroup, featuredList, [i]);
               this.searchGroupIndex(EconCheck, this.state.economicsGroup, featuredList, [i]);
               this.searchGroupIndex(PhilosoCheck, this.state.philosophyGroup, featuredList, [i]);
               this.searchGroupIndex(healthcareCheck, this.state.healthcareGroup, featuredList, [i]);
               this.searchGroupIndex(ScienceCheck, this.state.scienceGroup, featuredList, [i]);
               this.searchGroupIndex(musicCheck, this.state.musicGroup, featuredList, [i]);
               this.searchGroupIndex(otherCheck, this.state.otherGroup, featuredList, [i]);
               this.searchGroupIndex(RelationCheck, this.state.relationshipsGroup, featuredList, [i]);
               this.searchGroupIndex(WorldCheck, this.state.WorldGroup, featuredList, [i]);
          }
     };

     searchGroupIndex = (groupCheck, pushGroup, featuredList, iValue) => {
          let index = groupCheck.findIndex((x) => x === featuredList[iValue].featured);
          let Arr = pushGroup;
          Arr.sort(function (a, b) {
               var textA = a.featured.toUpperCase();
               var textB = b.featured.toUpperCase();
               return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
          if (index !== -1) {
               Arr.push(featuredList[iValue]);
               this.setState({
                    pushGroup: Arr,
               });
          }
     };

     handleVisibility = (event) => {
          let target, inner, groupList;
          event.target.getAttribute("data") !== null ? (target = event.target.getAttribute("data")) : (target = "None");
          event.target.innerText !== null ? (inner = event.target.innerText) : (inner = event.target.innerText);

          groupList = this.state[target];
          let foundIndex = groupList.findIndex((x) => x.featured === inner);
          if (groupList[foundIndex].visibility === "hidState") {
               groupList[foundIndex].visibility = "visState";
               return this.setState({
                    featuredList: groupList,
               });
          } else {
               groupList[foundIndex].visibility = "hidState";
               return this.setState({
                    featuredList: groupList,
               });
          }
     };

     handleGroupToggle = (event) => {
          let index = this.state.Settings.findIndex((x) => x.data === event.target.getAttribute("data"));
          let Arr = this.state.Settings;
          Arr[index].toggleContent === "-" ? (Arr[index].toggleContent = "+") : (Arr[index].toggleContent = "-");
          Arr[index].toggleContent === "-"
               ? (Arr[index].className = "visVisbile")
               : (Arr[index].className = "visHidden");
          this.setState({
               Settings: Arr,
          });
     };

     render() {
          return this.state.error ? (
               <LoadingContainer title="Topics/Tags" />
          ) : (
               <PageContainer>
                    <div className="headerTitle">Topics/Tags</div>
                    {this.state.Settings.map((settingsData, index) => (
                         <div className="blockWrapper">
                              <span className="blockTitle">
                                   <i>{settingsData.title}</i>
                              </span>
                              <button
                                   className="button is-black toggleButton"
                                   data={settingsData.data}
                                   onClick={this.handleGroupToggle}
                              >
                                   {settingsData.toggleContent}
                              </button>

                              {this.state[settingsData.data].map((featuredListData, index) => (
                                   <div className={settingsData.className}>
                                        <div>
                                             <FeaturedContainer
                                                  key={index}
                                                  title={featuredListData.featured}
                                                  length={featuredListData.videos.length}
                                                  onClick={this.handleVisibility}
                                                  data={settingsData.data}
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
                                   </div>
                              ))}
                         </div>
                    ))}
               </PageContainer>
          );
     }
}

export default BlockTopics;
