import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Calendar,
  User,
  ArrowLeft,
  Facebook,
  Linkedin,
  Link2,
  BookOpen,
} from 'lucide-react'

// MOCK DATA ĐẦY ĐỦ CỦA 6 BÀI VIẾT
const articleData = {
  'tai-sao-nhan-vien-dung-excel': {
    title: 'Vì sao có CRM nhưng nhân viên vẫn dùng Excel?',
    category: 'Góc nhìn Quản trị',
    date: '22/08/2026',
    author: 'Chuyên gia RIC',
    readTime: '5 phút đọc',
    image: '/images/solutions/ric-message.jpg',
    content: `
      <p class="lead">Trong quá trình tư vấn và triển khai chuyển đổi số, chúng tôi thường xuyên bắt gặp một kịch bản quen thuộc: Giám đốc đầu tư hàng trăm triệu cho một hệ thống CRM hoành tráng, nhưng sau 3 tháng, nhân viên Sales vẫn âm thầm quản lý khách hàng trên Google Sheets hoặc Excel.</p>
      
      <h3>Nguyên nhân đứt gãy nằm ở đâu?</h3>
      <p>Nhiều nhà quản lý nhầm tưởng rằng cứ ép dùng là xong. Tuy nhiên, sự chống đối ngầm thường xuất phát từ 3 nguyên nhân cốt lõi:</p>
      <ul>
        <li><strong>Thao tác phức tạp:</strong> Hệ thống yêu cầu điền quá nhiều trường thông tin không cần thiết, làm mất thời gian của nhân viên kinh doanh.</li>
        <li><strong>Không giải quyết nỗi đau của Sales:</strong> Phần mềm phục vụ mục đích "kiểm soát" của người quản lý thay vì giúp Sales chốt đơn nhanh hơn.</li>
        <li><strong>Thiếu sự đồng bộ:</strong> Zalo, Facebook, Tổng đài nằm ở các nền tảng khác nhau, bắt buộc Sales phải copy-paste dữ liệu thủ công từ nơi này sang nơi khác.</li>
      </ul>

      <h3>Giải pháp để nhân viên "yêu" hệ thống mới</h3>
      <p>Để giải quyết bài toán này, RICVINA đề xuất phương pháp tiếp cận từ dưới lên (Bottom-up). Hãy biến CRM thành trợ lý đắc lực của Sales thay vì một công cụ giám sát.</p>
      <p>Hệ sinh thái RIC được thiết kế để tự động hóa việc thu thập dữ liệu. Khi có tin nhắn từ Zalo, khách hàng tự động nhảy vào CRM. Khi có cuộc gọi, file ghi âm tự động đính kèm vào lịch sử. Khi nhân viên thấy CRM thực sự giúp họ tiết kiệm 2 tiếng mỗi ngày và tăng thu nhập, họ sẽ tự động từ bỏ Excel.</p>
    `,
  },
  '3-giai-doan-truong-thanh': {
    title: '3 giai đoạn trưởng thành trong chuyển đổi số của doanh nghiệp',
    category: 'Cẩm nang CĐS',
    date: '15/08/2026',
    author: 'Ban cố vấn RIC',
    readTime: '7 phút đọc',
    image: '/images/solutions/ric-erp.jpg',
    content: `
      <p class="lead">Chuyển đổi số không phải là một đích đến, mà là một hành trình. Rất nhiều doanh nghiệp thất bại vì nôn nóng nhảy cóc sang giai đoạn cuối cùng khi nền móng chưa vững chắc.</p>
      
      <h3>Giai đoạn 1: Số hóa thông tin (Digitization)</h3>
      <p>Đây là bước cơ bản nhất. Chuyển từ giấy tờ, sổ sách sang định dạng số. Thay vì lưu hồ sơ trong tủ tài liệu, bạn lưu trên Google Drive. Thay vì viết phiếu thu tay, bạn gõ vào Excel.</p>
      
      <h3>Giai đoạn 2: Số hóa quy trình (Digitalization)</h3>
      <p>Khi dữ liệu đã ở dạng số, bạn bắt đầu dùng phần mềm để tự động hóa các luồng công việc. Ví dụ: Phần mềm tự động gửi email chúc mừng sinh nhật khách hàng, hoặc tự động tính lương cuối tháng dựa trên dữ liệu chấm công vân tay.</p>
      
      <h3>Giai đoạn 3: Chuyển đổi số toàn diện (Digital Transformation)</h3>
      <p>Đây là cảnh giới cao nhất. Dữ liệu từ mọi phòng ban (Sales, Marketing, Kế toán, Kho) được liên thông thành một mạch duy nhất. Lãnh đạo có thể nhìn thấy bức tranh toàn cảnh (Real-time Dashboard) để ra quyết định chiến lược tức thì.</p>
      <p>Hệ thống RIC ERP được sinh ra để giúp doanh nghiệp tiến tới giai đoạn 3 một cách mượt mà nhất với kiến trúc module mở rộng linh hoạt.</p>
    `,
  },
  'khi-nao-can-crm-erp': {
    title: 'Khi nào doanh nghiệp cần CRM? Có cần ERP không?',
    category: 'Tư vấn Giải pháp',
    date: '10/08/2026',
    author: 'Chuyên gia RIC',
    readTime: '6 phút đọc',
    image: '/images/solutions/ricio.jpg',
    content: `
      <p class="lead">Nhiều doanh nghiệp phân vân giữa việc mua CRM hay ERP, hoặc có cần thiết phải mua cả hai không. Câu trả lời phụ thuộc vào bài toán hiện tại của doanh nghiệp bạn.</p>
      <h3>5 dấu hiệu bạn cần CRM ngay lập tức</h3>
      <ul>
        <li>Sale nghỉ việc mang theo luôn danh sách khách hàng.</li>
        <li>Tỷ lệ chốt sale thấp vì quên lịch chăm sóc khách.</li>
        <li>Chi phí Marketing cao nhưng không đo lường được nguồn khách đến từ đâu.</li>
      </ul>
      <h3>Vậy khi nào cần tiến lên ERP?</h3>
      <p>Khi bài toán của bạn không chỉ dừng ở việc "Bán hàng" mà liên quan đến việc "Tồn kho, Mua hàng, và Kế toán". ERP sẽ giúp liên thông toàn bộ luồng tiền và luồng hàng trong công ty.</p>
    `,
  },
  'xay-dung-van-hoa-du-lieu': {
    title: 'Xây dựng văn hóa dữ liệu (Data-driven) từ con số 0',
    category: 'Góc nhìn Quản trị',
    date: '05/08/2026',
    author: 'Data Analyst RIC',
    readTime: '8 phút đọc',
    image: '/images/solutions/ecom.jpg',
    content: `
      <p class="lead">Bạn đã bao giờ ra quyết định kinh doanh dựa trên cảm giác "tôi thấy dạo này khách hàng thích cái này"? Đã đến lúc thay đổi.</p>
      <h3>Văn hóa dữ liệu là gì?</h3>
      <p>Là khi mọi quyết định từ cấp C-Level đến nhân viên thực thi đều phải có số liệu chứng minh. Không tranh cãi bằng cảm xúc, hãy nói chuyện bằng Dashboard.</p>
      <p>RIC Insights trang bị sẵn hệ thống báo cáo BI (Business Intelligence) trực quan, giúp doanh nghiệp thiết lập văn hóa này dễ dàng hơn bao giờ hết.</p>
    `,
  },
  'tu-dong-hoa-quy-trinh': {
    title: 'Tự động hóa quy trình (BPA): Bắt đầu từ đâu?',
    category: 'Cẩm nang CĐS',
    date: '01/08/2026',
    author: 'Kỹ sư tự động hóa',
    readTime: '4 phút đọc',
    image: '/images/solutions/ric-affiliate.jpg',
    content: `
      <p class="lead">Tự động hóa không phải là thay thế con người bằng robot, mà là giải phóng con người khỏi những công việc nhàm chán lặp đi lặp lại.</p>
      <h3>3 bước bắt đầu BPA</h3>
      <ul>
        <li><strong>Bước 1:</strong> Chuẩn hóa quy trình trên giấy. (Nếu quy trình đang rối, tự động hóa cái rối đó sẽ tạo ra một mớ hỗn độn nhanh hơn).</li>
        <li><strong>Bước 2:</strong> Áp dụng số hóa các biểu mẫu.</li>
        <li><strong>Bước 3:</strong> Dùng hệ thống RIC WorkFlow để thiết lập quy tắc tự động (Ví dụ: Đơn xin nghỉ phép tự chuyển đến sếp, duyệt xong tự báo về cho HR).</li>
      </ul>
    `,
  },
  'omnichannel-ban-hang-da-kenh': {
    title: 'Omnichannel: Bán hàng đa kênh không chỉ là có mặt ở mọi nơi',
    category: 'Tư vấn Giải pháp',
    date: '28/07/2026',
    author: 'Chuyên gia E-com',
    readTime: '6 phút đọc',
    image: '/images/solutions/zhub.jpg',
    content: `
      <p class="lead">Rất nhiều người nhầm lẫn Multi-channel (bán trên nhiều kênh) với Omni-channel (đa kênh hợp nhất). Sự khác biệt nằm ở chữ "Hợp nhất".</p>
      <h3>Trải nghiệm khách hàng liền mạch</h3>
      <p>Omni-channel thực sự là khi khách hàng xem sản phẩm trên Website, cho vào giỏ hàng trên App, và ra cửa hàng vật lý để lấy đồ mà nhân viên vẫn nhận diện được lịch sử tương tác đó.</p>
      <p>Giải pháp E-commerce của RIC cung cấp một bộ não trung tâm để quản lý mọi điểm chạm này một cách mượt mà nhất.</p>
    `,
  },
}

