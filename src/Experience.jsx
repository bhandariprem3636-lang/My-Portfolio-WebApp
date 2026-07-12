import { PiCertificateDuotone, PiSuitcaseSimpleDuotone } from "react-icons/pi";
import Disha from "/src/assets/dishaLogo.png";
import infoLabz from "/src/assets/infolabz.png";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen p-0.5 bg-radial-[at_5%_6%] from-sky-600 to-zinc-900 to-75%"
    >
      {/* Title  */}
      <div className="flex m-10 gap-6">
        <div className="flex h-20 w-0 border"></div>
        <div>
          <p className="mt-2 font-bold text-white text-4xl">My Experience</p>
          <p className="font-bold text-blue-200">My Journey is so far</p>
        </div>
      </div>

      {/* experience section */}
      <div className="flex">
        <div
          className="h-150 w-170 shadow-2xl/50 rounded-2xl ml-10 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
         hover:scale-[1.03]"
        >
          <div className="flex m-4 gap-2">
            <div className="p-2 bg-amber-300 rounded-full ">
              <PiSuitcaseSimpleDuotone />
            </div>

            <p className="font-bold text-white m-0.5">Internships !</p>
          </div>
          <div className="w-full border border-gray-400"></div>

          <div className="flex m-4 gap-3">
            <div className="mt-1">
              <img src={Disha} alt="" className="h-8 rounded-full" />
            </div>

            <div>
              <p className="font-bold  text-green-500 text-2xl">
                Feb - 2026 Present - Ahmedabad
              </p>
              <p className="font-bold text-red-600 mt-1">
                Disha Computer Institute
              </p>
              <p className="text-white text-xs font-bold mt-1">
                Full-Stack Developer Intern
              </p>
              <p className="font-sans mt-2 text-gray-300 w-140">
                I am currently working as a Full-Stack Development Intern. In
                this role, I am deeply involved in both frontend and backend
                engineering. Every day, I am learning, practicing, and building
                applications using HTML, CSS, JavaScript, React, Express.js,
                Node.js, and MongoDB. This ongoing internship is giving me
                hands-on industry experience, helping me solve real-world
                problems, and continuously upgrading my coding skills.
              </p>
            </div>
          </div>

          <div className="flex m-4 gap-3">
            <div className="mt-1">
              <img
                src={infoLabz}
                alt="infolabz-pic"
                className="h-8 rounded-full"
              />
            </div>

            <div>
              <p className="font-bold  text-cyan-300 text-2xl">
                Dec 2025 - Jan 2026 - Ahmedabad
              </p>
              <p className="font-bold text-cyan-500 mt-1">Infolabz Pvt. Ltd.</p>
              <p className="text-white text-xs font-bold mt-1">
                Jr. Data Analyst
              </p>
              <p className="font-sans mt-2 text-gray-300 w-140">
                As a Junior Data Analyst, I was primarily responsible for data
                visualization and analysis. I extensively used Power BI to build
                interactive dashboards and track key metrics. Additionally, I
                worked with Python, leveraging the Matplotlib library to create
                detailed visual plots and analyze data trends. This role allowed
                me to work closely with data and turn complex numbers into
                easy-to-understand visuals
              </p>
            </div>
          </div>
        </div>

        <div className="ml-10 mb-8 h-150 w-120 shadow-2xl/60 shadow-amber-200 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
         hover:scale-[1.03] rounded-2xl">
            
             <div className="flex m-4 gap-2">
            <div className="p-2 bg-cyan-300 rounded-full ">
              <PiCertificateDuotone />
            </div>

            <p className="font-bold text-white m-0.5">Training & Certification !</p>
          </div>
          <div className="w-full border border-gray-400"></div>

        </div>
      </div>
    </div>
  );
};
export default Experience;
