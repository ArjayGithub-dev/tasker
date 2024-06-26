import styles from "../style";
import { illustration1 } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className="flex-1 font-poppins font-bold ss:text-[48px] text-[28px] text-black">
            Tasker brings all <br className="sm:block hidden" />
            your tasks, teams, & <br className="sm:block hidden" />
            tools together <br className="sm:block hidden" />
          </h1>
        </div>
        <p className={`${styles.paragraph} font-poppins font-regular text-gray max-w-[470px] mb-10`}>
        With Tasker, collaboration flows effortlessly, fostering productivity and efficiency even when team members are working from different places.
        </p>

        {/* Input box and button */}
        <div className="flex flex-col w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Email"
            className="w-full sm:w-1/2 px-6 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-blue text-white rounded-lg bg-blue focus:outline-none focus:ring-2 focus:ring-blue-600">
            Sign Up Its Free
          </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
        <img src={illustration1} alt="Illustration" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Hero;
