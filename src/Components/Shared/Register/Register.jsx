import { FaFacebook,FaGoogle,FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Register = () => {
    return (
       
              <section className="text-gray-600 body-font px-32">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img
            className="leading-relaxed mt-4 "
            src="/src/assets/5437683-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
            Create an Acccount
          </h2>
<div className="flex  relative gap-3 mb-4">
          <div className="lg:w-1/2 md:w-1/2 ">
            <label htmlFor="firstName" className="leading-7 text-sm text-gray-600" >
              First Name
            </label>
            <input
              type="text"
              id="Fname"
              name="Fname"

              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            />
            </div>
            <div className="lg:w-1/2 md:w-1/2 ">
             <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
           />
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="Phone Number" className="leading-7 text-sm text-gray-600">
            Phone Number
            </label>
            <input
              type="tel"
              id="num"
              name="enum"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
           />
          </div>
          <div className="relative mt-2 mb-8 text-primary flex">
            <h1 className="text-gray-400 mx-2">Already have an account?</h1>
     <Link to="/login">       <a href="#">Log in</a></Link>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-indigo-800 rounded text-lg"
          >
            Sign Up
          </button>
          <a
            href="#"
            target="_ blank"
            className="flex justify-center items-center text-white text-center bg-tw border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-sky-500 rounded text-lg"
          >
            <FaSquareTwitter className="mx-2"/>
            Sign Up with twitter
          </a>
          <a
            href="#"
            target="_ blank"
            className="flex justify-center items-center text-white text-center bg-gg border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            <FaGoogle className="mx-2"/>
            Sign Up with Google
          </a>

          <a
            href="#"
            target="_blank"
            className="flex justify-center items-center text-white text-center bg-fb border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-blue-700 rounded text-lg "
          >
            <FaFacebook className="mx-2" />
            Sign Up with Facebook
          </a>

        </div>
      </div>
    </section>
        
    );
};

export default Register;