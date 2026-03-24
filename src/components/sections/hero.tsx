import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden text-center md:min-h-[680px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(19, 25, 31, 0.7), rgba(19, 25, 31, 0.5)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCP-aUeaY0UPgqSfiEy9lFRLrhJrHLKf_DY9JG36FtICypHhvUXScQOJAGyyQq7aS5CDE6FiToUBlVLr9oQ-eqNqonSDyP6rN67QyiWWbiAuxtQ_EnoaIw6To7cxFJcbuRp2c9w1RN7UHLV5qww7S9-Jru2inXPieW7G1ivaw-PKpGq8JJYXG3TZY9lcxDazDz9-oiRWgm0Jfu1pwx8WclNyBSb74JufkKJur9NX8Bgj8ipqG1l7fehffhkn8Z-IrvAFP_R_32odmA)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="max-w-3xl px-6">
        <h1 className="mb-6 text-4xl leading-tight font-black text-white md:text-6xl">
          Đồng hành chuyển đổi số
        </h1>
        <p className="mb-10 text-lg font-medium text-white/90 md:text-xl">
          Giải pháp công nghệ hàng đầu cho doanh nghiệp hiện đại trong kỷ nguyên 4.0
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="bg-primary w-full rounded-xl px-10 py-4 text-center text-lg font-bold text-white transition-transform hover:scale-105 sm:w-auto sm:min-w-[200px]"
          >
            Khám phá ngay
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-center text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:min-w-[200px]"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </section>
  )
}
