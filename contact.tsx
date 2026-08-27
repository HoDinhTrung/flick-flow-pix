import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, Mail, Copy, Check, Headphones, MessageCircle } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Hỗ trợ khách hàng | ReelNoir" },
      {
        name: "description",
        content: "Liên hệ với đội ngũ hỗ trợ ReelNoir qua email để được giải đáp nhanh chóng.",
      },
      { property: "og:title", content: "Contact Us — ReelNoir" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const supportEmail = "support@shortdrama.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 pb-24 pt-4">
      {/* Header */}
      <header className="relative flex items-center justify-between pb-4">
        <Link
          to="/profile"
          aria-label="Quay lại Profile"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-accent"
        >
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-base font-semibold text-foreground">Contact Us</h1>
        <div className="w-10" />
      </header>

      {/* Main Content */}
      <div className="mt-4 flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
          <Headphones className="h-8 w-8" />
        </div>

        <h2 className="mt-4 text-lg font-semibold text-foreground">Trung tâm Hỗ trợ</h2>

        {/* Đoạn text theo yêu cầu */}
        <p className="mt-3 px-2 text-sm leading-relaxed text-muted-foreground">
          Please reach out via email with handle it for you as soon as possible.
        </p>

        {/* Highlight Email Card */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/10 via-card to-card p-5 shadow-lg">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Email Hỗ Trợ 24/7</span>
          </div>

          <div className="mt-3 rounded-xl border border-border bg-background/80 p-3 text-center">
            <a
              href={"mailto:" + supportEmail}
              className="text-base font-bold text-foreground transition-colors hover:text-primary"
            >
              {supportEmail}
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary/20 py-2.5 text-xs font-semibold text-primary transition-all hover:bg-primary/30 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Đã sao chép email!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Sao chép địa chỉ email</span>
              </>
            )}
          </button>
        </div>

        {/* Extra Help Note */}
        <div className="mt-6 flex w-full items-start gap-3 rounded-xl border border-border bg-card p-4 text-left">
          <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div className="text-xs leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Thời gian phản hồi</p>
            <p className="mt-0.5">Chúng tôi thường phản hồi các yêu cầu qua email trong vòng 2 - 24 giờ làm việc.</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
