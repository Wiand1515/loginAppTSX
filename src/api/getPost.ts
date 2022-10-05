import axios from "axios";

export const getPosts = async (userID: number) => {
  const resp = await axios.get(
    `https://gorest.co.in/public/v2/users/${userID}/posts`,
    {
      headers: {
        Authorization: `Bearer 3ea635f926302866c560b78fe90d2c166b6460808415307840ba3ef5fcc6d480`,
      },
    }
  );

  return resp.data;
};
