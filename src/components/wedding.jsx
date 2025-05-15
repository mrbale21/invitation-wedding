import { FaMapLocation } from "react-icons/fa6";

function Wedding() {
  return (
    <>
      <div className="h-[730px] w-full bg-primary text-accent">
        <div className="flex flex-col justify-center items-center pt-18">
          <h1 data-aos="fade-right" className="font-cal-sans text-3xl pr-18">
            SAVE
          </h1>
          <h2 data-aos="fade-left" className="font-breathing text-3xl pl-4">
            The Date
          </h2>
        </div>
        <div className="pt-2 px-6">
          <div className="min-w-full h-[500px] bg-black shadow-2xl shadow-black border border-accent rounded-t-full">
            {/* respsei */}
            <div
              data-aos="zoom-out"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center text-center pt-24"
            >
              <h1 className="font-sacramento text-3xl font-semibold text-primary">
                Resepsi Pernikahan
              </h1>
              <div className="font-cal-sans text-sm flex flex-col gap-1 justify-center items-center">
                <h2>Sabtu, 14 Juni 2025</h2>
                <h4>Pukul : 09.00 WIB sd Selesai</h4>
                <p>Kediaman Mempelai Pria</p>
                <p className="text-[10px]">
                  Kp. Hambalang RT 08/03, Desa Hambalang, Kec. Citeureup, Kab.
                  Bogor
                </p>
                <a
                  href="https://maps.app.goo.gl/DriH4YWAqMSQG4Pz5"
                  className="flex justify-center items-center text-sm font-cal-sans p-1 px-2 bg-primary hover:border rounded-sm gap-2 w-32 mt-4"
                >
                  <FaMapLocation /> <p>Open Map</p>
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-out"
              data-aos-delay="300"
              className="flex flex-col justify-center items-center text-center pt-8"
            >
              <h1 className="font-sacramento text-3xl font-semibold text-primary">
                Akad Nikah
              </h1>
              <div className="font-cal-sans text-sm flex flex-col gap-1 justify-center items-center">
                <h2>Minggu, 15 Juni 2025</h2>
                <h4>Pukul : 09.00 WIB sd Selesai</h4>
                <p>Kediaman Mempelai Wanita</p>
                <p className="text-[10px]">
                  CR8V+W9J Cadas Ngampar, Kabupaten Bogor
                </p>
                <a
                  href="https://maps.app.goo.gl/pQCLmNZLav7Gfegv9"
                  className="flex justify-center items-center text-sm font-cal-sans p-1 px-2 bg-primary hover:border rounded-sm gap-2 w-32 mt-4"
                >
                  <FaMapLocation /> <p>Open Map</p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-accent text-black h-13 grid text-center font-semibold shadow-2xl shadow-black">
            <h1
              data-aos="zoom-out"
              data-aos-delay="200"
              className="font-breathing font-medium mt-3"
            >
              Ilham & Syarifah
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wedding;
