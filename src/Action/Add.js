import axios from "axios";

export const addUserAction = userData => {
  
  axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
  var axiosConfig = {
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        'contentType' : "application/json",

                        // "Access-Control-Allow-Origin": "*",
                        'Accept': '*',
                    }
                };
  return axios.post("http://localhost:8080/addRelation", userData, axiosConfig)
                .then((response) => {
                    console.log('response');
                    console.log(response);
                })
                .catch((error) => {
                    console.log('errorfdhjfghjkhgfdfghjkhgfdxfchkjgfxdfchj');
                    console.log(error);
                });
  };

  export const updateRelationAction = userData => {
//  console.log("topicData====> "+topicData);
  axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });
  var axiosConfig = {
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        'contentType' : "application/json",

                        // "Access-Control-Allow-Origin": "*",
                        'Accept': '*',
                    }
                };
  return axios
    .post("/updateRelation", userData)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};


export const getAllRelationAction = () =>  {
  return axios
    .get("http://localhost:8080/getAllRelation")
    .then(res => {
      console.log("aaaaaaaaaaaaaaaaaaaaa");
      console.log(res.data);
      return res.data;
    })
    .catch(err =>
      console.log(err)
    );
};