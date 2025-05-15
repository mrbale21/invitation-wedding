import React, { useState, useEffect } from "react";
import brideIcon from "../assets/icons/bride.png";
import dateIcon from "../assets/icons/date.png";
import wishIcon from "../assets/icons/wish.png";
import giftIcon from "../assets/icons/gift.png";

const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState(""); // Untuk menyimpan section aktif
  const [lastActiveSection, setLastActiveSection] = useState(""); // Untuk menyimpan section aktif terakhir

  // Fungsi untuk mendeteksi posisi scroll dan mengubah activeSection
  const handleScroll = () => {
    const sections = ["bride", "wedding", "wish", "gift"];
    let active = "";

    // Menentukan section yang aktif berdasarkan posisi scroll
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          active = section;
        }
      }
    });

    // Jika tidak ada section yang aktif (scrolling di antara section tanpa id)
    if (!active) {
      active = lastActiveSection;
    }

    setActiveSection(active); // Update state dengan section yang aktif
    setLastActiveSection(active); // Simpan section terakhir yang aktif
  };

  // Menambahkan event listener saat halaman di-scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastActiveSection]);

  // Fungsi scroll ke section tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-80 z-50 bg-soft-pearl text-white rounded-t-lg">
      <div className="flex justify-around items-center py-1">
        <button
          onClick={() => scrollToSection("bride")}
          className={
            activeSection === "bride" ? "bg-primary p-1 px-4 rounded" : ""
          }
        >
          <img src={brideIcon} alt="bride" className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToSection("wedding")}
          className={
            activeSection === "wedding" ? "bg-primary p-1 px-4 rounded" : ""
          }
        >
          <img src={dateIcon} alt="wedding" className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToSection("wish")}
          className={
            activeSection === "wish" ? "bg-primary p-1 px-4 rounded" : ""
          }
        >
          <img src={wishIcon} alt="wish" className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToSection("gift")}
          className={
            activeSection === "gift" ? "bg-primary p-1 px-4 rounded" : ""
          }
        >
          <img src={giftIcon} alt="gift" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
