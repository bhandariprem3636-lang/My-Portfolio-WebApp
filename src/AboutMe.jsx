import {
  FaGraduationCap,
  FaMusic,
  FaRegCalendarAlt,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import developerPic from "./assets/bg.png.png";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdMovieEdit, MdVideoCameraBack } from "react-icons/md";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-radial-[at_5%_6%] from-green-400 to-sky-700 to-75% pt-10 min-h-screen"
    >
      <div className="flex gap-6">
        <div className="flex h-20 w-0 ml-10 border"></div>
        <div>
          <p className="mt-2 font-bold text-white text-4xl">About Me</p>
          <p className="font-bold text-blue-700">Get to know me better</p>
        </div>
      </div>
      {/* Profile Card */}
      <div className="flex">
        <div className="h-115 w-75 ml-10 pt-6 mt-6 rounded-xl shadow-2xl/50 border-gray-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
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
                Passionate about building beautiful user friendly web expriences
                and learning with new technologies .
              </p>
              <a
                href="/public/Prem_Bhandari_Resume.pdf"
                download="Prem_Bhandari_Resume"
                className=" rounded-xl w-40 text-center border-2 p-1.5 mt-2 border-gray-400 cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        {/* Side Section */}
        <div>
          <div className="rounded-xl shadow-2xl/50 p-3 m-6 w-215 h-40 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
            <div className="flex">
              <div>
                <FaRegUserCircle className="text-2xl mt-0.5" />
                <div className="h-20 w-0 ml-3 mt-2 border border-gray-300"></div>
                <div className="h-2 w-2 ml-2 mt-0.5 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="font-bold ml-2 text-white">About Me</p>
                <p className="ml-2 text-gray-800">
                  Hi, I'm Prem. I enjoy creating modern, responsive, and
                  user-friendly web applications that solve real-world problems.
                  I believe in continuous learning and improving my skills
                  through hands-on projects and practical experience. My focus
                  is on writing clean, efficient code and building intuitive
                  digital experiences. I am always eager to explore new
                  technologies, take on challenges, and grow as a developer.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="p-4 m-6 shadow-2xl/50 rounded-xl w-130 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
              <div className="flex ">
                <div className="flex items-center justify-center p-1.5 bg-cyan-400 rounded-full">
                  <FaGraduationCap className="" />
                </div>
                <p className="font-bold text-xl text-white ml-2">Education</p>
              </div>
              <div className="mt-2">
                <p className="font-bold text-shadow-amber-300 text-yellow-600">
                  BCA
                  <span className="text-orange-300 font-normal">
                    (Bachelor of Computer Application)
                  </span>
                </p>
                <p className="font-bold text-gray-800">Monark University</p>
                <p className="flex mt-1 text-gray-800">
                  <FaRegCalendarAlt className="mt-1 mr-1" />
                  2023 - 2026 Ahmedabad
                </p>
              </div>

              <div className="mt-2 ">
                <p className="font-bold text-shadow-amber-300 text-yellow-600">
                  Higher Schooling
                  <span className="text-orange-300 font-normal">
                    (Higher Secondary School)
                  </span>
                </p>
                <p className="font-bold text-gray-800">SM HINDI VIDHAYALAYA</p>
                <p className="flex mt-1 text-gray-800">
                  <FaRegCalendarAlt className="mt-1 mr-1" />
                  2020 - 2023 Ahmedabad
                </p>
              </div>
            </div>

            <div className="p-4 m-6 shadow-2xl/50 rounded-xl w-70 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
              <div className="flex">
                <div className="flex items-center justify-center p-1.5 bg-red-400 rounded-full">
                  <FaRegHeart className="text-red-600" />
                </div>
                <p className="font-bold text-xl text-white ml-2">Hobbies</p>
              </div>

              <div className="flex gap-3 mt-5 font-bold text-amber-500 text-lg">
                <GiCommercialAirplane className="mt-1" />
                <p> Traveling</p>
              </div>
              <div className="flex gap-3 mt-5 text-lg text-pink-500 font-bold">
                <MdVideoCameraBack className="mt-1" />
                <p> Vloging</p>
              </div>
              <div className="flex gap-3 mt-5 font-bold text-lg text-cyan-400">
                <MdMovieEdit className="mt-1" />
                <p> Video Editing</p>
              </div>
              <div className="flex gap-3 mt-5 font-bold text-lg text-green-400">
                <FaMusic className="mt-1" />
                <p> Listening Music</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
