import { Button, Card, Typography, Input } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";


import { setUserDetails } from "../../../Redux/UserSlice/UserSlice";
import { userLogin } from "../../../Api/userApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin({ email, password });
      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        const { _id, name, email, mobile, image, is_admin } =
          response.data.userData;
        dispatch(
          setUserDetails({
            id: _id,
            name: name,
            mobile: mobile,
            email: email,
            image: image,
            is_admin: is_admin,
          })
        );
        navigate("/");
      } else {
        toast(response.data.alert);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-start">
          Sign in
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              type="email"
              label="Email"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="lg"
              label="Password"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already not have an account?{" "}
            <Link to={"/signup"} className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
          <ToastContainer />
        </form>
      </Card>
    </div>
  );
}

export default Login;
