import Navbar from "../Shared/Header/Navbar/Navbar";
import image from "../../assets/faq.jpg";


const Faqs = () => {
  return (
    <div>
      <div className="first-sec ">
        <Navbar></Navbar>
        <div className="  h-96 py-20 pb-36 flex justify-center items-center ">

          <div className="text-sm breadcrumbs text-center ">
            <h1 className="text-2xl my-5">Faq</h1>
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
          <img alt="content" className="object-fill object-center  h-80 w-full" src={image} />
        </div>
      </div>
      <div className="p-40">





        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-200 mb-4">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content">
            <p>content</p>
          </div>
        </details>
        <div className="mt-8">
          <h1 className="text-3xl">Is that Helpful?<span className="text-gray-400"> &nbsp;or</span></h1>
          <div className="flex gap-2 mt-6">
            <button type="btn-1" className="p-4 bg-green-900 text-white border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-green-500 rounded text-lg">Create Ticket</button>
            <button type="btn-2" className="p-4 bg-yellow-900 text-white border-0 py-2 px-8 mb-2 focus:outline-none hover:bg-yellow-500 rounded hover:text-black text-lg">View Ticket</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;