import axios from "axios";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/common/ButtonComponent/Button";
import { TextInputComponent } from "../components/common/InputComponent/TextInputComponent";
import { useForm } from "../hooks";

export const UserRegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const initialForm = {
    name: "",
    email: "",
    gender: "male",
    status: "active",
  };

  const { formState, onInputChange } = useForm(initialForm);

  const handleSubmit = async (form: {}) => {
    setIsLoading(true)
    try {
      const resp = await axios.post(
        "https://gorest.co.in/public/v2/users",
        form,
        {
          headers: {
            Authorization: `Bearer 3ea635f926302866c560b78fe90d2c166b6460808415307840ba3ef5fcc6d480`,
          },
        }
      );

      alert(`userid: ${resp.data.id} `)
      setIsLoading(false)
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="bg-white rounded-lg p-4 w-9/12 sm:w-1/2">
        <div className="flex justify-start">
          <Link to='/' className="text-blue-700 underline">Login</Link>
        </div>
        <div className="flex place-items-end py-3">
          <BiUser size={30} fill="rgb(107,114,118,0.9)" />
          <h1 className="text-2xl font-bold ml-2 text-gray-500">New User</h1>
        </div>

        <TextInputComponent
          containerClass={"mb-2"}
          name="name"
          onChange={onInputChange}
          label="Name"
        />
        <TextInputComponent
          containerClass={"mb-2"}
          name="email"
          onChange={onInputChange}
          label="Email"
        />
        <TextInputComponent
          containerClass={"mb-2"}
          name="status"
          onChange={onInputChange}
          label="Status"
        />
        <TextInputComponent
          containerClass={"mb-2"}
          name="gender"
          onChange={onInputChange}
          label="Gender"
        />
        {
          isLoading ?
            <Button
              className="bg-green-500 w-1/2 text-lg font-bold text-white"
              label="Loading"
              disabled={true}
            />
            :
            <Button
              className="bg-green-500 w-1/2 text-lg font-bold text-white"
              label="Register"
              onClick={() => handleSubmit(formState)}
            />
        }

      </div>
    </div>
  );
};
