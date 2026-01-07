import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import foody from '../assets/foodis.png'
import starfusion from '../assets/StarFusion.png'
import gymIMG from '../assets/gym.png'
import CofeemeIMG from '../assets/cofeeme.png'

const projects = [
  {
    id: 1,
    title: "Resturante Website",
    description:
      "A full-stack Resturent app with authentication, cart system and admin panel.",
    tech: ["React", "Tailwind", "Django", "REST API"],
    image: foody,
    github: "https://github.com/asifahmad0/foodApp.git",
    live: "https://foodapp-7img.onrender.com/",
  },
  {
    id: 2,
    title: "Softwear Company ",
    description:
      "Users can submit requirment, contact and review works, this website mack digitle pregints for businesses.",
    tech: ["React", "Tailwind", "Firebase", "Django", "Resender"],
    image: starfusion,
    github: "https://github.com/asifahmad0/ApnaBusiness.git",
    live: "https://star-fusion.vercel.app/",
  },
  {
    id: 1,
    title: "My Fitness World",
    description:
      "A  Gym web app with authentication, cart system and admin panel. where order protin and book persional trainer and many more",
    tech: ["React", "Tailwind", "REST API", "Nodemailer"],
    image: gymIMG,
    github: "https://github.com/asifahmad0/FitnesWorld.git",
    live: "https://foodapp-7img.onrender.com/",
  },
  {
    id: 2,
    title: "Ahmad Cafe ",
    description:
      "A Cloude Cafe order your tea, cofee and snacks , contact and review works, this website mack digitle pregints for businesses.",
    tech: ["React", "Tailwind", "Firebase", "Resender"],
    image: CofeemeIMG,
    github: "https://github.com/asifahmad0/cofeeme",
    live: "https://cofeeme.vercel.app/",
  },
];

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section 
      className=" min-h-screen w-[100dvh-60px] px-4 sm:px-6 lg:px-10 py-10 overflow-hidden"
      id="projects"
    >
      {/* Heading */}
      <h2
        className="text-primery text-3xl sm:text-4xl font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up"
            className="bg-white w-[300px] dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-center"
            />

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-xl text-primery font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg border border-primery dark:border-primery hover:bg-primery hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-primery text-white hover:bg-secondry transition"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
