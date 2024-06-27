import React from 'react';
import styles from "../style";
import { illustration4 } from "../assets";
import { mail_icon, line, airplane_paper  } from "../assets";

const Subscribe = () => {
  return (
    <section id="subscribe" className={`flex md:flex-row flex-col ${styles.paddingY} items-center justify-center`}>
      <div className={`flex-1 flex flex-col xl:px-0 sm:px-16 px-6 mb-10 justify-start`}>
        <div className="bg-blue p-20 rounded-[45px] text-center">
          <p className="font-poppins font-regular text-white mb-4">Get Latest Updates</p>
          <h1 className="font-poppins font-bold text-3xl text-white mb-4">Subscribe To Our Newsletter</h1>
          <p className="font-poppins font-regular text-white mb-4">
            Subscribe to our newsletter and stay informed with exclusive insights and <br />
            tips delivered straight to your inbox.
          </p>
          {/* Input box and button */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-10 items-center justify-center">
            <div className="relative flex items-center w-full sm:w-auto">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"><img src={mail_icon} alt="Mail" /></span>
              <input
                type="text"
                placeholder="Email"
                className="w-full sm:w-auto px-10 py-3 border border-gray-300 rounded placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent text-white"
              />
            </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                 Subscribe Now
              </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Subscribe;
