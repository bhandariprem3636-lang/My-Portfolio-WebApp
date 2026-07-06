import { FaRegUserCircle } from "react-icons/fa";
import developerPic from "./assets/bg.png.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-radial-[at_5%_6%] from-green-400 to-sky-700 to-75% pt-10 min-h-screen"
    >
      <div className="flex gap-6">
        <div className="flex h-20 w-0 ml-10 border-2"></div>
        <div>
          <p className="mt-2 font-bold text-white text-4xl">About Me</p>
          <p className="font-bold text-blue-700">Get to know me better</p>
        </div>
      </div>
      {/* Profile Card */}
    <div className='flex'>
          <div className="h-110 w-75 ml-10 pt-6 mt-6 rounded-xl shadow-2xl/50 border-gray-500">
        <div className="mx-auto rounded-full w-50 h-50 border-2 border-amber-500  bg-amber-400">
          <img
            src={developerPic}
            alt="Mypic"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center items-center mt-2">
            <h1 className="text-2xl text-white font-bold">Prem Bhandari</h1>
            <p className="font-bold text-purple-900">Full-Stack Developer</p>
            <p className="text-center mt-2 text-amber-200">
              Passionate about building beautiful user friendly web expriences and learning with new technologies .
            </p>
          </div>
        </div>
      </div>
      {/* Side Section */}
      <div>
        <div className="">
        <div>
            <FaRegUserCircle />
            <div className="h-20 w-0 ml-2 mt-2 border border-gray-300"></div>
            <div className="h-3 w-3 ml-0.5 bg-green-700 rounded-full"></div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
