import axios from "axios";

async function getUserData(userId) {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  
    const { id, name, username, email, address, phone, website, company } = userResponse.data;
  
    const userData = {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
      posts: postsResponse.data,
    };
  
    return userData;
  }


export default getUserData

