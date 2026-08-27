import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck, Lock, Eye, FileText, BellRing } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Chính sách bảo mật | ReelNoir" },
      {
        name: "description",
        content: "Chính sách bảo mật thông tin và quyền riêng tư của người dùng ứng dụng ReelNoir.",
      },
      { property: "og:title", content: "Privacy Policy — ReelNoir" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
        <h1 className="text-base font-semibold text-foreground">Privacy Policy</h1>
        <div className="w-10" />
      </header>

      {/* Intro */}
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Chính Sách Bảo Mật</h2>
          <p className="text-xs text-muted-foreground">Cập nhật lần cuối: 27/08/2026</p>
        </div>
      </div>

      {/* Policy Details */}
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

      <BottomNav />
    </main>
  );
}
