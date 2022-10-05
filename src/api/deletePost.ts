import axios from "axios";

export const deletePost = async (postID:number) => {
  try {
    await axios.delete(`https://gorest.co.in/public/v2/posts/${postID}`, {
      headers: {
        Authorization: `Bearer 3ea635f926302866c560b78fe90d2c166b6460808415307840ba3ef5fcc6d480`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
