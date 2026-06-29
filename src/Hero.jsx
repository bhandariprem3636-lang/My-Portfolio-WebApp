import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-sky-400 h-18 shadow-xl flex justify-between p-4 items-center">
        <h1 className="font-bold text-2xl text-pink-50">Developer Prem !</h1>
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
    </div>
  );
};
export default Hero;
