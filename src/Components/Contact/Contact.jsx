import Navbar from "../Shared/Header/Navbar/Navbar";
import image from "../../assets/contact.jpg";
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div className="first-sec ">
        <Navbar></Navbar>
        <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

          <div className="text-sm breadcrumbs text-center ">
            <h1 className="text-2xl my-5">Contact Us</h1>
            <ul>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  Home
                </a>
              </li>
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  Documents
                </a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Add Document
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-4/6 mx-auto -mt-32 ">
        <div data-aos="fade-down" className="rounded-lg h-64 overflow-hidden shadow-lg">
          <img alt="content" className="object-cover object-center h-full w-full" src={image} />
        </div>
      </div>
      {/* contact us form section starts here */}

      <section className="text-gray-600 body-font relative px-20">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Get in touch section starts here  */}
          <div className="lg:w-1/2 md:w-1/2   rounded-lg overflow-hidden sm:mr-5 p-1 flex items-end justify-start shadow-lg">
            <div className="contact-bg relative  flex flex-col  w-full h-full px-5 py-4 rounded ">
              <h2 className="text-gray-900 text-lg  mt-5 mb-5 font-medium title-font text-4xl font-bold">
                Get in Touch
              </h2>
              <div className="lg:w-1/2 p-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs  mt-10 mb-1">
                  ADDRESS
                </h2>
                <a
                  href="https://goo.gl/maps/UBqDfXebvmXXvNx28"
                  target="_ blank"
                  rel="noopenner"
                  className="text-indigo-500"
                >
                  Bahaddar-hat, Beside jame mosque, Orbit school 2nd floor, Z8
                  Tech
                </a>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mb-1">
                  EMAIL
                </h2>
                <a
                  href="mailto:example@email.com"
                  target="_ blank"
                  rel="noopenner"
                  className="text-indigo-500 leading-relaxed"
                >
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 mb-1">
                  PHONE
                </h2>
                <a
                  href="tel:01811111111"
                  target="_ blank"
                  rel="noopenner"
                  className="leading-relaxed text-indigo-500"
                >
                  01811111111
                </a>
              </div>
            </div>
          </div>
          {/* Get in touch section ends here  */}

          {/* Send us a message form starts*/}
          <form className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5">
            <h2 className="text-gray-900 text-lg mb-10 font-medium title-font text-4xl font-bold">
              Send Us Message
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="issue" className="leading-7 text-sm text-gray-600">
                Issues
              </label>
              <div className="mt-2">
                <select
                  id="issue"
                  name="issue"
                  autoComplete="issue-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option>Select an issue</option>
                  <option>Node.js</option>
                  <option>Frontend</option>
                  <option>backend</option>
                </select>
              </div>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-6"
            >
              Submit
            </button>
          </form>
          {/* Send us a message form  ends*/}
        </div>
      </section>
      {/* contact us form section ends here */}
    </div>
  );
};

export default Contact;