import { useEffect } from "react";
import galery1 from "../assets/image/galery-1.jpg";
import galery2 from "../assets/image/galery-2.jpg";
import galery3 from "../assets/image/galery-3.jpg";
import galery4 from "../assets/image/galery-4.jpg";
import galery5 from "../assets/image/galery-5.jpg";
import galery6 from "../assets/image/galery-6.jpg";
import Marquee from "react-fast-marquee";
import Bride from "./bride";
import Arrum from "./arrum";
import Wedding from "./wedding";
import Wish from "./wish";
import Gift from "./gift";
import Footer from "./footer";
import BottomNavbar from "./bottomNavbar";
import MusicPlayer from "./musicPlayer";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";

function FirstPage() {
  const galerys = [
    { galery: galery1 },
    { galery: galery2 },
    { galery: galery3 },
    { galery: galery4 },
    { galery: galery5 },
    { galery: galery6 },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <AnimatedPage>
      <div className="min-h-screen w-full overflow-hidden bg-[url(assets/image/background.jpg)] bg-fit text-accent">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md min-h-screen mx-auto bg-black bg-opacity-80 flex flex-col items-center"
        >
          {/* Header Image with Overlay */}
          <div className="relative w-full h-96 bg-[url(assets/image/mempelai-2.jpg)] bg-top bg-no-repeat bg-cover flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0" />
            <div className="relative z-10 text-center mb-10 px-4">
              <h1 data-aos="fade-up" className="text-xl font-cal-sans">
                The Wedding Of
              </h1>
              <h3
                data-aos="fade-up"
                className="font-breathing text-2xl font-medium text-primary"
              >
                Ilham & Syarifah
              </h3>
              <h5 data-aos="fade-up" className="text-sm font-raleway">
                15.06.2025
              </h5>
            </div>
          </div>

          {/* Galeri Marquee */}
          <div className="hide-scrollbar w-full px-4 py-2">
            <Marquee speed={20} pauseOnHover gradient={false}>
              <div className="flex gap-2">
                {galerys.map((data, index) => (
                  <div key={index} className="h-24 w-24 flex-shrink-0">
                    <img
                      src={data.galery}
                      alt={`galery-${index}`}
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          {/* Transition Image Divider */}
          <div className="w-full h-28 bg-[url(assets/image/7.jpg)] bg-cover bg-bottom" />

          {/* Sections */}
          <div id="bride" className="w-full">
            <Bride />
          </div>

          <div className="w-full px-4">
            <Arrum targetDate="2025-06-15T00:00:00" />
          </div>

          <div id="wedding" className="w-full">
            <Wedding />
          </div>

          <div id="wish" className="w-full">
            <Wish />
          </div>

          <div id="gift" className="w-full">
            <Gift />
          </div>

          <div className="w-full">
            <Footer />
          </div>
        </motion.div>

        <BottomNavbar onNavigate={scrollToSection} />
        <MusicPlayer />
      </div>
    </AnimatedPage>
  );
}

export default FirstPage;
