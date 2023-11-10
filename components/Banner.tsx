import Image from "next/image";
import download from "../public/img/download.png";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-60 h-60 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={download}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">Hi, I'm <span className="text-[#FF014F]">Mzwandile Nkohla</span></h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
        <p>A Web Developer In The Making</p>
        <p>A Game Developer</p>
        <p>A Story And Animation Enthusiast</p>
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
            
        </p>
      </div>
    </div>
  );
};

export default Banner;
