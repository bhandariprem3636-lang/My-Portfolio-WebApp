import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosMailUnread, IoIosSend } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";


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
        <div className="flex justify-between ">
          <div className="mt-8 h-110 w-120 rounded-xl shadow-2xl/50  hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]">
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

            {/* Contact form */}
        <div className='h-110 w-full m-8 rounded-2xl shadow-2xl/50  hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_10px_rgba(6,182,212,0.6)] transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-[1.03]'>
            <div className="flex gap-3 font-bold m-4">
              <div className="flex justify-center items-center p-2 bg-emerald-400 rounded-full"><MdOutlineMessage /></div>
              <p className="text-xl text-gray-300">Send me a Messeage</p>
            </div>


          <div>
            <form action="" className="flex flex-col m-4 gap-3">
              <input type="text" name="name" id="name" placeholder="Enter your name..." required className="border border-gray-600 outline-none rounded-xl p-2"/>
              <input type="email" name="email" id="email" placeholder="Enter your email.." required className="border border-gray-600 outline-none rounded-xl p-2"/>
              <input type="text" name="subject" id="subject" placeholder="Subject" required className="border border-gray-600 outline-none rounded-xl p-2"/>
              <textarea name="message" id="message" placeholder="Your Message" required className="border border-gray-600 outline-none rounded-xl h-35 p-2"></textarea>

              <div className="flex justify-center items-center w-37 gap-1 rounded-xl text-whitew-35 h-9 bg-blue-500 hover:bg-blue-700">
              <IoIosSend className="mt-1"/>
              <button type="submit">Send Message</button>
            </div>
            </form>
            
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};
export default ContactUs;
