import styles from "../style";
import { tasks, timeslots, onboarding, collaboration } from "../assets";
import { topfeatures1, topfeatures2 } from "../constants";

const TopFeatures = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
        <p className="font-poppins font-regular text-blue mb-5">Learn about Features</p>
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className="font-poppins font-bold ss:text-[36px] text-[26px] text-black">
            Our Top Features
          </h1>
        </div>
        <p className={`${styles.paragraph} font-poppins font-regular text-gray max-w-[470px] mb-10`}>
        Explore our top features designed to enhance productivity and simplify task management, 
        ensuring that your projects are completed on time and within budget.
        </p>

        {/* Input box and button */}
        <div className="flex flex-col w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="w-full sm:w-auto px-10 py-3 bg-blue text-white rounded-lg bg-blue focus:outline-none focus:ring-2 focus:ring-blue-600">
            Get Started
          </button>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {topfeatures1.concat(topfeatures2).map((feature, index) => (
            <div key={feature.id} className={`border border-gray-100 rounded-lg flex flex-col overflow-hidden bg-white`}>
              <div className="p-4">
                <div className={`flex items-center justify-center w-[50px] h-[50px] rounded-lg ${index % 4 === 0 ? 'bg-orange' : index % 4 === 1 ? 'bg-blue' : index % 4 === 2 ? 'bg-green' : 'bg-yellow'}`}>
                  <img src={feature.img} alt={feature.name} className="w-8 h-8" />
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-poppins font-bold text-xl mb-2">{feature.name}</h2>
                <p className="font-poppins text-gray text-sm">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFeatures;
