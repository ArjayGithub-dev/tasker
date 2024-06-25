import React from 'react';
import styles from "../style";
import { illustration4 } from "../assets";

const Questions = () => {
  return (
    <section id="questions" className={`flex md:flex-row flex-col ${styles.paddingY} items-center justify-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10 text-center justify-center`}>
        <div className="w-full mb-10">
          <p className="font-poppins font-regular text-blue mb-4">FAQ's</p>
          <h1 className="font-poppins font-bold text-[36px] text-black mb-4">Commonly Asked Questions</h1>
        </div>
      </div>

      <div></div>



      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
        <img src={illustration4} alt="Illustration" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Questions;
