import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex items-center justify-around flex-col max-w-[100vw] h-[64.5vh] font-Lumanosimo dark:bg-slate-900 dark:text-white">
      <div className="w-[80vw] h-[40vh] flex flex-col items-center justify-between">
        <h1 className="text-sm leading-relaxed sm:leading-loose sm:text-base md:text-lg md:leading-loose lg:text-xl lg:leading-loose xl:text-2xl xl:leading-loose 2xl:text-3xl 2xl:leading-loose">
          Hello, I`m <span className="text-five">Ahmad Pirhayati</span> , a front-end
          programmer. I have created this e-commerce website as a sample work.
          Feel free to contact me via LinkedIn and GitHub for further
          communication.
        </h1>
        <div className="flex flex-col justify-between items-start text-xl h-36 p-8 md:text-2xl lg:h-36 xl:text-3xl xl:h-40 2xl:text-4xl 2xl:h-44">
          <Link
            to={"https://www.linkedin.com/in/ahmad-pirhayati-7335aa2a1/"}
            className="flex justify-center items-center hover:text-five transition duration-500 ease-in-out"
          >
            <span className="fa-brands fa-linkedin mr-4"></span>Ahmad Pirhayati
          </Link>
          <Link
            to={"https://github.com/"}
            className="flex justify-center items-center hover:text-five transition duration-500 ease-in-out"
          >
            <span className="fa-brands fa-github mr-4"></span>ahmadpht
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
