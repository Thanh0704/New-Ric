import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { ChatWidget } from '@/components/shared/chat-widget'
import { Footer } from '@/components/layout/footer'

import { SITE_CONFIG } from '@/lib/constants'
import './globals.css'

// 1. Cấu hình font Inter (Sử dụng fallback để chống nghẽn mạng)
const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
  // Thêm fallback để nếu tải font lỗi, web vẫn lên hình bình thường
  fallback: ['system-ui', 'arial', 'sans-serif'],
})

// 2. Cấu hình font Montserrat
const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - Công ty Công nghệ`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['công nghệ', 'phần mềm', 'giải pháp doanh nghiệp', 'RIC Vietnam'],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Bỏ hẳn thuộc tính scroll-smooth vì nó đôi khi gây lỗi tính toán tọa độ cuộn chuột (Lenis hoặc React Scroll sẽ làm tốt hơn)
    <html lang="vi" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        {/* ======================================================================
            🚀 LÍNH CANH TOÀN CỤC BẢN TỐI THƯỢNG (ABSOLUTE DRAG BLOCKER)
            Bóp chết 100% hành vi Kéo Thả (Drag) mặc định của trình duyệt 
            áp dụng cho MỌI THÀNH PHẦN (Ảnh, Link, Text, Div...)
        ====================================================================== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('dragstart', function(e) {
                e.preventDefault();
              }, { passive: false });
            `,
          }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
