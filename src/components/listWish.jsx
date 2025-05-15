import { useEffect, useRef, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { IoTimeOutline } from "react-icons/io5";

function timeAgo(timestamp) {
  return formatDistanceToNow(timestamp.toDate(), {
    addSuffix: true,
    locale: id,
  });
}

function ListWishes({ wishes }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const sampleRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const sortedWishes = [...wishes].sort(
    (a, b) => b.date.toDate() - a.date.toDate()
  );

  // Hitung jumlah item per slide berdasarkan tinggi tetap
  useEffect(() => {
    const itemHeight = 88 + 12; // item height (88px) + gap (12px, dari gap-3)
    const maxHeight = 450;
    const calculated = Math.floor(maxHeight / itemHeight);
    setItemsPerSlide(Math.max(1, Math.min(calculated, 5)));
  }, [wishes]);

  const groupedWishes = [];
  for (let i = 0; i < sortedWishes.length; i += itemsPerSlide) {
    groupedWishes.push(sortedWishes.slice(i, i + itemsPerSlide));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupedWishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [groupedWishes.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentSlide * scrollContainerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div data-aos="zoom-in" className="w-96 h-[800px] mx-auto relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-snap-x mandatory transition-transform duration-500 ease-in-out hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {groupedWishes.map((group, index) => (
          <div
            key={index}
            className="w-96 flex-shrink-0 px-8 py-6 scroll-snap-align-start"
          >
            <div className="grid grid-cols-1 gap-3">
              {group.map((wishItem, idx) => (
                <div
                  key={wishItem.id}
                  className="flex items-center space-x-4 min-h-[88px] overflow-hidden"
                  ref={index === 0 && idx === 0 ? sampleRef : null}
                >
                  {/* Inisial dan garis */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center leading-0 bg-primary rounded-full w-6 h-6 text-accent font-semibold text-xs uppercase">
                      {(() => {
                        if (!wishItem.name) return "NA";
                        const words = wishItem.name.trim().split(/\s+/);
                        return words.length >= 2
                          ? (words[0][0] + words[1][0]).toUpperCase()
                          : words[0][0].toUpperCase();
                      })()}
                    </div>
                    <div className="w-px h-16 bg-accent mt-2"></div>
                  </div>

                  {/* Konten */}
                  <div className="flex flex-col text-left gap-1 max-w-[215px]">
                    <h3 className="text-xs break-words">
                      <span className="capitalize font-semibold bg-primary px-1 p-0.5 rounded-sm">
                        {wishItem.name.length > 15
                          ? wishItem.name.slice(0, 15) + "..."
                          : wishItem.name}
                      </span>
                      <span className="ml-1 text-[10px] text-gray-400">di</span>{" "}
                      <span className="capitalize text-[10px] text-gray-400">
                        {wishItem.address.length > 10
                          ? wishItem.address.slice(0, 10) + "..."
                          : wishItem.address}
                      </span>
                    </h3>
                    <p className="font-akaya-kanadaka text-[10px] break-words line-clamp-5">
                      "{wishItem.wish}"
                    </p>
                    <p className="text-[8px] text-gray-300 italic flex items-center gap-1">
                      <IoTimeOutline /> {timeAgo(wishItem.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute -left-6 right-0 items-center w-full flex justify-center space-x-2">
        {groupedWishes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-gray-200" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ListWishes;
