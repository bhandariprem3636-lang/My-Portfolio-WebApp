import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import developerPic from "./assets/bg.png.png";

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="h-22 shadow-lg flex justify-between p-4 items-center">
        <h1 className="font-bold font-sans text-4xl ml-6 text-pink-50">
          Developer Prem !
        </h1>
        <nav className="text-white">
          <ul className="flex cursor-pointer font-sarif font-bold">
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#home">Home</a>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#about">About Me</a>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#skills">Skills</a>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#projects">Projects</a>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#experience">Experience</a>
            </li>
            <li className="m-4 p-2 hover:bg-green-400 duration-300 ease-in rounded-xl">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Landing Page */}
      {/* Main Div */}
      <div className="flex justify-between">
        <div className=" mt-30 ml-30 h-80 text-4xl max-w-140">
          <h1 className="text-5xl font-bold text-yellow-300 mb-4">
            PREM BHANDARI
          </h1>
         <div className="text-3xl">
           <p className="text-amber-100">
            Hi, My Name is
            <span className="text-lime-400 font-bold"> Prem Bhandari</span> and
            I'm a<span className="text-pink-500"> MERN-STACK-DEVELOPER</span>.
            <br />I am very passioneted in Web Development.
          </p>
         </div>
          <div>
            {/* Sirf ek line ka component */}
            <ReactTyped
              className="text-orange-500 text-3xl"
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
        <div className="h-80 w-130 mt-8 pl-20 mr-30">
          <img src={developerPic} alt="Developer Png image" />
        </div>
      </div>
      {/* buttons */}
      <div className="flex ml-23.5">
          <a href="/public/Prem_Bhandari_Resume.pdf" download="Prem_Bhandari_Resume" 
          className="flex justify-center p-4 w-95 m-6 shadow-xl/30 shadow-amber-500 font-bold bg-radial from-orange-400 from-40% to-orange-700 text-amber-100 rounded-xl cursor-pointer hover:bg-orange-600">
          Download CV
        </a>
      </div>
    </div>
  );
};
export default Hero;
