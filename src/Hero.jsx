import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import developerPic from "./assets/bg.png.png";

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-sky-400 h-22 shadow-xl flex justify-between p-4 items-center">
        <h1 className="font-bold font-sans text-4xl ml-6 text-pink-50">
          Developer Prem !
        </h1>
        <nav className="text-white text-xl">
          <ul className="flex cursor-pointer font-sarif font-bold">
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">About Me</Link>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">Skills</Link>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">Projects</Link>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">Experience</Link>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Landing Page */}
      {/* Main Div */}
      <div className="flex justify-between">
        <div className=" mt-40 ml-40 mb-0 text-2xl h-80 text-4xl w-160">
          <h1 className="text-6xl font-bold text-yellow-300 mb-4">
            PREM BHANDARI
          </h1>
          <p className="text-amber-100">
            Hi, My Name is{" "}
            <span className="text-lime-400 font-bold">Prem Bhandari</span> and
            I'm a<span className="text-pink-500"> MERN-STACK-DEVELOPER</span>.{" "}
            <br />I am very passioneted in Web Development.
          </p>
          <div>
            {/* Sirf ek line ka component */}
            <ReactTyped
              className="text-orange-500"
              strings={[
                "Build's Responsive Web Applications!",
                "Let's Make It Your Crazy Ideas and Innovation.",
              ]}
              typeSpeed={50}
              loop
            />
          </div>
        </div>
        {/* Profile Picture */}
        <div className="h-90 w-130 pt-18 mr-40">
          <img src={developerPic} alt="Developer Png image" />
        </div>
      </div>
      {/* buttons */}
      <div className="ml-33 mt-0">
        <a href="/public/Prem_Bhandari_Resume.pdf" download="Prem_Bhandari_Resume" className="p-4 w-35 m-6 font-bold bg-orange-500 text-amber-100 rounded-xl cursor-pointer hover:bg-orange-600">
          Download CV
        </a>
        <button className="p-4 w-35 m-6 font-bold bg-blue-800 text-amber-100 rounded-xl cursor-pointer hover:bg-blue-900">
          Contact
        </button>
      </div>
    </div>
  );
};
export default Hero;
