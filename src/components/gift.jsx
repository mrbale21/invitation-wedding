import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { FaGift } from "react-icons/fa";

function Gift() {
  const [showGiftCard, setShowGiftCard] = useState(false);

  const toggleGiftCard = () => {
    setShowGiftCard(!showGiftCard);
  };

  const [copied, setCopied] = useState(false);
  const rekening = "901926926620";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekening).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset indikator setelah 2 detik
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[250px] w-full bg-[url(assets/image/bg-gift-card.jpg)] backdrop-blur-3xl bg-cover bg-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/50 z-0"></div>

        {/* --- Section Gift --- */}
        <div
          data-aos="zoom-in"
          className="text-3xl font-bold font-sacramento text-black z-10"
        >
          Kirim Hadiah
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="font-cal-sans text-[12px] pb-6 text-black z-10"
        >
          klik tombol dibawah untuk kirim hadiah
        </div>
        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={toggleGiftCard}
          className="py-2 px-5 bg-primary rounded-md font-cal-sans hover:border hover:border-black text-white z-10"
        >
          <div className="flex items-center gap-1 text-sm ">
            <FaGift size={15} /> Kirim Hadiah
          </div>
        </button>
      </div>

      {/* Card untuk Kirim Hadiah */}
      {showGiftCard && (
        <>
          {/* ✅ BACKDROP OVERLAY */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md backdrop-brightness-75 z-40"></div>

          {/* Gift Card Box */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-[url(assets/image/bg-gift-card.jpg)] bg-cover h-[400px] w-80 rounded-md shadow-2xl shadow-black text-black">
              <div className="flex items-center justify-end p-6 px-6">
                <div onClick={toggleGiftCard}>
                  <MdClose
                    size={18}
                    className="mb-3 bg-black text-accent rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h2 className="text-xl font-bold pb-10">Send Your Gift</h2>
                <p className="text-black text-center mb-4 text-sm font-semibold">
                  Terima kasih atas hadiah Anda!
                </p>
                <div className="flex justify-center">
                  <div className="h-30 w-60 border border-black rounded-2xl shadow-sm shadow-gray-400">
                    <div className="grid items-center px-8 py-4 gap-1">
                      <h1 className="font-akaya-kanadaka font-semibold text-lg text-black">
                        Sea Bank
                      </h1>
                      <p className="font-raleway text-sm flex items-center gap-1 cursor-pointer">
                        {rekening}
                        <RiFileCopyLine
                          onClick={handleCopy}
                          className="mt-0.5 text-blue-500 hover:text-blue-700"
                        />
                        {copied && (
                          <span className="text-blue-500 text-sm ml-1">
                            Tersalin!
                          </span>
                        )}
                      </p>
                      <p className="font-cal-sans text-sm">
                        a/n Ilham Ramadani
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Gift;
