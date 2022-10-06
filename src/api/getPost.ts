import axios from "axios";

export const getPosts = async (userID: number) => {
  console.log(userID)
  
  const resp = await axios.get(
    `https://gorest.co.in/public/v2/users/3335/posts`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GOREST_API_KEY}`,
      },
    }
  );

  console.log(resp.data);

  return resp.data;
};
