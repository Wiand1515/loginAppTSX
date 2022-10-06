import axios from "axios";

export const deletePost = async (postID:number) => {
  try {
    await axios.delete(`https://gorest.co.in/public/v2/posts/${postID}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GOREST_API_KEY}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