// CẬP NHẬT CHÍNH Ở ĐÂY: Thêm async và Promise cho params
export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Đợi Next.js giải nén params ra
  const resolvedParams = await params

  const article = articleData[resolvedParams.slug as keyof typeof articleData]

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white pt-20 selection:bg-blue-100 selection:text-blue-900">
      <div className="border-b border-slate-100 bg-slate-50/50 py-4">
        <div className="container mx-auto px-6 text-sm font-medium text-slate-500 md:px-20">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" />
            <Link href="/insights" className="transition-colors hover:text-blue-600">
              RIC Insights
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0" />
            <span className="truncate font-semibold text-slate-900">{article.title}</span>
          </div>
        </div>
      </div>

      <article className="pt-12 pb-24 lg:pt-16">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/insights"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" /> Quay lại danh sách
            </Link>

            <header className="mb-12">
              <span className="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600">
                {article.category}
              </span>
              <h1 className="mb-8 text-3xl leading-tight font-black text-slate-900 md:text-5xl">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 border-y border-slate-100 py-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" /> {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> {article.readTime}
                </div>
              </div>
            </header>
          </div>

          <div className="mx-auto mb-16 max-w-5xl">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-200">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex gap-4 border-b border-slate-100 pb-6 lg:sticky lg:top-32 lg:w-16 lg:flex-col lg:border-r lg:border-b-0 lg:pr-6 lg:pb-0">
              <span className="hidden text-xs font-bold tracking-widest text-slate-400 uppercase lg:block lg:-rotate-90 lg:pb-8">
                Share
              </span>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#1877F2] hover:text-white">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#0A66C2] hover:text-white">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-900 hover:text-white">
                <Link2 className="h-4 w-4" />
              </button>
            </div>

            <div className="w-full lg:flex-1">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .article-content { font-size: 1.125rem; line-height: 1.8; color: #475569; }
                .article-content .lead { font-size: 1.25rem; font-weight: 500; color: #0f172a; margin-bottom: 2rem; }
                .article-content h3 { font-size: 1.75rem; font-weight: 900; color: #0f172a; margin-top: 3rem; margin-bottom: 1.25rem; letter-spacing: -0.025em; }
                .article-content p { margin-bottom: 1.5rem; }
                .article-content ul { margin-bottom: 2rem; padding-left: 1.5rem; list-style-type: disc; }
                .article-content li { margin-bottom: 0.75rem; padding-left: 0.5rem; }
                .article-content li::marker { color: #2563eb; }
              `,
                }}
              />
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="mt-16 flex flex-wrap gap-2 border-t border-slate-100 pt-8">
                {['#ChuyenDoiSo', '#QuanTriDoanhNghiep', '#RICVINA'].map((tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
