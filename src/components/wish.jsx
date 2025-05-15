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

  useEffect(() => {
    fetchWishes();
  }, []);

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
    if (loading) return; // mencegah double klik saat proses

    if (!name || !address || !wish) {
      alert("Semua kolom wajib diisi!");
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
      alert("Ucapan berhasil dikirim!");
      setName("");
      setAddress("");
      setWish("");
      fetchWishes();
    } catch (error) {
      console.error("Error adding wish: ", error);
      alert("Gagal mengirim ucapan!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center pt-6 text-accent">
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

      <div data-aos="zoom-in" className="h-[880px] w-96 bg-black mt-2">
        <div className="pt-2 px-6">
          <div className="min-w-full h-[840px] bg-black shadow-2xl shadow-black border border-accent rounded-md">
            <div className="flex flex-col justify-center items-center py-3">
              <h3>{wishesList.length} Comments</h3>
              <hr className="border w-84 mt-6" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-3 pt-2"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black border text-white text-xs rounded-sm w-7/8 p-1.5 font-akaya-kanadaka"
                placeholder="Nama"
                required
              />
              <textarea
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-black border text-white text-xs rounded-sm w-7/8 p-1.5 resize-none font-akaya-kanadaka"
                placeholder="Alamat"
                required
              />
              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                className="bg-black border text-white text-xs rounded-sm w-7/8 p-1.5 min-h-[80px] resize-none font-akaya-kanadaka"
                placeholder="Ucapan"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className={`mx-auto bg-primary hover:border-2 border border-accent p-1 w-7/8 rounded-sm text-accent font-cal-sans font-semibold text-sm ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </form>
            <ListWishes wishes={wishesList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wish;
