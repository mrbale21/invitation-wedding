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
  if (!wishes || wishes.length === 0) {
    return <p className="text-center">Belum ada data wish.</p>;
  }

  const sortedWishes = [...wishes].sort(
    (a, b) => b.date.toDate() - a.date.toDate()
  );

  return (
    <div className="w-96 mx-auto flex flex-col relative">
      {/* Area scrollable dengan tinggi maksimal dan scrollbar disembunyikan */}
      <div className="max-h-[500px] overflow-y-auto hide-scrollbar pl-2">
        <div className="grid grid-cols-1 gap-3">
          {sortedWishes.map((wishItem) => (
            <div
              key={wishItem.id}
              className="flex items-center space-x-4 min-h-[88px] overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-primary rounded-full w-6 h-6 text-accent font-semibold text-xs uppercase">
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
              <div className="flex flex-col text-left gap-1 max-w-[230px]">
                <h3 className="text-xs break-words">
                  <span className="capitalize font-semibold bg-primary px-1 p-0.5 rounded-sm">
                    {wishItem.name.length > 15
                      ? wishItem.name.slice(0, 15) + "..."
                      : wishItem.name}
                  </span>
                  <span className="ml-1 text-[10px] text-gray-400">di</span>{" "}
                  <span className="capitalize text-[10px] text-gray-400">
                    {wishItem.address.length > 15
                      ? wishItem.address.slice(0, 15) + "..."
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
    </div>
  );
}

export default ListWishes;
