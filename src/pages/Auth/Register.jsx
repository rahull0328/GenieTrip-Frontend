import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import ProfilePhotoSelector from "../../components/Input/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

const Register = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //handling register event
  const handleRegister = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter full name...");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address...");
      return;
    }

    if (!password) {
      setError("Please enter password...");
      return;
    }

    setError("");

    //register api call
    try {
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">Create Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today!</p>

      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John Doe"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john.doe@example.com"
            type="email"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            Register
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an Account?{" "}
            <button
              className="font-medium text-primary underline cursor-pointer"
              onClick={() => {
                setCurrentPage("login");
              }}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
