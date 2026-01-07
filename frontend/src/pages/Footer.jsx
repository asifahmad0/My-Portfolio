import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Footer() {


useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  




  return (
    <footer className="w-[100dvh-60px] bg-black text-white px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6"
        data-aos="fade-up">
          
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-semibold">Asif Ahmad</h3>
            <p className="mt-2 text-sm text-gray-400 max-w-sm">
              Full Stack Developer focused on building modern, responsive and
              performance-optimized web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium mb-3">Follow Me</h4>
            <div className="flex gap-4 text-gray-400">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Asif Ahmad. All rights reserved.</p>
          <p>Thank You ❤️ For Comming My Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
