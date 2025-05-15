import { useNavigate, useSearchParams } from "react-router-dom";
import AnimatedPage from "./animatedPage";
import { motion } from "framer-motion";

function Introduction() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("to");

  const handleOpenInvitation = () => {
    // Tunggu animasi selesai, lalu navigate
    setTimeout(() => {
      navigate("/open");
    }, 600); // harus sama/lebih dari durasi exit animation
  };

  return (
    <>
      <AnimatedPage>
        <div className="h-screen w-screen flex justify-center items-center bg-[url(assets/image/background.jpg)] bg-contain text-white">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col py-20 justify-between items-center h-full w-96 bg-[url(assets/image/bgdark.jpg)] bg-cover bg-center rounded-xl"
          >
            <div className="items-center flex flex-col font-sacramento">
              <h1 className="font-medium text-3xl text-light-gray">Undangan</h1>
              <h2 className="text-2xl font-breathing text-primary">
                Walimatul Ursy
              </h2>
            </div>
            <div className="bg-[url(assets/image/name.jpg)] h-52 w-52 bg-contain bg-no-repeat bg-center"></div>
            <div className="grid place-items-center font-cal-sans gap-2">
              <h4 className="text-sm">Kepada yth:</h4>
              <h3 className="font-semibold mb-4 text-primary">
                {name ? name : "Tamu Undangan"}
              </h3>
              <button
                onClick={handleOpenInvitation}
                className="bg-accent text-black text-xs hover:text-[13px] p-1 px-2 rounded-md shadow shadow-accent border border-black"
              >
                Buka Undangan
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Introduction;
