import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Trash2 } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PosterCard } from "@/components/PosterCard";
import { history, myMovies } from "@/lib/movies";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/my-list")({
  head: () => ({
    meta: [
      { title: "My List — Lịch sử & phim đã lưu | ReelNoir" },
      {
        name: "description",
        content: "Xem lại lịch sử xem phim và danh sách phim bạn đã lưu trên ReelNoir.",
      },
      { property: "og:title", content: "My List — ReelNoir" },
      { property: "og:description", content: "Lịch sử xem và phim đã lưu của bạn." },
    ],
  }),
  component: MyList,
});

function MyList() {
  const [tab, setTab] = useState<"history" | "mine">("history");
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const items = tab === "history" ? history : myMovies;

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const exitSelect = () => {
    setSelectMode(false);
    setSelected([]);
  };

  return (
    <main className="mx-auto min-h-screen max-w-md pb-28">
      <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-background/95 px-4 pb-2 pt-4 backdrop-blur">
        <div className="flex min-w-0 gap-5">
          {(["history", "mine"] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                exitSelect();
              }}
              className={cn(
                "relative pb-1.5 text-sm font-semibold transition-colors",
                tab === t ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {t === "history" ? "History" : "My Movie"}
              {tab === t && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => (selectMode ? exitSelect() : setSelectMode(true))}
          aria-label="Chế độ chọn phim"
          className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
        >
          {selectMode ? (
            <span className="text-sm font-medium text-primary">Cancel</span>
          ) : (
            <CheckCircle2 className="h-5 w-5" />
          )}
        </button>
      </header>

      <div className="grid grid-cols-3 gap-3 px-4 pt-2">
        {items.map((m) => (
          <PosterCard
            key={m.id}
            movie={m}
            showStats={false}
            cornerLabel={`${m.watched}/${m.episodes}`}
            selectable={selectMode}
            selected={selected.includes(m.id)}
            onToggle={() => toggle(m.id)}
          />
        ))}
      </div>

      {selectMode ? (
        <div className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-md gap-3 border-t border-border bg-card/95 px-4 pb-4 pt-3 backdrop-blur">
          <button
            onClick={() =>
              setSelected(selected.length === items.length ? [] : items.map((m) => m.id))
            }
            className="flex-1 rounded-full border border-border py-2.5 text-sm font-semibold"
          >
            Select all
          </button>
          <button
            onClick={exitSelect}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Trash2 className="h-4 w-4" /> Delete
          </button>
        </div>
      ) : (
        <BottomNav />
      )}
    </main>
  );
}
