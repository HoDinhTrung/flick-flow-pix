import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, Send, CheckCircle2, MessageSquareHeart } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback — Góp ý & Phản hồi | ReelNoir" },
      {
        name: "description",
        content: "Gửi ý kiến đóng góp và phản hồi để giúp chúng tôi cải thiện trải nghiệm xem phim.",
      },
      { property: "og:title", content: "Feedback — ReelNoir" },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFeedback("");
      setEmail("");
      setSubmitted(false);
    }, 3500);
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
        <h1 className="text-base font-semibold text-foreground">Feedback</h1>
        <div className="w-10" />
      </header>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="mt-4 text-base font-semibold text-foreground">Cảm ơn bạn đã đóng góp ý kiến!</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Phản hồi của bạn đã được gửi thành công. Đội ngũ phát triển sẽ tiếp thu và hoàn thiện ứng dụng tốt hơn.
          </p>
          <Link
            to="/profile"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Quay lại Hồ sơ
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3 space-y-4">
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MessageSquareHeart className="h-3.5 w-3.5 text-primary" />
              Nội dung góp ý (Feedback)
            </label>
            {/* Trường 1: Feedback thiết kế to, hình vuông */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Hãy chia sẻ cảm nghĩ, góp ý về giao diện, tính năng hoặc lỗi bạn gặp phải khi xem phim tại đây..."
              required
              className="h-56 w-full resize-none rounded-2xl border border-border bg-card p-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-muted-foreground">
              Địa chỉ Email liên hệ
            </label>
            {/* Trường 2: Hình chữ nhật ngang dùng để điền email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn (để chúng tôi phản hồi)..."
              required
              className="h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.98] hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Gửi phản hồi
          </button>
        </form>
      )}

      <BottomNav />
    </main>
  );
}
