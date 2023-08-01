import firstsec from "../../../assets/sec-img.png";
import Navbar from "../../Shared/Header/Navbar/Navbar";
import"./FirstSec.css";
const FirstSec = () => {
    return (
        <div className="first-sec">
              <Navbar></Navbar>
              <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={firstsec} className="w-10/12 rounded-lg " />
    <div>
    <h1 className="text-5xl font-bold">Start Better Learning Future From Here</h1>
      <p className="py-6"> This comprehensive platform enables coaches to efficiently manage their clients, schedules, and resources, all in one place. </p>
      <button className="btn btn-primary">Start today</button>
        </div>
    </div>
  </div>
</div>

    );
};

export default FirstSec;