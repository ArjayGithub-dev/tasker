const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-regular text-gray text-[16px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export const animation = {
    ease: `duration-[1000ms] ease-[cubic-bezier(.47,0,.745,.715)] taos:opacity-0`,
    offset: `duration-[1000ms] taos:opacity-0" data-taos-offset="300"`,
    fadeRight: `delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400"`,
    zoomIn: `delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400"`,
    zoomLeft: `delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,0,0)_scale(0.6)] taos:opacity-0" data-taos-offset="400"`,
    zoomRight: `delay-[300ms] duration-[600ms] taos:[transform:translate3d(-200px,0,0)_scale(0.6)] taos:opacity-0" data-taos-offset="400"`,
  
  };
  

  export default styles;