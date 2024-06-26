import styles from "../style";
import { tasker } from "../assets";
import { footerLinks} from "../constants";
import { Socials } from "./Socials";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={tasker}
          alt="Tasker"
          className="w-[100px] h-[23px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        Tasker empowers teams to work smarter, not harder. Discover how our solutions can transform your workflow and drive success.
        </p>
        <Socials/>  
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-regular text-[16px] leading-[24px] text-gray cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray">
        © Developed by Arjay Malaga
      </p>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-gray">
        © Designed by Mumair
      </p>
    </div>
  </section>
);

export default Footer;
