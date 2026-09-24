import Image from "next/image";
import banner from "@/assets/banner.png";

function HeroSection() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-5 bg-gray-300 dark:bg-gray-900 rounded-4xl py-10 px-15">
        <div className="mt-20">
          <h4 className="text-xl uppercase text-amber-200 font-semibold mt-10 mb-4">
            Workout Library
          </h4>

          <h1 className="text-6xl uppercase font-semibold space-x-3 tracking-tight mb-10">
            Train with intent. log every set.
          </h1>
          <p className="text-gray-400  font-semibold text-2xl">
            Fitlog is a dark, no-nonsense gym companion: pick a lift, <br />{" "}
            lock it into {"today's"} plan, and watch the weeks work add up
          </p>
          <button className="mt-15 bg-yellow-300 rounded-xl px-5 py-2 text-xl font-semibold text-black ">
            Brows Workouts
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Image src={banner} alt="banner" width={600} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
