import CircleType from "circletype";
import { useEffect, useRef, useState } from "react";
import { BsCalendar2 } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Arrum({ targetDate }) {
  const textRef = useRef(null);

  // Mengatur teks melingkar menggunakan CircleType
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(220);
    }
  }, []);

  // Fungsi untuk menghitung waktu yang tersisa
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  // State untuk menyimpan waktu yang tersisa
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Mengupdate waktu yang tersisa setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Inisialisasi AOS untuk animasi
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  // Fungsi untuk mendownload file ICS
  const downloadWeddingICSFile = () => {
    const title = "Undangan Pernikahan";
    const description =
      "Dengan hormat, Anda diundang untuk menghadiri acara pernikahan kami.";
    const location = "Gedung Serbaguna Cinta Abadi, Jakarta";

    // Acara: 20 Juli 2025, jam 10:00 - 12:00 WIB (WIB = UTC+7)
    const startDate = new Date(Date.UTC(2025, 6, 20, 3, 0)); // bulan ke-6 = Juli (index 0)
    const endDate = new Date(Date.UTC(2025, 6, 20, 5, 0));

    const pad = (num) => (num < 10 ? "0" + num : num);
    const formatDate = (date) => {
      return (
        date.getUTCFullYear().toString() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate()) +
        "T" +
        pad(date.getUTCHours()) +
        pad(date.getUTCMinutes()) +
        pad(date.getUTCSeconds()) +
        "Z"
      );
    };

    const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:${title}
  DESCRIPTION:${description}
  LOCATION:${location}
  DTSTART:${formatDate(startDate)}
  DTEND:${formatDate(endDate)}
  END:VEVENT
  END:VCALENDAR`.trim();

    // Membuat Blob dari ICS Content
    const blob = new Blob([icsContent], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    // Membuat elemen <a> untuk mendownload
    const link = document.createElement("a");
    link.href = url;
    link.download = "undangan-pernikahan.ics";
    document.body.appendChild(link);
    link.click(); // Trigger download
    document.body.removeChild(link); // Menghapus elemen setelah download
  };

  return (
    <div className="relative min-h-[430px] w-full bg-[url(assets/image/bg-arrum.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"></div>
      <div className="flex justify-center items-center h-32 pt-12 pl-14">
        <h1
          data-aos="fade-down"
          ref={textRef}
          className="text-primary text-[18px] font-extrabold font-cal-sans transform rotate-6"
        >
          Waktu Menuju Pernikahan
        </h1>
      </div>
      <div className="grid grid-cols-4 place-items-center px-8 text-accent ">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.days}</h1>
          <p className="text-lg font-cal-sans">Hari</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.hours}</h1>
          <p className="text-lg font-cal-sans">Jam</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.minutes}</h1>
          <p className="text-lg font-cal-sans">Menit</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.seconds}</h1>
          <p className="text-lg font-cal-sans">Detik</p>
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <button
          onClick={downloadWeddingICSFile}
          data-aos="zoom-in"
          className="text-[10px] py-1 px-2 bg-primary hover:border-2 font-bold rounded-sm border border-accent flex items-center gap-1 z-10"
        >
          <BsCalendar2 size={14} /> Simpan di Kalender
        </button>
      </div>
      <p
        data-aos="fade-up"
        className="text-[10px] font-charm px-6 text-center z-10"
      >
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir.
        <br />
        <br />
        <span className="font-bold mt-1">(QS. Ar-Rum: 21)</span>
      </p>
    </div>
  );
}

export default Arrum;
