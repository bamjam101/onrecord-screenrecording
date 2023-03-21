import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActionVisible, setIsActionVisible] = useState(false);

  const checkVisibility = () => {
    const emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordFormat = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (email.match(emailFormat)) {
      if (password.match(passwordFormat)) {
        setIsActionVisible(true);
      } else {
        setIsActionVisible(false);
      }
    } else {
      setIsActionVisible(false);
    }
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <section className="px-10 grid place-items-center h-[88vh]">
      <form
        onSubmit={handleFormSubmission}
        className="relative rounded-xl w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] h-auto px-5 py-20 gap-5 drop-shadow-2xl bg-gradient-to-r from-cream/20 to-pink flex flex-col"
      >
        <div className="absolute top-0 left-0 w-full grid place-items-center h-10">
          <div className="w-24 h-24 grid place-items-center -translate-y-[50%] rounded-full">
            <AiOutlineLock className="text-cream rounded-full bg-blue h-full w-full p-2" />
          </div>
        </div>
        <div className="grid grid-cols-[10%_90%]">
          <div className="w-full grid place-items-center">
            <BsFillPersonFill className="p-2 text-cream bg-blue h-full w-full" />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email ID"
              className="w-full p-2 bg-indigo/70 h-full text-white font-bold outline-none border-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                checkVisibility();
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-[10%_90%]">
          <div className="w-full grid place-items-center">
            <GoKey className=" text-cream bg-blue h-full w-full p-2" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-indigo/70 h-full text-white font-bold outline-none border-none"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkVisibility();
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full grid place-items-center">
          <div
            className={`h-[50%] grid place-items-center hover:w-[70%] w-[50%] transition-all duration-500 ${
              isActionVisible
                ? "opacity-100 translate-y-[150%] z-50"
                : "-translate-y-[50%] opacity-0 -z-50"
            } rounded-full`}
          >
            <button
              type="submit"
              className="py-4 w-full h-full hover:bg-right rounded-b-lg bg-gradient-to-r from-cream/20 to-pink"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
