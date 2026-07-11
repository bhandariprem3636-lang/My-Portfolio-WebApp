import { FaRegStar, FaTv } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import vsCode from "/src/assets/visual-studio-code-logo-QsoXWVfe_brandlogos.net.svg";
import Git from "/src/assets/Git-OYS4j0t30_brandlogos.net.svg";
import GitHub from "/src/assets/github-mark-logo (1).png";
import canva from "/src/assets/Logo Canva.jpeg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-radial-[at_5%_6%] from-amber-400 to-gray-500 to-75% pt-10 min-h-screen"
    >
      {/* Title */}
      <div className="flex gap-6">
        <div className="flex h-20 w-0 ml-10 border"></div>
        <div>
          <p className="mt-2 font-bold text-white text-4xl">My Skills</p>
          <p className="font-bold text-blue-700">Technologies I work with</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex">
        <div className="shadow-2xl/50 rounded-xl w-100 m-10 h-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
          <div className="flex m-4 gap-2">
            <div className="p-2 border rounded-full">
              <FaTv className="" />
            </div>
            <p className="font-bold text-xl text-gray-200 mt-0.5">
              Skills I know!
            </p>
          </div>
          <div className="w-full border border-gray-400"></div>

          {/* Progress Bars */}
          <div>
            <div>
              <div className="flex justify-between m-4 font-bold text-gray-300">
                <p>HTML</p>
                <p>95%</p>
              </div>
              <div className="h-2 rounded-full m-4 bg-gray-200">
                <div className="h-2 w-[95%] rounded-full bg-linear-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between m-4 font-bold text-gray-300">
                <p>CSS</p>
                <p>90%</p>
              </div>
              <div className="h-2 rounded-full m-4 bg-gray-200">
                <div className="h-2 w-[90%] rounded-full bg-linear-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between m-4 font-bold text-gray-300">
                <p>JavaScript</p>
                <p>85%</p>
              </div>
              <div className="h-2 rounded-full m-4 bg-gray-200">
                <div className="h-2 w-[85%] rounded-full bg-linear-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between m-4 font-bold text-gray-300">
                <p>React</p>
                <p>80%</p>
              </div>
              <div className="h-2 rounded-full m-4 bg-gray-200">
                <div className="h-2 w-[80%] rounded-full bg-linear-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between m-4 font-bold text-gray-300">
                <p>Tailwind CSS</p>
                <p>85%</p>
              </div>
              <div className="h-2 rounded-full m-4 bg-gray-200">
                <div className="h-2 w-[85%] rounded-full bg-linear-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Tools and Other Technologies */}
        <div className="flex m-10 ">
          <div className="h-50 w-170 rounded-xl shadow-2xl/50">
            <div className="flex m-4 gap-2 ">
              <div className="p-2 rounded-full bg-linear-to-r from-emerald-300 via-green-400 to-lime-300">
                <IoSettingsOutline className="text-green-700" />
              </div>
              <p className="font-bold text-xl text-gray-200 mt-0.5">
                Tools & Technologies !
              </p>
            </div>
            <div className="w-full border border-gray-400"></div>

            <div className="flex ">
              <div className="flex flex-col justify-center items-center m-4 h-25 w-25 shadow-2xl/40 rounded-xl">
                <img src={vsCode} alt="vsCode-Logo" className="h-15 w-20" />
                <p className="text-center mt-1 font-bold text-white">VS CODE</p>
              </div>

              <div className="flex flex-col justify-center items-center m-4 h-25 w-40 shadow-2xl/40 rounded-xl">
                <img src={Git} alt=" git-logo" className="ml-5 mr-5 mt-0" />
                <p className="text-center mt-3 font-bold text-white">GIT</p>
              </div>

              <div className="flex flex-col justify-center items-center m-4 h-25 w-40 shadow-2xl/40 rounded-xl">
                <img
                  src={GitHub}
                  alt=" github-logo"
                  className="ml-5 mr-5 mt-0 h-17 w-21"
                />
                <p className="text-center mt-1 font-bold text-white">GITHUB</p>
              </div>

              <div className="flex flex-col justify-center items-center m-4 h-25 w-40 shadow-2xl/40 rounded-xl">
                <img
                  src={canva}
                  alt=" canva-logo"
                  className="ml-5 mr-5 mt-0 h-17 w-21"
                />
                <p className="text-center mt-1 font-bold text-white">CANAVA</p>
              </div>
            </div>

            <div className="mt-6 h-54.5 rounded-xl shadow-2xl/50">
              <div className="flex p-4 gap-2 font-bold">
                <div className="bg-amber-300 p-2 rounded-full text-green-700">
                  <FaRegStar />
                </div>
                <h1 className="text-white">Others Skills !</h1>
              </div>

             <div className="flex justify-between">
              {/* extra skills */}
              <div className="">
                <div>
                   <div className="flex justify-between m-4 font-bold text-gray-300">
                  <p>Problem Solving</p>
                  <p>75%</p>
                </div>
                <div className="h-2 w-[90%] rounded-full m-4 bg-gray-200">
                  <div className="h-2 w-[75%] rounded-full bg-[linear-gradient(to_right,#00F5FF,#3B82F6,#8B5CF6,#EC4899,#FF007F)]"></div>
                </div>
                </div>

                <div>
                   <div className="flex gap-28 m-4 font-bold text-gray-300">
                  <p>Communication</p>
                  <p>85%</p>
                </div>
                <div className="h-2 w-[90%] rounded-full m-4 bg-gray-200">
                  <div className="h-2 w-[85%] rounded-full bg-[linear-gradient(to_right,#FF512F,#F09819,#FFCD3C,#10B981,#059669)]"></div>
                </div>
                </div>
              </div>

              <div className="">
                <div>
                   <div className="flex justify-between m-4 font-bold text-gray-300">
                  <p>Teamwork</p>
                  <p>80%</p>
                </div>
                <div className="h-2 w-[90%] rounded-full m-4 bg-gray-200">
                  <div className="h-2 w-[80%] rounded-full bg-[linear-gradient(to_right,#4F46E5,#7C3AED,#C084FC,#F43F5E,#FB7185)]"></div>
                </div>
                </div>

                <div>
                   <div className="flex gap-28 m-4 font-bold text-gray-300">
                  <p>Adaptibility</p>
                  <p>88%</p>
                </div>
                <div className="h-2 w-[90%] rounded-full m-4 bg-gray-200">
                  <div className="h-2 w-[88%] rounded-full  bg-[linear-gradient(to_right,#06B6D4,#10B981,#A3E635,#FACC15,#F97316)]"></div>
                </div>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
