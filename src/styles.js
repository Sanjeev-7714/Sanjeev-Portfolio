const styles = {
  paddingX: "sm:px-16 xs:px-6 mobile-md:px-5 px-4",
  paddingY: "sm:py-16 xs:py-12 mobile-md:py-10 py-8",
  padding: "sm:px-16 xs:px-6 mobile-md:px-5 px-4 sm:py-16 xs:py-12 mobile-md:py-10 py-8",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] mobile-md:text-[45px] text-[32px] lg:leading-[98px] sm:leading-[70px] mobile-md:leading-[60px] leading-[1.2] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] mobile-md:text-[18px] text-[16px] lg:leading-[40px] mobile-md:leading-[32px] leading-[1.5]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] mobile-md:text-[36px] text-[28px] leading-[1.1]",
  sectionSubText:
    "sm:text-[18px] mobile-md:text-[16px] text-[14px] text-secondary uppercase tracking-wider",
  
  // Responsive spacing helpers
  sectionSpacing: "md:my-16 sm:my-12 mobile-md:my-10 my-8",
  elementSpacing: "md:my-8 sm:my-6 mobile-md:my-5 my-4",
  
  // Mobile-specific helpers
  mobileContainer: "px-4 mobile-md:px-5 xs:px-6 sm:px-8",
  mobileSpacing: "gap-3 mobile-md:gap-4 xs:gap-4 sm:gap-6 md:gap-8",
  mobileText: "text-[14px] mobile-md:text-[15px] xs:text-[16px] sm:text-[18px]",
  
  // 6.1-6.7 inch device specific helpers (390-430px width)
  largeMobileContainer: "mobile-md:px-5 mobile-md:py-4",
  largeMobileSpacing: "mobile-md:gap-4 mobile-md:my-4",
  largeMobileText: "mobile-md:text-[15px] mobile-md:leading-[1.4]",
};

export { styles };
