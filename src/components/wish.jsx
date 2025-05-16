import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import ListWishes from "./listWish";

function Wish() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [wish, setWish] = useState("");
  const [wishesList, setWishesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    fetchWishes();
  }, []);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 3000); // 3 detik
      return () => clearTimeout(timer);
    }
  }, [message]);

  const fetchWishes = async () => {
    try {
      const wishesCollection = collection(db, "wishes");
      const wishesSnapshot = await getDocs(wishesCollection);
      const wishes = wishesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishesList(wishes);
    } catch (error) {
      console.error("Error fetching wishes: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!name || !address || !wish) {
      setMessage({ text: "Semua kolom wajib diisi!", type: "error" });
      return;
    }

    const newWish = {
      name,
      address,
      wish,
      date: Timestamp.now(),
    };

    setLoading(true);

    try {
      await addDoc(collection(db, "wishes"), newWish);
      setMessage({ text: "Ucapan berhasil dikirim!", type: "success" });
      setName("");
      setAddress("");
      setWish("");
      fetchWishes();
    } catch (error) {
      console.error("Error adding wish: ", error);
      setMessage({ text: "Gagal mengirim ucapan!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-6 text-accent pb-9">
      <h1
        data-aos="zoom-in"
        className="font-sacramento text-3xl text-primary font-semibold"
      >
        Doa & Ucapan
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="font-cal-sans capitalize"
      >
        Kirimkan ucapan dan doa restu kami
      </p>

      <div
        data-aos="zoom-in"
        className="w-[340px] bg-black mt-4 rounded-md border border-accent shadow-xl"
      >
        <div className="px-4 py-4">
          {/* ✅ Notifikasi dipindah ke atas */}
          {message.text && (
            <div
              className={`mb-4 p-3 rounded text-sm text-center ${
                message.type === "success"
                  ? "bg-green-600 text-white border border-green-400"
                  : "bg-red-600 text-white border border-red-400"
              }`}
            >
              {message.text}
            </div>
          )}

          <h3 className="text-center font-semibold">
            {wishesList.length} Komentar
          </h3>
          <hr className="my-4 border-accent" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black border text-white text-xs rounded-sm w-full p-1.5 font-akaya-kanadaka"
              placeholder="Nama"
              required
            />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-black border text-white text-xs rounded-sm w-full p-1.5 resize-none font-akaya-kanadaka"
              placeholder="Alamat"
              required
            />
            <textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="bg-black border text-white text-xs rounded-sm w-full p-1.5 min-h-[80px] resize-none font-akaya-kanadaka"
              placeholder="Ucapan"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary hover:border-2 border border-accent p-1 rounded-sm text-accent font-cal-sans font-semibold text-sm ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </form>

          <div className="mt-6">
            <ListWishes wishes={wishesList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wish;
