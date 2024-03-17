const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 bg-[url('/images/Rectangle.png')] bg-contain bg-no-repeat h-[600px] text-center">
      <h3 className="text-5xl font-bold text-white leading-[70px]">
        Discover an exceptional cooking <br /> class tailored for you!
      </h3>
      <p className="text-lg text-white my-6">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding <br /> problems to become an
        exceptionally well world-class Programmer.
      </p>
      <div className="flex gap-6 justify-center mt-4">
        <button className="bg-[#0BE58A] text-[#150B2B] py-3 px-4 rounded-3xl text-xl font-semibold">Explore Now</button>
        <button className="text-white py-3 px-4 rounded-3xl border-[1px] border-white text-xl font-semibold">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
