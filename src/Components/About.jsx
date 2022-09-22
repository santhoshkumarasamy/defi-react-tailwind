import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
const About = () => {
  return (
    <section className="bg-black text-white ">
      <div className="max-w-[1240px] mx-auto py-16 px-4 ">
        <div className=" text-center">
          <h1 className="mb-4">A Growing Protocol Eco-System</h1>
          <p className=" font-light ">
            The Defi Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut veritatis ut corporis molestias cumque autem explicabo ex quam
            sit nulla!
          </p>
        </div>
        <div className="grid grid-cols-1 px-8 py-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="py-6 px-8 border rounded-xl hover:scale-110 ease-in-out duration-700">
            <SiHiveBlockchain
              className=" text-black rounded-full bg-primary-color p-2 "
              size={55}
            />
            <h3 className="font-bold my-2">Reliable Tamper-proof Network</h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quidem porro, eos perspiciatis iure voluptas
            </p>
          </div>

          <div className="py-6 px-8 border rounded-xl  hover:scale-110 ease-in-out duration-700">
            <SiStrapi
              className=" text-black rounded-full bg-primary-color p-2 "
              size={55}
            />
            <h3 className="font-bold my-2">Seamless connection to any API</h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quidem porro, eos perspiciatis iure voluptas
            </p>
          </div>

          <div className="py-6 px-8 border rounded-xl  hover:scale-110 ease-in-out duration-700">
            <SiFsecure
              className=" text-black rounded-full bg-primary-color p-2 "
              size={55}
            />
            <h3 className="font-bold my-2">Proven ready-made solutions</h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quidem porro, eos perspiciatis iure voluptas
            </p>
          </div>

          <div className="py-6 px-8 border rounded-xl  hover:scale-110 ease-in-out duration-700">
            <VscServerProcess
              className=" text-black rounded-full bg-primary-color p-2 "
              size={55}
            />
            <h3 className="font-bold my-2">Secure off-chain computation</h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quidem porro, eos perspiciatis iure voluptas
            </p>
          </div>
        </div>
        <div className="mx-auto w-full text-center mt-5">
          <button className="text-center hover:bg-white ease-in-out duration-700">Use Defi</button>
        </div>
      </div>
    </section>
  );
};

export default About;
