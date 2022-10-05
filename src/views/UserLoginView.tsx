import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/common/ButtonComponent/Button";
import { TextInputComponent } from "../components/common/InputComponent/TextInputComponent";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks";

interface state {
  [key: string]: number;
}

export const UserLoginView = () => {
  const initialForm = {
    id: "",
  };

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const { formState, onInputChange } = useForm(initialForm);

  const handleSubmit = async (form: state) => {
    if (!form.id) {
      console.log("Login Error")
      return
    }

    try {
      const resp = await axios.get(
        `https://gorest.co.in/public/v2/users/${form.id}`,
        {
          headers: {
            Authorization: `Bearer 3ea635f926302866c560b78fe90d2c166b6460808415307840ba3ef5fcc6d480`,
          },
        }
      );
      console.log('flag1')
      console.log(resp.status)

      if (resp.status === 200) {
        console.log(resp.data)
        login(resp.data)
      };
      navigate("/posts", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="bg-white rounded-lg p-4 w-9/12 sm:w-1/2 lg:w-4/12">
        <TextInputComponent
          name="id"
          onChange={onInputChange}
          label="userID:"
        />
        <div className="flex justify-end my-2">
          <Link to='/register' className="text-blue-700 underline">Register</Link>
        </div>
        <Button
          className="bg-green-500 w-1/2 text-lg font-bold text-white mt-2"
          label="Login"
          onClick={() => handleSubmit(formState)}
        />
      </div>
    </div>
  );
};
