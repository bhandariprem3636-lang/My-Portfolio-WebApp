import { FaGithub } from 'react-icons/fa';
import portfolioPic from '/src/assets/portfolio.png';

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen pt-10 bg-linear-[135deg] from-pink-700 to-green-500 to-65%"
    >
      {/* Title */}
      <div className="flex gap-6">
        <div className="flex h-20 w-0 ml-10 border"></div>
        <div>
          <p className="mt-2 font-bold text-white text-4xl">My Projects</p>
          <p className="font-bold mt-1.5 text-blue-800">Some of my recent work</p>
        </div>
      </div>

      {/* projects sections */}
      <div className="m-10">
        {/* first project */}
        <div className="h-75 w-85 rounded-xl shadow-2xl/50">
        {/* image */}
            <div className='p-4'>
                <img src={portfolioPic} alt="porfolio-img" className='rounded-xl'/>
            </div>
            {/* name and technologies */}
            <div className='flex justify-between mr-4'>
                <h1 className='ml-4 font-bold text-white'>Prtfolio Website</h1>
           <div className='flex justify-between gap-4 '>
             <p className='text-red-800 hover:text-red-500'>React</p>
            <p className='text-green-800'>Tailwind</p>
           </div>
            </div>
            {/* project descreption */}
            <div className='w-70 mt-2 ml-4'>
                <p>Personal portfolio website build with React and Tailwind CSS.</p>
            </div>

            {/* project link */}
            <div className='ml-4 mt-2'>
                <a href="https://github.com/bhandariprem3636-lang/My-Portfolio-WebApp" target='_blank' className='flex  gap-1 hover:text-blue-600 underline decoration-1'>
                    <FaGithub className='mt-1.5'/>
                <p>Check in GitHub</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
