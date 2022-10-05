import axios from "axios";
import { useState } from "react";
import { getPosts } from "../../api";
import { useForm } from "../../hooks";
import { Button } from "../common/ButtonComponent/Button";
import { TextArea } from "../common/InputComponent/TextArea";
import { TextInputComponent } from "../common/InputComponent/TextInputComponent";

export const NewPostCard = ({ setter }: any) => {
  const [isLoading, setIsLoading] = useState(false)

  const initialForm = {
    title: "",
    body: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(initialForm);

  const user = JSON.parse(localStorage.getItem("user") || '{}');

  const handleSubmit = async (form: {}) => {
    setIsLoading(true)
    try {
      await axios.post(
        `https://gorest.co.in/public/v2/users/${user.id}/posts`,
        form,
        {
          headers: {
            Authorization: `Bearer 3ea635f926302866c560b78fe90d2c166b6460808415307840ba3ef5fcc6d480`,
          },
        }
      );

      await getPosts(user.id).then((response) => setter(response));
      onResetForm();
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  return (
    <div className="shadow-box w-10/12 rounded-md flex flex-col items-center justify-between transform transition duration-300 hover:scale-105">
      <div className="flex items-center py-4 px-2 border-b-2 border-gray-200 w-full">
        <TextInputComponent
          onChange={onInputChange}
          name={"title"}
          label={"title"}
          value={formState.title}
        />
      </div>
      <div className="p-2 w-full">

        <TextArea name="body"
          placeholder="Message..."
          onChange={onInputChange}
          value={formState.body}
          className="border-2 w-full resize-none h-28" />

      </div>
      {
        isLoading ?
          <Button
            label={"Loading"}
            disabled={true}
            className="bg-green-500 text-white font-bold w-11/12 mb-2"
          />
          :
          <Button
            label={"Create new Post"}
            className="bg-green-500 text-white font-bold w-11/12 mb-2"
            onClick={() => handleSubmit(formState)}
          />
      }

    </div>
  );
};
