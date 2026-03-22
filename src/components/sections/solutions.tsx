import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { Container } from '@/components/shared/container'
import {
  ArrowRight,
  Globe,
  Mail,
  Megaphone,
  MessageCircle,
  Search,
  Smartphone,
  Store,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const solutionIcons = [
  { icon: MessageCircle, label: 'ZBS' },
  { icon: Mail, label: 'SMS' },
  { icon: Megaphone, label: 'Zalo Mini App' },
  { icon: Store, label: 'Zalo OA' },
  { icon: Globe, label: 'Web' },
  { icon: Smartphone, label: 'App' },
]

function SolutionCard({
  category,
  title,
  description,
  image,
  reversed = false,
}: {
  category: string
  title: string
  description: React.ReactNode
  image: string
  reversed?: boolean
}) {
  return (
    <AnimateOnScroll>
      <div
        className={`flex flex-col items-center gap-12 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div className="w-full space-y-5 md:w-1/2">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            {category}
          </span>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </div>
          <Link
            href="/products"
            className="text-primary flex items-center gap-2 font-bold transition-all hover:gap-3"
          >
            Tìm hiểu chi tiết <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export function Solutions() {
  return (
    <section className="py-10">
      <Container>
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold">Giải pháp của chúng tôi</h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
        </div>

        {/* Icon Grid */}
        <div className="mx-auto mb-8 grid max-w-5xl grid-cols-3 gap-4 md:grid-cols-6">
          {solutionIcons.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group border-primary/5 hover:border-primary/30 flex cursor-pointer flex-col items-center rounded-xl border bg-white p-4 transition-all hover:shadow-md dark:bg-slate-800"
            >
              <Icon className="text-primary mb-2 h-6 w-6" />
              <span className="text-sm font-bold">{label}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-16 max-w-2xl">
          <div className="group relative">
            <Search className="group-focus-within:text-primary absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors" />
            <input
              className="border-primary/10 focus:border-primary w-full rounded-xl border bg-white py-3 pr-4 pl-12 text-sm shadow-sm transition-all outline-none focus:ring-0 dark:bg-slate-800"
              placeholder="Tìm kiếm giải pháp chuyển đổi số..."
              type="text"
              readOnly
            />
          </div>
        </div>

        {/* Z-pattern solution cards */}
        <div className="space-y-20">
          <SolutionCard
            category="ZBS & SMS"
            title="Giải pháp Chăm sóc khách hàng đa kênh toàn diện"
            image="/images/solutions/zbs-customer-care.png"
            description={
              <div className="space-y-2">
                <p>
                  <strong>Tự động hóa quy trình CSKH:</strong> Giảm tải cho nhân sự telesale, gửi
                  tin xác nhận đơn hàng, mã OTP, chúc mừng sinh nhật tự động theo cấu hình.
                </p>
                <p>
                  <strong>Gia tăng uy tín:</strong> Tin nhắn có tên thương hiệu giúp khách hàng yên
                  tâm, tránh bị đánh dấu là spam.
                </p>
                <p>
                  <strong>Tăng tỷ lệ chuyển đổi:</strong> Các nút bấm (CTA) trên tin nhắn ZBS thúc
                  đẩy khách hàng mua lại hoặc truy cập website ngay lập tức.
                </p>
              </div>
            }
          />
          <SolutionCard
            category="Phát triển Phần mềm"
            title="Xây dựng Hệ sinh thái App & Web Custom"
            image="/images/solutions/zalo-mini-app.png"
            reversed
            description="Chúng tôi cung cấp dịch vụ thiết kế và phát triển ứng dụng di động, trang web doanh nghiệp với hiệu năng cao, bảo mật tuyệt đối và giao diện thân thiện."
          />
          <SolutionCard
            category="ZALO MINI APP"
            title="Zalo Mini App (ZMA)"
            image="/images/solutions/zalo-mini-app.png"
            description={
              <>
                Xây dựng các ứng dụng nhỏ trên hệ sinh thái Zalo, dễ dàng tiếp cận tệp người dùng
                lên đến <strong>76,5 triệu user</strong>. Tích hợp các tính năng bán hàng, đặt lịch,
                thanh toán trực tuyến để thúc đẩy doanh thu, tăng cường nhận diện thương hiệu.
              </>
            }
          />
          <SolutionCard
            category="Zalo Official Account"
            title="Quản trị & Vận hành ZOA Chuyên Nghiệp"
            image="/images/solutions/zalo-oa.png"
            reversed
            description="Xây dựng bộ nhận diện thương hiệu uy tín trên Zalo. Quản lý tương tác hai chiều, chăm sóc khách hàng tự động và triển khai các tiện ích OA đa dạng."
          />
        </div>
      </Container>
    </section>
  )
}
