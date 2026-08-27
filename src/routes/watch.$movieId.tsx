import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Bookmark, ListVideo, Volume2, ChevronLeft, Lock, X } from "lucide-react";
import { byId } from "@/lib/movies";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/watch/$movieId")({
  head: () => ({
    meta: [
      { title: "Đang xem — ReelNoir" },
      {
        name: "description",
        content: "Trình phát phim ngắn ReelNoir: chọn tập, thích, lưu vào My List và điều chỉnh tốc độ.",
      },
      { property: "og:title", content: "Đang xem — ReelNoir" },
      { property: "og:description", content: "Trình phát phim ngắn với danh sách tập đầy đủ." },
    ],
  }),
  component: Watch,
});

function Watch() {
  const { movieId } = Route.useParams();
  const movie = byId(movieId);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showList, setShowList] = useState(false);
  const [current, setCurrent] = useState(3);
  const [range, setRange] = useState(0);

  const total = 60;
  const start = range === 0 ? 1 : 31;
  const eps = Array.from({ length: 30 }, (_, i) => start + i);

  return (
    <main className="relative mx-auto h-screen max-w-md overflow-hidden bg-black">
      <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />

      <header className="absolute inset-x-0 top-0 flex items-start gap-3 px-4 pt-4">
        <Link to="/" aria-label="Quay lại" className="shrink-0 text-white">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="min-w-0 flex-1 truncate text-base font-light text-white">{movie.title}</h1>
        <span className="shrink-0 text-sm font-light text-white">
          {current}/{total}
        </span>
      </header>

      <div className="absolute bottom-28 right-4 flex flex-col items-center gap-5">
        <button onClick={() => setLiked((v) => !v)} className="flex flex-col items-center gap-1">
          <Heart
            className={cn("h-7 w-7 text-white", liked && "fill-primary text-primary")}
          />
          <span className="text-[11px] text-white">{liked ? "55.46K" : "55.45K"}</span>
        </button>
        <button onClick={() => setSaved((v) => !v)} className="flex flex-col items-center gap-1">
          <Bookmark
            className={cn("h-7 w-7 text-white", saved && "fill-primary text-primary")}
          />
          <span className="text-[11px] text-white">{saved ? "301" : "300"}</span>
        </button>
        <button onClick={() => setShowList(true)} className="flex flex-col items-center gap-1">
          <ListVideo className="h-7 w-7 text-white" />
          <span className="text-[11px] text-white">Tập</span>
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-white/80">01:12</span>
          <div className="h-1 flex-1 rounded-full bg-white/25">
            <div className="h-full w-1/3 rounded-full bg-primary" />
          </div>
          <span className="text-[11px] text-white/80">03:40</span>
          <button className="rounded-full border border-white/40 px-2 py-0.5 text-[11px] text-white">
            1x
          </button>
          <Volume2 className="h-4 w-4 text-white" />
        </div>
      </div>

      {showList && (
        <div className="absolute inset-0 z-40" onClick={() => setShowList(false)}>
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 rounded-t-2xl bg-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-20 w-14 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-sm font-semibold">{movie.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">Total {total} episodes</p>
              </div>
              <button onClick={() => setShowList(false)} aria-label="Đóng" className="shrink-0">
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              {["1-30", "31-60"].map((label, i) => (
                <button
                  key={label}
                  onClick={() => setRange(i)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium",
                    range === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-5 gap-2 overflow-y-auto pb-4">
              {eps.map((n) => {
                const locked = n >= 15 && n <= 30;
                return (
                  <button
                    key={n}
                    onClick={() => !locked && setCurrent(n)}
                    className={cn(
                      "relative grid h-10 place-items-center rounded-lg bg-secondary text-sm",
                      n === current && "bg-primary font-semibold text-primary-foreground",
                      locked && "text-muted-foreground",
                    )}
                  >
                    {locked ? <Lock className="h-3.5 w-3.5" /> : n}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
