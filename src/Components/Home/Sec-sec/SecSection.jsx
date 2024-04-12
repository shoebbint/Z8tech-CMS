import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SecSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font px-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900">Why Choose Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              we offer a diverse and extensive range of courses and learning materials that cater to various interests and skill levels. Whether youre a student looking to enhance your academic performance, a professional seeking to upskill, or simply someone eager to pursue a new hobby, we have something for everyone.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-violet-200 ">
     <img src="https://cdn-icons-png.flaticon.com/512/3410/3410142.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">Exclusive Coach</h2>
                <p className="leading-relaxed">We understand the importance of approaching each work.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=" border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-violet-200">
       <img src="https://cdn-icons-png.flaticon.com/512/4385/4385926.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">Creative Minds</h2>
                <p className="leading-relaxed">We have a flexible, high trust environment that is focused.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-violet-200">
          <img src="https://cdn-icons-png.flaticon.com/512/2083/2083308.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">Video Tutorials  </h2>
                <p className="leading-relaxed">You not only develop your craft but your ability to partner.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-violet-200">
               <img src="https://cdn-icons-png.flaticon.com/512/1027/1027607.png" alt="" />
                <h2 className="title-font font-medium text-3xl text-gray-900">Worlds Record</h2>
                <p className="leading-relaxed">What separates theme from all other web design agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecSection;