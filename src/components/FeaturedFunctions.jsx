import styles from "../style";
import { illustration2, illustration3 } from "../assets";

const FeaturedFunctions = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
          <img src={illustration3} alt="Illustration 3" className="w-[100%] h-[100%]" />
        </div>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
          <p className="font-poppins font-regular text-blue mb-5">Perform All Your Tasks</p>
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <h1 className="font-poppins font-bold ss:text-[36px] text-[26px] text-black">
              Perform All Your Tasks  <br />  At One Place
            </h1>
          </div>
          <p className={`${styles.paragraph} font-poppins font-regular text-gray max-w-[470px] mb-10`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>

          {/* Input box and button */}
          <div className="flex flex-col w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="w-full sm:w-auto px-10 py-3 bg-blue text-white rounded-lg bg-blue focus:outline-none focus:ring-2 focus:ring-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
          <p className="font-poppins font-regular text-blue mb-5">Learn about Features </p>
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <h1 className="font-poppins font-bold ss:text-[36px] text-[26px] text-black">
              Boost Your Productivity  <br />  And Management
            </h1>
          </div>
          <p className={`${styles.paragraph} font-poppins font-regular text-gray max-w-[470px] mb-10`}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </p>

          {/* Input box and button */}
          <div className="flex flex-col w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="w-full sm:w-auto px-10 py-3 bg-blue text-white rounded-lg bg-blue focus:outline-none focus:ring-2 focus:ring-blue-600">
              Explore More
            </button>
          </div>
        </div>
        <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
          <img src={illustration2} alt="Illustration 2" className="w-[100%] h-[100%]" />
        </div>
      </section>
    </div>
  );
};

export default FeaturedFunctions;
