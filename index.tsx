import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Play, Gem, Flame } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { BottomNav } from "@/components/BottomNav";
import { PosterCard } from "@/components/PosterCard";
import { banners, comingSoon, trending, premium, hotList } from "@/lib/movies";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReelNoir — Xem phim ngắn mọi lúc" },
      {
        name: "description",
        content:
          "ReelNoir: kho phim ngắn drama, trending và premium — xem, lưu và theo dõi tập phim ngay trên điện thoại.",
      },
      { property: "og:title", content: "ReelNoir — Xem phim ngắn mọi lúc" },
      {
        property: "og:description",
        content: "Khám phá phim sắp chiếu, trending và premium trong một ứng dụng gọn nhẹ.",
      },
    ],
  }),
  component: Home,
});

function Banner() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    const id = setInterval(() => embla.scrollNext(), 3500);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((m) => (
            <div key={m.id} className="min-w-0 shrink-0 basis-[78%] px-1.5">
              <Link
                to="/watch/$movieId"
                params={{ movieId: m.id }}
                className="relative block h-[50vh] overflow-hidden rounded-2xl"
              >
                <img src={m.poster} alt={m.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <p className="line-clamp-1 text-sm font-semibold text-white">{m.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    <Play className="h-3.5 w-3.5 fill-current" /> Play
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-1.5">
        {banners.map((m, i) => (
          <span
            key={m.id}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === selected ? "w-4 bg-primary" : "w-1.5 bg-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function Row({
  title,
  items,
  tag,
}: {
  title: string;
  items: typeof comingSoon;
  tag?: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 px-4 text-base font-semibold">{title}</h2>
      <div className="flex snap-x gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {items.map((m) => (
          <PosterCard key={m.id} movie={m} tag={tag} className="w-[29%] shrink-0 snap-start" />
        ))}
      </div>
    </section>
  );
}

function Grid({
  title,
  items,
  tag,
}: {
  title: string;
  items: typeof premium;
  tag: React.ReactNode;
}) {
  return (
    <section className="mt-6 px-4">
      <h2 className="mb-2 text-base font-semibold">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {items.slice(0, 4).map((m) => (
          <PosterCard key={m.id} movie={m} tag={tag} />
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-md pb-24">
      <div className="sticky top-0 z-30 bg-background/95 px-4 pb-3 pt-4 backdrop-blur">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            placeholder="Tìm kiếm phim..."
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="pt-1">
        <Banner />
      </div>

      <Row title="Coming Soon" items={comingSoon} tag="Soon" />
      <Row title="Most Trending" items={trending} />
      <Grid title="Premium" items={premium} tag={<Gem className="h-3 w-3" />} />
      <Grid title="Hot List" items={hotList} tag={<Flame className="h-3 w-3" />} />

      <BottomNav />
    </main>
  );
}
