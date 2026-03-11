'use client'

import { useState } from 'react'
import { Search, Layers, ShieldCheck, Headphones } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

const TABS = [
  { label: 'Về dịch vụ', icon: Layers },
  { label: 'Kỹ thuật & Bảo mật', icon: ShieldCheck },
  { label: 'Hỗ trợ khách hàng', icon: Headphones },
]

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  'Về dịch vụ': [
    {
      question: 'RIC Việt Nam cung cấp những giải pháp Marketing nào?',
      answer:
        'Chúng tôi cung cấp giải pháp Marketing tổng thể bao gồm Digital Marketing, tối ưu hóa công cụ tìm kiếm (SEO), chạy quảng cáo đa kênh (Ads), và đặc biệt là tích hợp Marketing Automation vào quy trình kinh doanh của doanh nghiệp để tối ưu hiệu suất chuyển đổi.',
    },
    {
      question: 'Dịch vụ phần mềm của RIC có thể tùy chỉnh theo yêu cầu không?',
      answer:
        'Có, tất cả các sản phẩm ERP và CRM của chúng tôi đều được thiết kế với kiến trúc module linh hoạt. Đội ngũ kỹ thuật của RIC sẽ khảo sát nhu cầu thực tế của doanh nghiệp để tùy chỉnh hoặc phát triển thêm các tính năng đặc thù, đảm bảo phần mềm giải quyết đúng bài toán kinh doanh của bạn.',
    },
    {
      question: 'Thời gian triển khai một dự án chuyển đổi số là bao lâu?',
      answer:
        'Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của dự án. Thông thường, một dự án triển khai CRM/ERP cơ bản mất khoảng 2-4 tuần, trong khi các hệ thống phức tạp hơn có thể cần 2-6 tháng. Chúng tôi cam kết đưa ra lộ trình chi tiết ngay sau giai đoạn khảo sát.',
    },
    {
      question: 'RIC Việt Nam có hỗ trợ đào tạo nhân sự sử dụng phần mềm không?',
      answer:
        'Chắc chắn rồi. Chúng tôi cung cấp các buổi training trực tiếp hoặc online cho nhân viên của bạn, kèm theo bộ tài liệu hướng dẫn sử dụng và video tutorial chi tiết. Chúng tôi đồng hành cho đến khi nhân sự của bạn làm chủ được hệ thống.',
    },
    {
      question: 'Chi phí sử dụng tính như thế nào?',
      answer:
        'Chi phí được tính theo số lượng người dùng và module tính năng sử dụng. Chúng tôi có các gói Starter, Professional và Enterprise phù hợp với từng quy mô doanh nghiệp. Liên hệ đội ngũ kinh doanh để nhận báo giá chi tiết và phù hợp nhất.',
    },
    {
      question: 'Có dùng thử miễn phí không?',
      answer:
        'Có. Chúng tôi cung cấp bản demo 14 ngày miễn phí với đầy đủ tính năng. Ngoài ra, đội ngũ tư vấn sẽ thiết lập môi trường demo theo dữ liệu mẫu ngành nghề của bạn để trải nghiệm thực tế hơn.',
    },
    {
      question: 'Hình thức thanh toán nào được chấp nhận?',
      answer:
        'Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, hóa đơn VAT đầy đủ. Phương thức thanh toán có thể là hàng tháng, hàng quý hoặc hàng năm (với ưu đãi khi thanh toán trước).',
    },
  ],
  'Kỹ thuật & Bảo mật': [
    {
      question: 'Dữ liệu của tôi có được bảo mật không?',
      answer:
        'Bảo mật dữ liệu là ưu tiên hàng đầu của chúng tôi. Hệ thống sử dụng mã hóa SSL/TLS, lưu trữ trên hạ tầng cloud đạt tiêu chuẩn ISO 27001, sao lưu dữ liệu tự động hàng ngày và kiểm soát truy cập phân quyền chi tiết.',
    },
    {
      question: 'Tôi có quyền sở hữu dữ liệu của mình không?',
      answer:
        'Hoàn toàn có. Dữ liệu của bạn thuộc về bạn. Bạn có thể xuất toàn bộ dữ liệu bất kỳ lúc nào dưới dạng file Excel hoặc CSV. Khi chấm dứt hợp đồng, chúng tôi sẽ bàn giao đầy đủ dữ liệu và xóa khỏi hệ thống theo quy trình đã thỏa thuận.',
    },
    {
      question: 'Sản phẩm triển khai trên cloud hay on-premise?',
      answer:
        'Chúng tôi hỗ trợ cả hai hình thức: cloud (SaaS) và triển khai tại chỗ (on-premise). Giải pháp cloud phù hợp với doanh nghiệp muốn nhanh chóng đưa vào vận hành, trong khi on-premise phù hợp với doanh nghiệp có yêu cầu bảo mật cao hoặc hạ tầng IT riêng.',
    },
    {
      question: 'Sản phẩm có thể tích hợp với phần mềm hiện tại không?',
      answer:
        'Có. Hệ thống của chúng tôi cung cấp API mở và hỗ trợ tích hợp với nhiều phần mềm phổ biến như kế toán (MISA, Fast), thương mại điện tử, thanh toán và các nền tảng bên thứ ba. Đội ngũ kỹ thuật sẽ tư vấn và hỗ trợ kết nối theo yêu cầu cụ thể.',
    },
  ],
  'Hỗ trợ khách hàng': [
    {
      question: 'Thời gian triển khai mất bao lâu?',
      answer:
        'Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của dự án. Thông thường: gói cơ bản 2-4 tuần, gói trung bình 1-3 tháng, và các dự án lớn tùy chỉnh cao 3-6 tháng. Chúng tôi sẽ phân tích và đưa ra timeline cụ thể sau buổi tư vấn ban đầu.',
    },
    {
      question: 'Có đào tạo người dùng không?',
      answer:
        'Có. Gói triển khai bao gồm đào tạo người dùng trực tiếp tại văn phòng khách hàng hoặc online. Chúng tôi cung cấp tài liệu hướng dẫn, video tutorial và cổng hỗ trợ 24/7. Đào tạo nâng cao có thể được bổ sung theo yêu cầu.',
    },
    {
      question: 'Chính sách hỗ trợ sau triển khai là gì?',
      answer:
        'Tất cả khách hàng đều được hưởng hỗ trợ kỹ thuật qua hotline, email và hệ thống ticket. Gói Enterprise bao gồm hỗ trợ ưu tiên 24/7 với SLA đảm bảo. Chúng tôi cam kết phản hồi trong vòng 4 giờ làm việc với các vấn đề nghiêm trọng.',
    },
    {
      question: 'Dữ liệu cũ của tôi có được chuyển sang hệ thống mới không?',
      answer:
        'Có. Đội ngũ của chúng tôi hỗ trợ migrate dữ liệu từ hệ thống cũ (Excel, phần mềm khác) sang hệ thống RIC Việt Nam. Quá trình này được thực hiện cẩn thận với kiểm tra tính toàn vẹn dữ liệu trước và sau khi chuyển.',
    },
  ],
}

