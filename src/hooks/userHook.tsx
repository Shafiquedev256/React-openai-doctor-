import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
};

type UserInfo = {
  email: string;
  password: string;
};

export const useUser = () => {
  const [registering, setRegistering] = useState(false);
  const navigate = useNavigate();
  const register = (info: User) => {
    setRegistering(true);
    axios.post(import.meta.env.VITE_SIGNUP, info).then((json) => {
      setRegistering(false);
      localStorage.setItem("_user_details", JSON.stringify(json.data));
      navigate("/", { replace: true });
    });
  };

  const login = (userInfo: UserInfo) => {
    axios
      .get(`${import.meta.env.VITE_SIGNIN}/${userInfo.email}`)
      .then((json) => {
        if (
          json.data.email === userInfo.email &&
          json.data.userName === userInfo.password
        ) {
          localStorage.setItem("_user_details", JSON.stringify(json.data));
          return navigate("/");
        }
      });
  };

  return { register, login, registering };
};
