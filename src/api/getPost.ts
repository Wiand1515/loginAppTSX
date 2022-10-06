import axios from "axios";

export const getPosts = async (userID: number) => {
  const resp = await axios.get(
    `https://gorest.co.in/public/v2/users/${userID}/posts`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GOREST_API_KEY}`,
      },
    }
  );

  return resp.data;
};
