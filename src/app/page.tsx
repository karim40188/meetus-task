import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="login-page h-screen relative overflow-x-hidden">
      <div>
        <div
          className="absolute top-[-300px] rounded-full w-[667px] h-[667px] 
        left-[638px] bg-[#E477F6] blur-[200px] z-0"
        ></div>
      </div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-col gap-3 text-center w-full md:w-[381px]">
            <h3 className="text-[40px] md:text-[56px] text-[#1A1A1E]">Welcome back</h3>
            <p className="text-[#62626B]">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </p>
            <form action="" className="flex flex-col mt-3 gap-5 text-center w-full">
              <div className="relative w-full h-[57px] rounded-lg">
                <Image
                  className="absolute left-3 -translate-y-1/2 top-[50%]"
                  alt={"sms"}
                  width={24}
                  height={24}
                  src={"/sms.png"}
                />
                <input
                  type="text"
                  className="w-full h-full px-[50px]"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full h-[57px] rounded-lg">
                <Image
                  className="absolute left-3 -translate-y-1/2 top-[50%]"
                  alt={"sms"}
                  width={24}
                  height={24}
                  src={"/lock.png"}
                />
                <input
                  type="password"
                  className="w-full h-full px-[50px]"
                  placeholder="Password"
                />
              </div>

              <button className="bg-[#9414FF] rounded-lg w-full h-[43px] text-white">
                Login
              </button>
              <p className="text-[14px] text-[#62626B]">
                Don&apos;t have an account? <Link href="#">Sign up</Link>
              </p>
            </form>
          </div>
          <div className="z-10 relative mt-5 md:mt-0">
            <Image
              alt={"login-img"}
              width={626}
              height={523}
              src={"/vector.png"}
              className="object-contain w-full md:w-[626px]"
            />
            <Image
              className="absolute bottom-[80px] lg:bottom-[170px] left-[50%] -translate-x-1/2"
              width={413}
              height={75}
              src={"/meetus.png"}
              alt={"meetus vr"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
