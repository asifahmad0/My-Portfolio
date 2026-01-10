import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    company: "Narayani Jewellers",
    duration: "01/2025 - Present",
    description:
      "Worked as a Backend Developer, Managing a Django API and Django bes systems, improving performance and user experience.",
  },
  {
    id: 2,
    company: "Startup",
    duration: "08/2024 - Present",
    description:
      "Star fusion IT Solution, We Developed modern web applications using Python, Django, React, Tailwind CSS and many more thech stack with smooth animations.",
  },
  {
    id: 3,
    company: " Financial Accountant",
    duration: "08/2022 - 1/2025",
    description:
      "Managing multiple financial Transaction and patty cash, filing and prepairing taxes.",
  },
  
  
];

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="min-h-screen w-[100dvh-60px] px-4 sm:px-6 lg:px-10 py-16"
      id="experience"
    >
      {/* Heading */}
      <h2
        className="text-3xl text-textColor2 sm:text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        Experience
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-textColor2 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-16">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex w-full  ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <span className="absolute left-1/2 top-6 w-4 h-4 bg-text-Color2 rounded-full -translate-x-1/2 z-10  lg:mt-0" />

              {/* Card */}
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="w-full sm:w-[45%] bg-white shadow-lg rounded-xl p-6 mt-[15px] md:mt-0"
              >
                <h3 className="text-xl text-textColor2 font-semibold">
                  {item.company}
                </h3>

                <span className="text-sm text-gray-500">
                  {item.duration}
                </span>

                <p className="mt-3 text-sm text-PtextColor ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
