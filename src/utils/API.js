import axios from "axios";

export default {
     getAllDebateData: function() {
          return axios.get(`/api/allDebateData/`);
     },

     getSpecificDebateData: function(debateId) {
          return axios.get(`/api/specificDebateData/` + debateId, debateId);
     },

     getGroupData: function() {
          return axios.get(`/api/groupData/`);
     }
};
