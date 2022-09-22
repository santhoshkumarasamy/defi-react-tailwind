const Subscribe = () => {
  return (
    <section className=" bg-black text-white  h-full">
      <div className="max-w-[1240px] mx-auto text-center h-full ">
        <div className="bg-subscribe-image bg-no-repeat bg-cover w-full h-full ">
          <div className="py-32 w-full  backdrop-blur-[2px]  ">
            <h1 className="md:text-4xl py-2 md:py-6 ease-linear duration-700">Join Our Defi Community</h1>
            <div className=" flex gap-2 justify-center md:gap-4 ease-linear duration-700">
              <input className="p-3 w-4/12 rounded-3xl" type="text" placeholder="Enter your email" />
              <button>Sign Up</button>
            </div>
            <div className="flex justify-center gap-1 my-2 md:my-4 ease-linear duration-700 ">
              <input type="checkbox" name="" id="" />
              <p>Yes, I agree to receive email communication from Defi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
