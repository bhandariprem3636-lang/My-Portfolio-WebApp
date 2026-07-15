import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosMailUnread } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="bg-radial-[at_5%_6%] from-violet-800 to-orange-400 to-75%  p-0.5 min-h-screen"
    >
      {/* all content */}
      <div className="m-10">
        {/* heading title */}
        <div className="flex gap-4">
          <div className="h-20 border w-0"></div>
          <div classname="">
            <h1 className="font-bold text-4xl text-white">Contact Me</h1>
            <p className="mt-0.5 font-bold text-sky-500">Let's Work Together</p>
          </div>
        </div>

        {/* contact card */}
        <div className="flex">
          <div className="mt-8 h-110 w-120 rounded-xl shadow-2xl/50">
            <div className="flex gap-3 m-4">
              <div className="p-2 bg-cyan-200 text-green-600 rounded-full w-8">
                <IoIosMail />
              </div>
              <h1 className="text-xl mt-0.5 font-bold text-gray-300">
                Get in touch
              </h1>
            </div>

            <div className="m-4 w-110 font-bold">
              <p className="text-gray-200">
                I am always open to exciting new opportunities, freelance
                projects, or creative collaborations. <span className="text-purple-800">Feel free to reach
                out let’s build something great together!</span>
              </p>
            </div>

            <div>
                <div className="flex m-4 gap-2">
                    <IoIosMailUnread className="bg-green-300 mt-1.5 text-3xl text-gray-600 p-1 rounded-full"/>
                    <p className="mt-2 text-gray-300 font-bold">bhandariprem3636@gmail.com</p>
                </div>

                 <div className="flex m-4 gap-2">
                    <IoCallOutline className="bg-green-300 mt-1.5 text-3xl text-gray-600 p-1 rounded-full"/>
                    <p className="mt-2 text-gray-300 font-bold">+91 90237 80751</p>
                </div>

                 <div className="flex m-4 gap-2">
                    <IoLocationOutline className="bg-green-300 mt-1.5 text-3xl text-gray-600 p-1 rounded-full"/>
                    <p className="mt-2 text-gray-300 font-bold">Ahmedabad, Gujarat, India</p>
                </div>
                <div className="border-gray-400 border m-4"></div>
                
                {/* social media links */}
                <div className="m-4 w-110">
                    <div className="flex text-2xl text-white font-bold">
                        <p className="m-2">Follow Me</p>
                    </div>

                    <div className="flex justify-between m-2">
                        <div className="p-2 shadow-xl/20 text-black bg-gray-300 rounded-xl hover: transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.5]"><a href="https://github.com/bhandariprem3636-lang"><FaGithub /></a></div>
                        <div className="p-2 shadow-xl/20 text-blue-800 bg-sky-200 rounded-xl hover: transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.5]"><a href="https://www.linkedin.com/in/bhandari-premkumar-6b46a135a/"><FaLinkedin /></a></div>
                        <div className="p-2 shadow-xl/20 text-orange-700 bg-orange-300 rounded-xl hover: transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.5]"><a href="https://www.instagram.com/prem_official011/"><FaInstagram /></a></div>
                        <div className="p-2 shadow-xl/20 text-gray-800 bg-gray-300 rounded-xl hover: transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.5]"><a href="https://mail.google.com/"><IoIosMail /></a></div>
                        <div className="p-2 shadow-xl/20 text-blue-800 bg-sky-300 rounded-xl hover: transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.5]"><a href="https://www.facebook.com/prem.bhandari.131442"><FaFacebookF /></a></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