export function FaqClient() {
  const [activeTab, setActiveTab] = useState('Về dịch vụ')
  const [searchQuery, setSearchQuery] = useState('')

  const items = FAQ_DATA[activeTab] ?? []
  const filtered = searchQuery
    ? items.filter((item) => item.question.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  return (
    <>
      {/* Search bar */}
      <div className="relative mx-auto mb-10 max-w-2xl">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm câu hỏi của bạn..."
          className="focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-slate-200 bg-white py-4 pr-4 pl-12 shadow-sm transition-all outline-none focus:ring-2"
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar tabs */}
        <aside className="lg:col-span-1">
          <nav className="flex gap-2 overflow-x-auto pb-4 lg:flex-col lg:pb-0">
            {TABS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActiveTab(label)
                  setSearchQuery('')
                }}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-300',
                  activeTab === label
                    ? 'bg-primary shadow-primary/20 text-white shadow-lg'
                    : 'text-slate-500 hover:bg-white',
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Accordion */}
        <div className="space-y-4 lg:col-span-3">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-slate-100 bg-white p-8 text-center text-slate-400">
              Không tìm thấy câu hỏi phù hợp.
            </div>
          ) : (
            <Accordion multiple>
              {filtered.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={String(i)}
                  className="data-[open]:border-electric data-[open]:ring-electric/30 mb-4 overflow-hidden rounded-xl border border-slate-100 bg-white last:mb-0 data-[open]:ring-1"
                >
                  <AccordionTrigger className="p-6 text-base font-bold text-slate-900 no-underline hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="border-t border-slate-50 px-6 pt-4 pb-6 leading-relaxed text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </>
  )
}
