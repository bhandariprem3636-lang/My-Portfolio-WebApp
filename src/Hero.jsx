import { Link } from "react-router-dom";
import { ReactTyped } from 'react-typed';
import developerPic from './assets/bg.png.png';

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-sky-400 h-18 shadow-xl flex justify-between p-4 items-center">
        <h1 className="font-bold text-2xl ml-6 text-pink-50">Developer Prem !</h1>
        <nav>
          <ul className="flex cursor-pointer font-bold">
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
       <div className=" m-30 text-2xl h-70 w-110">
        <h1 className="text-6xl font-bold text-white mb-4">Prem Bhandari</h1>
        <p className="text-amber-100">
          Hi, My Name is <span className="text-violet-800 font-bold">Prem Bhandari</span> and I'm a
          <span className=""> MERN-STACK-DEVELOPER</span>. <br />I am very passioneted in Web
          Development.
        </p>
        <div>
          {/* Sirf ek line ka component */}
          <ReactTyped className="text-orange-500"
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
      <div className="h-70 w-100 pt-9 mr-20">
        <img src={developerPic} alt="Developer Png image" />
      </div>
     </div>
    </div>
  );
};
export default Hero;
