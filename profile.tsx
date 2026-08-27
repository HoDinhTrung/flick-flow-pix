import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  MessageSquareHeart,
  Headphones,
  ShieldCheck,
  Send,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Eye,
  FileText,
  Lock,
  BellRing,
  MessageCircle,
} from "lucide-react";
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

type ViewType = "menu" | "feedback" | "contact" | "privacy";

function Profile() {
  const [view, setView] = useState<ViewType>("menu");

  // Feedback state
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Contact state
  const [copied, setCopied] = useState(false);
  const supportEmail = "support@shortdrama.com";

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setFeedbackSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetFeedbackForm = () => {
    setFeedback("");
    setEmail("");
    setFeedbackSubmitted(false);
    setView("menu");
  };

  return (
    <main className="mx-auto min-h-screen max-w-md px-4 pb-24 pt-4">
      {/* 1. MÀN HÌNH CHÍNH (MENU PROFILE) */}
      {view === "menu" && (
        <div className="pt-6 animate-in fade-in duration-200">
          <div className="flex flex-col items-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-lg">
              TN
            </div>
            <h1 className="mt-3 text-lg font-semibold text-foreground">Tommy Nguyen</h1>
            <p className="text-xs text-muted-foreground">ID: 8823 4471</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <button
              onClick={() => setView("feedback")}
              className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-accent/40 active:bg-accent"
            >
              <MessageSquareHeart className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">Feedback</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>

            <button
              onClick={() => setView("contact")}
              className="flex w-full items-center gap-3 border-t border-border px-4 py-4 text-left transition-colors hover:bg-accent/40 active:bg-accent"
            >
              <Headphones className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">Contact us</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>

            <button
              onClick={() => setView("privacy")}
              className="flex w-full items-center gap-3 border-t border-border px-4 py-4 text-left transition-colors hover:bg-accent/40 active:bg-accent"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">Privacy Policy</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
          </div>
        </div>
      )}

      {/* 2. MÀN HÌNH FEEDBACK */}
      {view === "feedback" && (
        <div className="animate-in fade-in duration-200">
          <header className="relative flex items-center justify-between pb-4">
            <button
              onClick={() => setView("menu")}
              aria-label="Quay lại"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-accent active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h1 className="text-base font-semibold text-foreground">Feedback</h1>
            <div className="w-10" />
          </header>

          {feedbackSubmitted ? (
            <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">Cảm ơn bạn đã đóng góp ý kiến!</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Phản hồi của bạn đã được ghi nhận và gửi đến ban quản trị để cải thiện ứng dụng.
              </p>
              <button
                onClick={resetFeedbackForm}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95"
              >
                Quay lại Hồ sơ
              </button>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="mt-2 space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <MessageSquareHeart className="h-3.5 w-3.5 text-primary" />
                  Nội dung phản hồi (Feedback)
                </label>
                {/* Trường 1: Feedback to hình vuông */}
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
        </div>
      )}

      {/* 3. MÀN HÌNH CONTACT US */}
      {view === "contact" && (
        <div className="animate-in fade-in duration-200">
          <header className="relative flex items-center justify-between pb-4">
            <button
              onClick={() => setView("menu")}
              aria-label="Quay lại"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-accent active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h1 className="text-base font-semibold text-foreground">Contact Us</h1>
            <div className="w-10" />
          </header>

          <div className="mt-4 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
              <Headphones className="h-8 w-8" />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-foreground">Trung tâm Hỗ trợ</h2>

            {/* Đoạn text theo đúng yêu cầu */}
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
                onClick={handleCopyEmail}
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
        </div>
      )}

      {/* 4. MÀN HÌNH PRIVACY POLICY */}
      {view === "privacy" && (
        <div className="animate-in fade-in duration-200">
          <header className="relative flex items-center justify-between pb-4">
            <button
              onClick={() => setView("menu")}
              aria-label="Quay lại"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-accent active:scale-95"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h1 className="text-base font-semibold text-foreground">Privacy Policy</h1>
            <div className="w-10" />
          </header>

          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Chính Sách Bảo Mật</h2>
              <p className="text-xs text-muted-foreground">Cập nhật lần cuối: 27/08/2026</p>
            </div>
          </div>

          <div className="mt-4 space-y-4 text-xs leading-relaxed text-muted-foreground">
            <section className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Eye className="h-4 w-4 text-primary" />
                <h3>1. Thu thập thông tin</h3>
              </div>
              <p>
                Chúng tôi chỉ thu thập các thông tin cần thiết nhằm cung cấp và nâng cao trải nghiệm xem phim của bạn:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-1 text-[11px]">
                <li>Thông tin tài khoản: ID người dùng, tên hiển thị và email liên hệ khi gửi hỗ trợ.</li>
                <li>Dữ liệu sử dụng: Lịch sử tập phim đã xem, tiến trình phát và danh sách phim đã lưu (My List).</li>
                <li>Thông tin thiết bị: Phiên bản hệ điều hành, ngôn ngữ ứng dụng và độ phân giải màn hình.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <FileText className="h-4 w-4 text-primary" />
                <h3>2. Mục đích sử dụng dữ liệu</h3>
              </div>
              <p>
                Dữ liệu thu thập được phục vụ cho các mục đích:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-1 text-[11px]">
                <li>Cá nhân hóa và gợi ý các tập phim ngắn (Drama) phù hợp với gu thưởng thức của bạn.</li>
                <li>Đồng bộ hóa lịch sử xem để bạn có thể xem tiếp mạch phim mượt mà.</li>
                <li>Tiếp nhận góp ý, phản hồi (Feedback) và xử lý khiếu nại kỹ thuật.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Lock className="h-4 w-4 text-primary" />
                <h3>3. Bảo mật & Lưu trữ</h3>
              </div>
              <p>
                Chúng tôi cam kết áp dụng các giao thức mã hóa tiêu chuẩn và quy trình kiểm soát truy cập nghiêm ngặt, bảo vệ tuyệt đối dữ liệu người dùng khỏi các hành vi truy cập trái phép.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <BellRing className="h-4 w-4 text-primary" />
                <h3>4. Quyền của bạn & Liên hệ</h3>
              </div>
              <p>
                Bạn có quyền yêu cầu tra cứu, điều chỉnh hoặc xóa bỏ dữ liệu cá nhân của mình bất kỳ lúc nào bằng cách gửi email về:
              </p>
              <div className="mt-2 rounded-lg bg-background p-2.5 text-center text-xs font-medium text-foreground">
                support@shortdrama.com
              </div>
            </section>
          </div>
        </div>
      )}

      <BottomNav />
    </main>
  );
}
