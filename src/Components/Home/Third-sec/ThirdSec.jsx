import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const ThirdSec = () => {
    return (
        <div className="first-sec">
            <section className="text-gray-600 body-font">
  <div className="container px-32 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">

      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">COURSE CATEGORIES</h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
    <div data-aos="zoom-in-up"  className="xl:w-1/3 md:w-1/2 p-4  ">
        <div  className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
<img src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Html</h2>
            <p className="leading-relaxed text-base">3 Courses</p>

          </div>
        </div>
      </div>
    <div data-aos="zoom-in-up" className="xl:w-1/3 md:w-1/2 p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
<img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Javascript</h2>
            <p className="leading-relaxed text-base">3 Courses</p>

          </div>
        </div>
      </div>
    <div data-aos="zoom-in-up" className="xl:w-1/3 md:w-1/2 p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
         <img src="https://cdn-icons-png.flaticon.com/512/3426/3426679.png" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Math</h2>
            <p className="leading-relaxed text-base">3 Courses</p>

          </div>
        </div>
      </div>
    <div data-aos="zoom-in-up" className="xl:w-1/3 md:w-1/2 p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
 <img src="https://cdn-icons-png.flaticon.com/512/5190/5190400.png" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Physics</h2>
            <p className="leading-relaxed text-base">20 Courses</p>

          </div>
        </div>
      </div>
    <div data-aos="zoom-in-up" className="xl:w-1/3 md:w-1/2 p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">React</h2>
            <p className="leading-relaxed text-base">32 Courses</p>

          </div>
        </div>
      </div>
    <div data-aos="zoom-in-up" className="xl:w-1/3 md:w-1/2 p-4">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-5 sm:flex-row flex-col hover:bg-rose-200">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
     <img src="https://cdn-icons-png.flaticon.com/512/2802/2802825.png" alt="" />
          </div>
          <div className="flex-grow">
          

            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Chemistry</h2>
            <p className="leading-relaxed text-base">13 Courses</p>

          </div>
        </div>
      </div>

</div>


  <Link to="allcourses" >  <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-3 px-10 focus:outline-none hover:bg-red-400 rounded-lg text-lg">View more</button></Link>
  </div>
</section>
        </div>
    );
};

export default ThirdSec;