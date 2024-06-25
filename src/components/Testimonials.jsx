import React from 'react';
import styles from "../style";
import { profile1, profile2 } from "../assets";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className={`flex md:flex-row flex-col ${styles.paddingY} items-center justify-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10 text-center justify-center`}>
        <div className="w-full mb-10">
          <p className="font-poppins font-regular text-blue mb-4">Testimonials</p>
          <h1 className="font-poppins font-bold text-[36px] text-black mb-4">Check What Our <br /> Clients Think About Us</h1>
        </div>
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative border border-gray p-6 rounded-lg text-center">
              <div className="flex justify-center">
                <img src={testimonial.img} alt={testimonial.name} className="w-25 h-25 rounded-full mb-3 drop-shadow-md" />
              </div>
              <div className="ml-2 mt-2 bg-white">
                <p className="font-poppins font-bold text-lg text-gray-800">{testimonial.name}</p>
                <p className="font-poppins font-medium text-sm text-gray-600 mb-2">{testimonial.title}</p>
                <p className="font-poppins font- regular text-gray text-[14px]">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
