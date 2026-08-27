import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, MessageSquareHeart, Headphones, ShieldCheck } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Tài khoản của bạn | ReelNoir" },
      {
        name: "description",
        content: "Quản lý tài khoản ReelNoir: gửi phản hồi, liên hệ hỗ trợ và xem chính sách bảo mật.",
      },
      { property: "og:title", content: "Profile — ReelNoir" },
      { property: "og:description", content: "Tài khoản, hỗ trợ và chính sách bảo mật." },
    ],
  }),
  component: Profile,
});

const rows = [
  { icon: MessageSquareHeart, label: "Feedback", to: "/feedback" },
  { icon: Headphones, label: "Contact us", to: "/contact" },
  { icon: ShieldCheck, label: "Privacy Policy", to: "/privacy-policy" },
] as const;

function Profile() {
  return (
    <main className="mx-auto min-h-screen max-w-md px-4 pb-24 pt-10">
      <div className="flex flex-col items-center">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-lg">
          TN
        </div>
        <h1 className="mt-3 text-lg font-semibold text-foreground">Tommy Nguyen</h1>
        <p className="text-xs text-muted-foreground">ID: 8823 4471</p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {rows.map(({ icon: Icon, label, to }, i) => (
          <Link
            key={label}
            to={to}
            className={`flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-accent/40 active:bg-accent ${
              i > 0 ? "border-t border-border" : ""
            }`}
          >
            <Icon className="h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{label}</span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
