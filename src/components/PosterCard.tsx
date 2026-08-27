import { Link } from "@tanstack/react-router";
import { Eye, Heart, Check } from "lucide-react";
import type { ReactNode } from "react";
import type { Movie } from "@/lib/movies";
import { cn } from "@/lib/utils";

type Props = {
  movie: Movie;
  tag?: ReactNode;
  className?: string;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: () => void;
  cornerLabel?: string;
  showStats?: boolean;
};

export function PosterCard({
  movie,
  tag,
  className,
  selectable,
  selected,
  onToggle,
  cornerLabel,
  showStats = true,
}: Props) {
  const inner = (
    <>
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

        {tag && !selectable && (
          <div className="absolute right-1.5 top-1.5 flex items-center gap-1 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
            {tag}
          </div>
        )}

        {selectable && (
          <span
            className={cn(
              "absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full border-2 border-white/80",
              selected && "border-primary bg-primary",
            )}
          >
            {selected && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
          </span>
        )}

        {showStats && (
          <div className="absolute inset-x-1.5 bottom-1.5 flex items-center justify-between text-[10px] font-medium text-white/90">
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-primary" /> {movie.likes}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" /> {movie.views}
            </span>
          </div>
        )}

        {cornerLabel && (
          <span className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white">
            {cornerLabel}
          </span>
        )}
      </div>
      <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-foreground/90">{movie.title}</p>
    </>
  );

  if (selectable) {
    return (
      <button type="button" onClick={onToggle} className={cn("block w-full text-left", className)}>
        {inner}
      </button>
    );
  }

  return (
    <Link to="/watch/$movieId" params={{ movieId: movie.id }} className={cn("block", className)}>
      {inner}
    </Link>
  );
}
