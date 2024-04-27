import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { PiPasswordLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { basepath } from "../../utility/config/basepath";
function SignIn() {
  const [form, setForm] = useState({
    pass: "",
    email: "",
  });

  const handleChange = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    const fetching = async () => {
      try {
        const { data } = await axios(basepath + `/signin`, form);
        toast.success(data.message);
        setForm({
          name: "",
          pass: "",
          email: "",
        });
        window.location.replace("/");
      } catch (error) {
        toast.error("Check your all infomation");
        console.log(error);
      }
    };
    fetching();
  };

  return (
    <div>
      <div className="min-h-screen    flex flex-col items-center justify-center ">
        <div
          className="
  flex flex-col
  bg-white
  shadow-xl
  px-4
  sm:px-6
  md:px-8
  lg:px-10
  py-8
  rounded-3xl
  w-50
  max-w-md
"
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>
          <div className="mt-10">
            <form onSubmit={handleForm} action="#">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
            inline-flex
            items-center
            justify-center
            absolute
            left-0
            top-0
            h-full
            w-10
            text-gray-400
          "
                  >
                    <MdEmail />
                  </div>
                  <input
                    id="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    type="email"
                    name="email"
                    className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
            focus:outline-none focus:border-blue-400
          "
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
            inline-flex
            items-center
            justify-center
            absolute
            left-0
            top-0
            h-full
            w-10
            text-gray-400
          "
                  >
                    <span>
                      <PiPasswordLight />
                    </span>
                  </div>
                  <input
                    value={form.pass}
                    onChange={(e) => handleChange("pass", e.target.value)}
                    id="password"
                    type="password"
                    name="password"
                    className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
            focus:outline-none focus:border-blue-400
          "
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="
          flex
          mt-2
          items-center
          justify-center
          focus:outline-none
          text-white text-sm
          sm:text-base
          bg-blue-500
          hover:bg-blue-600
          rounded-2xl
          py-2
          w-full
          transition
          duration-150
          ease-in
        "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            className="
    inline-flex
    items-center
    text-gray-700
    font-medium
    text-xs text-center
  "
          >
            <span className="ml-2">You have an account?</span>
          </a>
          <Link
            to={"/signup"}
            className="text-xs ml-2 text-blue-500 font-semibold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
