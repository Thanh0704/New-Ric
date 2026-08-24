import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote, Building2, CheckCircle2 } from 'lucide-react'

// ==========================================
// MOCK DATA CỰC XỊN (CHUYÊN B2B)
// ==========================================
const clientLogos = [
  { name: 'Khách hàng 1', logo: '/images/logo.png' },
  { name: 'Khách hàng 2', logo: '/images/logo.png' },
  { name: 'Khách hàng 3', logo: '/images/logo.png' },
  { name: 'Khách hàng 4', logo: '/images/logo.png' },
  { name: 'Khách hàng 5', logo: '/images/logo.png' },
  { name: 'Khách hàng 6', logo: '/images/logo.png' },
]

const caseStudies = [
  {
    id: 'case-1',
    company: 'Tập đoàn Sản xuất & Phân phối VinaPlast',
    industry: 'Sản xuất & Phân phối',
    solution: 'Hệ thống RIC ERP',
    image: '/images/solutions/ric-erp.jpg',
    challenge:
      'Dữ liệu bị phân mảnh giữa 3 nhà máy và 5 kho hàng. Bộ phận Kế toán mất đến 10 ngày để chốt sổ cuối tháng. Ban giám đốc không có báo cáo Real-time để ra quyết định.',
    result:
      'Số hóa 100% quy trình trình ký duyệt mua hàng. Đồng bộ dữ liệu kho bãi và kế toán theo thời gian thực. Giám đốc có thể xem báo cáo dòng tiền ngay trên điện thoại.',
    metrics: [
      { label: 'Thời gian chốt sổ', value: 'Chỉ 1 ngày' },
      { label: 'Độ chính xác tồn kho', value: '99.9%' },
    ],
  },
  {
    id: 'case-2',
    company: 'Chuỗi Bán lẻ Thời trang T-Style',
    industry: 'Bán lẻ & Thương mại điện tử',
    solution: 'ZHUB + RIC CRM',
    image: '/images/solutions/ecom.jpg',
    challenge:
      'Fanpage và Zalo OA nhận hơn 5,000 tin nhắn mỗi ngày nhưng Sales thường xuyên bỏ sót khách. Không đo lường được tỷ lệ chuyển đổi, tỷ lệ khách hàng cũ quay lại mua rất thấp.',
    result:
      'Gom toàn bộ tin nhắn về một màn hình, tự động chia chat cho Sale. Áp dụng CRM để gửi kịch bản chăm sóc (Zalo ZNS) tự động vào ngày sinh nhật và sau khi mua hàng.',
    metrics: [
      { label: 'Không bỏ sót tin nhắn', value: '100%' },
      { label: 'Khách hàng quay lại (Retention)', value: '+45%' },
    ],
  },
  {
    id: 'case-3',
    company: 'Công ty Cổ phần Công nghệ AlphaTech',
    industry: 'Dịch vụ Công nghệ',
    solution: 'Hệ thống RIC HRM',
    image: '/images/solutions/ric-message.jpg',
    challenge:
      'Quy mô tăng nhanh lên 500 nhân sự khiến việc chấm công bằng vân tay quá tải và hay lỗi. Phòng HR mất 5 ngày mỗi tháng chỉ để tính lương thủ công trên Excel, dễ xảy ra sai sót.',
    result:
      'Chuyển sang chấm công qua Mobile App bằng GPS/FaceID. Tự động hóa hoàn toàn luồng tính lương, bảo hiểm và thuế. Nhân viên tự tra cứu phiếu lương minh bạch qua App.',
    metrics: [
      { label: 'Tiết kiệm thời gian làm lương', value: '-90%' },
      { label: 'Hài lòng về tính minh bạch', value: '100%' },
    ],
  },
]

const testimonials = [
  {
    quote:
      'RIC ERP thực sự là một cuộc cách mạng cho bộ máy vận hành của chúng tôi. Thay vì chờ đợi báo cáo cuối tháng, giờ đây tôi có thể kiểm soát dòng tiền và hàng tồn kho bất cứ lúc nào, ở bất cứ đâu.',
    author: 'Ông Hoàng Việt Dũng',
    role: 'CEO & Founder, VinaPlast',
  },
  {
    quote:
      'Điều khiến tôi hài lòng nhất không chỉ là phần mềm dễ dùng, mà là sự nhiệt tình của đội ngũ RICVINA. Các bạn thấu hiểu nỗi đau của doanh nghiệp và tư vấn quy trình rất thực chiến.',
    author: 'Bà Lê Mai Lan',
    role: 'Giám đốc Vận hành, Chuỗi T-Style',
  },
]

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 1. HERO SECTION */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center md:px-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600">
            <Building2 className="h-4 w-4" /> Khách hàng của chúng tôi
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-black text-slate-900 md:text-5xl lg:text-6xl">
            Tự hào đồng hành cùng sự phát triển của{' '}
            <span className="text-blue-600">500+ doanh nghiệp</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500">
            Khám phá cách các doanh nghiệp hàng đầu tại Việt Nam ứng dụng giải pháp của RICVINA để
            bứt phá doanh thu và tối ưu hóa vận hành.
          </p>
        </div>
      </section>

      {/* 2. LOGO CLOUD */}
      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container mx-auto px-6 md:px-20">
          <p className="mb-10 text-center text-sm font-bold tracking-widest text-slate-400 uppercase">
            Được tin dùng bởi các thương hiệu
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale transition-all md:gap-16">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="relative h-12 w-32 transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image src={client.logo} alt={client.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              Câu chuyện thành công
            </h2>
            <p className="text-lg text-slate-500">
              Những bài toán thực tế đã được RICVINA giải quyết triệt để.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                className={`flex flex-col gap-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 lg:flex-row lg:items-center lg:p-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Cột Ảnh */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
                  <Image src={study.image} alt={study.company} fill className="object-cover" />
                  <div className="absolute top-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-sm font-bold text-slate-900 backdrop-blur-sm">
                    {study.industry}
                  </div>
                </div>

                {/* Cột Nội dung */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <div className="mb-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                    <CheckCircle2 className="h-5 w-5" /> Sử dụng: {study.solution}
                  </div>
                  <h3 className="mb-6 text-3xl font-black text-slate-900">{study.company}</h3>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900">Bài toán đặt ra:</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Kết quả:</h4>
                      <p className="text-slate-600">{study.result}</p>
                    </div>
                  </div>

                  <div className="mb-8 flex gap-6 rounded-2xl bg-slate-50 p-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-2xl font-black text-blue-600">{metric.value}</div>
                        <div className="text-sm font-medium text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Tôi cũng muốn kết quả tương tự <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black md:text-4xl">Họ nói gì về chúng tôi?</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="relative rounded-[2rem] bg-slate-800 p-10">
                <Quote className="absolute top-10 right-10 h-16 w-16 text-slate-700 opacity-50" />
                <p className="relative z-10 mb-8 text-xl leading-relaxed font-medium text-slate-300">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                    {testi.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testi.author}</h4>
                    <p className="text-sm text-slate-400">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">
            Trở thành câu chuyện thành công tiếp theo?
          </h2>
          <p className="mb-10 text-lg text-slate-500">
            Dù doanh nghiệp của bạn đang ở giai đoạn nào, đội ngũ chuyên gia của chúng tôi đều có
            giải pháp phù hợp.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Nhận tư vấn giải pháp miễn phí
          </Link>
        </div>
      </section>
    </main>
  )
}
