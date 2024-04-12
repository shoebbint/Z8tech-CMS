// Blog.js
import image from "../../assets/blog.jpg";
import Navbar from "../Shared/Header/Navbar/Navbar";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="first-sec ">
        <Navbar></Navbar>
        <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

          <div className="text-sm breadcrumbs text-center ">
            <h1 className="text-2xl  my-5">Blogs</h1>
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
      <div className="lg:w-4/6 mx-auto -mt-32">
        <div data-aos="fade-down" className="rounded-lg h-64 overflow-hidden shadow-lg">
          <img alt="content" className="object-cover object-center  h-80 w-full" src={image} />
        </div>
      </div>
      <div className="container mx-auto p-6 px-32 mt-20">
        <h1 className="text-5xl font-bold mb-8 px-10">Blog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First Column: Blog */}
          <div className="lg:col-span-2 lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)] custom-scrollbar px-10">
            {/* Blog 1 */}
            <div className="bg-blue-200 p-2 rounded-lg shadow-md mb-6">
              <img
                src="/src/assets/online-message-blog-chat-communication-envelop-graphic-icon-concept-min.jpg"
                alt="Blog 1"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Blog 1</h2>
              <p>This is the content of Blog 1.</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More &#8594;
              </a>
            </div>

            {/* Blog 2 */}
            <div className="bg-green-200 p-2 rounded-lg shadow-md mb-6">
              <img
                src="/src/assets/cheerful-grandmother-using-het-digital-tablet-min.jpg"
                alt="Blog 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Blog 2</h2>
              <p>This is the content of Blog 2.</p>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 font-semibold"
              >
                Read More &#8594;
              </a>
            </div>

            {/* Blog 3 */}
            <div className="bg-yellow-200 p-2 rounded-lg shadow-md mb-6">
              <img
                src="/src/assets/smiling-man-surfing-net-laptop-while-drinking-coffee-bar-min.jpg"
                alt="Blog 3"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold ">Blog 3</h2>
              <p>This is the content of Blog 3.</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More &#8594;
              </a>
            </div>

            {/* Add more cards here */}
          </div>

          {/* Second Column: Sidebar */}
          <div className="hidden lg:block col-span-1 sticky top-0">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              {/* Search Option */}
              <div className="mt-6 mb-6">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Recent Blogs */}
              <div className="mt-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">Recent Blogs</h2>
                {/* Recent Blog 1 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/online-message-blog-chat-communication-envelop-graphic-icon-concept-min.jpg"
                    alt="Recent Blog 1"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 1
                  </p>
                </div>
                {/* Recent Blog 2 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/cheerful-grandmother-using-het-digital-tablet-min.jpg"
                    alt="Recent Blog 2"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 2
                  </p>
                </div>
                {/* Recent Blog 3 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/smiling-man-surfing-net-laptop-while-drinking-coffee-bar-min.jpg"
                    alt="Recent Blog 3"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 3
                  </p>
                </div>
                {/* Add more recent Blogs here */}
              </div>

              {/* Categories */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Categories</h2>
                <ul className="list-disc pl-6 opacity-75">
                  <li>IT Department</li>
                  <li>Software Development</li>
                  <li>IT Department</li>
                  <li>Software Development</li>
                  {/* Add more categories here */}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    IT
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Math
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Digital Marketing
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Web Development
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    AI & ML
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Cybersecurity
                  </div>
                  {/* Add more tags here */}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="lg:col-span-2 flex justify-center mt-6">
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="text-primary px-3 py-2 rounded-lg hover:bg-blue-600 font-bold"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 font-bold"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-400 font-bold"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-400 font-bold"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary px-3 py-2 rounded-lg hover:bg-blue-600 font-bold"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>

          {/* Sidebar for Small Devices */}
          <div className="block lg:hidden mt-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              {/* Search Option */}
              <div className="mt-6 mb-6">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Recent Blogs */}
              <div className="mt-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">Recent Blogs</h2>
                {/* Recent Blog 1 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/online-message-blog-chat-communication-envelop-graphic-icon-concept-min.jpg"
                    alt="Recent Blog 1"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 1
                  </p>
                </div>
                {/* Recent Blog 2 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/cheerful-grandmother-using-het-digital-tablet-min.jpg"
                    alt="Recent Blog 2"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 2
                  </p>
                </div>
                {/* Recent Blog 3 */}
                <div className="flex items-center mb-2">
                  <img
                    src="/src/assets/smiling-man-surfing-net-laptop-while-drinking-coffee-bar-min.jpg"
                    alt="Recent Blog 3"
                    className="w-12 h-12 mr-2"
                  />
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    Recent Blog Title 3
                  </p>
                </div>
                {/* Add more recent Blogs here */}
              </div>

              {/* Categories */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Categories</h2>
                <ul className="list-disc pl-6 opacity-75">
                  <li>IT Department</li>
                  <li>Software Development</li>
                  <li>IT Department</li>
                  <li>Software Development</li>
                  {/* Add more categories here */}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    IT
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Math
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Digital Marketing
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Web Development
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    AI & ML
                  </div>
                  <div className="bg-gray-500 px-3 py-1 rounded-md text-white">
                    Cybersecurity
                  </div>
                  {/* Add more tags here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
