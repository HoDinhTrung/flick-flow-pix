import { Link } from "@tanstack/react-router";
import { Home, Bookmark, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/my-list", label: "My List", icon: Bookmark },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-md items-center justify-around border-t border-border bg-card/95 px-2 pt-2 pb-3 backdrop-blur">
      {items.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          activeOptions={{ exact: to === "/" }}
          className="flex min-w-16 flex-col items-center gap-1 rounded-lg px-3 py-1 text-[11px] text-muted-foreground transition-colors data-[status=active]:text-primary"
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
