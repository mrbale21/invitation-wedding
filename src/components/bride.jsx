import { FaInstagram } from "react-icons/fa6";

function Bride() {
  return (
    <>
      <div className="min-h-screen w-full bg-[url(assets/image/8.jpg)] bg-contain bg-no-repeat text-primary">
        <div className="flex flex-col justify-start items-center px-4">
          <div className="flex mt-18 font-cal-sans text-7xl relative gap-6">
            <div className="flex gap-5">
              <h1 data-aos="fade-right" data-aos-delay="0" className="">
                I
              </h1>
              <h1 data-aos="fade-left" data-aos-delay="0">
                S
              </h1>
            </div>
            <div className="absolute left-2/5 ml-0.5 top-0 h-20 w-px bg-primary"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-col justify-center items-center text-center mt-6 font-cal-sans"
          >
            <h4 className="font-sacramento text-[26px] text-accent">
              Assalamualaikum Wr. Wb.
            </h4>
            <p className="text-xs max-w-prose">
              Dengan memohon Rahmat dan Ridho Allah SWT yang telah <br />
              menciptakan makhluk-Nya secara berpasang-pasangan <br />
              Kami bermaksud menyelenggarakan pernikahan kami
            </p>
          </div>
        </div>

        <div className="relative rounded-md m-4 mx-8 py-8 shadow-2xl shadow-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url(assets/image/elemen-bg-1.jpg)] bg-cover opacity-90"></div>
          {/* Mempelai Pria */}
          <div className="relative z-10 flex justify-end pr-6">
            <div className="flex flex-col items-end">
              <div className="flex gap-1">
                <p className="text-primary font-cal-sans font-extrabold text-md uppercase">
                  {["T", "H", "E", "\u00A0", "G", "R", "O", "O", "M"].map(
                    (char, index) => (
                      <h1
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={index * 150}
                      >
                        {char}
                      </h1>
                    )
                  )}
                </p>
                <div
                  data-aos="flip-left"
                  className="bg-[url(assets/image/pria.jpg)] h-[220px] w-[160px] bg-cover bg-center flex justify-end items-end rounded-md"
                >
                  <h1 className="flex font-breathing text-accent text-2xl p-1">
                    {["I", "L", "H", "A", "M"].map((char, index) => (
                      <h1
                        key={index}
                        data-aos="fade-left"
                        data-aos-delay={index * 150}
                      >
                        {char}
                      </h1>
                    ))}
                  </h1>
                </div>
              </div>
              <div className="pt-2 flex flex-col justify-end items-end">
                <h1
                  data-aos="fade-left"
                  className="font-poppins text-xl text-black font-semibold"
                >
                  Ramadhan Ilham
                </h1>
                <p
                  data-aos="fade-left"
                  className="text-end text-black text-[12px]"
                >
                  Putra kedua dari <br />
                  Bapak K.H. Pahrudin & <br />
                  Ibu Siti Aminah
                </p>
                <a
                  href="https://instagram.com/mr.hamz97"
                  data-aos="zoom-in"
                  className="text-xs font-semibold p-1 px-2 text-center bg-primary hover:border hover:border-black text-accent rounded-sm flex items-center gap-1 mt-4"
                >
                  <FaInstagram />
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>

          {/* And */}
          <div
            data-aos="zoom-out"
            className="relative z-10 flex items-center justify-center text-center py-8"
          >
            <h1 className="font-breathing text-3xl text-primary font-semibold">
              And
            </h1>
          </div>

          {/* Mempelai wanita */}
          <div className="relative z-10 flex justify-start pl-6">
            <div className="flex flex-col items-start">
              <div className="flex gap-2">
                <div
                  data-aos="flip-right"
                  className="bg-[url(assets/image/wanita.jpg)] h-[220px] w-[160px] bg-cover bg-center flex justify-start items-end rounded-md"
                >
                  <h1 className="flex font-breathing text-accent text-3xl p-1">
                    {["S", "y", "a", "r", "i", "f", "a", "h"].map(
                      (char, index) => (
                        <h1
                          key={index}
                          data-aos="fade-right"
                          data-aos-delay={index * 150}
                        >
                          {char}
                        </h1>
                      )
                    )}
                  </h1>
                </div>
                <p className="text-primary font-cal-sans font-extrabold text-md uppercase">
                  {["T", "H", "E", "\u00A0", "B", "R", "i", "d", "e"].map(
                    (char, index) => (
                      <h1
                        key={index}
                        data-aos="fade-left"
                        data-aos-delay={index * 150}
                      >
                        {char}
                      </h1>
                    )
                  )}
                </p>
              </div>
              <div className="pt-2 flex flex-col justify-end items-start">
                <h1
                  data-aos="fade-right"
                  className="font-poppins text-xl text-black font-semibold"
                >
                  Siti Syarifah Putria Azzahra
                </h1>
                <p
                  data-aos="fade-right"
                  className="text-start text-[12px] text-black"
                >
                  Putri kedua dari <br />
                  Bapak K.H. Iip Abdul Gofar & <br />
                  Ibu Iis Suryani
                </p>
                <a
                  href="https://instagram.com/___syrfhazzhra"
                  data-aos="zoom-in"
                  className="text-xs font-semibold p-1 px-2 text-center bg-primary hover:border hover:border-black text-accent rounded-sm flex items-center gap-1 mt-4"
                >
                  <FaInstagram />
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bride;
