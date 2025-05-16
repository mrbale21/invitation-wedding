import CircleType from "circletype";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";

function Arrum({ targetDate }) {
  const textRef = useRef(null);

  // Atur teks melingkar menggunakan CircleType
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

  // State waktu tersisa
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update waktu setiap detik
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

  // Format tanggal untuk kalender
  const date = new Date(targetDate);
  const startDate = date.toISOString().split("T")[0]; // format YYYY-MM-DD
  const startTime = date.toTimeString().slice(0, 5); // format HH:mm
  const endTime = new Date(date.getTime() + 2 * 60 * 60 * 1000) // 2 jam durasi
    .toTimeString()
    .slice(0, 5);

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

      <div className="grid grid-cols-4 place-items-center px-8 text-accent">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.days}</h1>
          <p className="text-lg font-cal-sans">Hari</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.hours}</h1>
          <p className="text-lg font-cal-sans">Jam</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.minutes}</h1>
          <p className="text-lg font-cal-sans">Menit</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center font-raleway z-10"
        >
          <h1 className="text-xl font-semibold">{timeLeft.seconds}</h1>
          <p className="text-lg font-cal-sans">Detik</p>
        </div>
      </div>

      <div className="flex justify-center items-center py-8 z-10">
        <div data-aos="zoom-in">
          <AddToCalendarButton
            name="Acara Pernikahan"
            description="Undangan pernikahan kami, mohon doa restunya."
            startDate={startDate}
            startTime={startTime}
            endTime={endTime}
            timeZone="Asia/Jakarta"
            location="Gedung Serbaguna, Jakarta"
            options={["Google", "Apple", "Outlook.com", "Yahoo", "iCal"]}
            buttonStyle="default"
            size="2"
            label="Simpan di Kalender"
            listStyle="modal"
          />
        </div>
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
