import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
  description:
    'Chính sách bảo mật của RIC Việt Nam — cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.',
  openGraph: {
    title: 'Chính sách bảo mật — RIC Việt Nam',
    description: 'Cách RIC Việt Nam thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.',
  },
}

const sections = [
  {
    title: 'Thu thập thông tin cá nhân',
    intro:
      'Chúng tôi thu thập thông tin khi bạn đăng ký sử dụng dịch vụ, liên hệ tư vấn hoặc tham gia các sự kiện của RIC Việt Nam. Các thông tin bao gồm:',
    items: [
      'Họ và tên, địa chỉ email, số điện thoại liên lạc.',
      'Thông tin về doanh nghiệp (tên công ty, lĩnh vực hoạt động).',
      'Dữ liệu kỹ thuật khi truy cập website (địa chỉ IP, loại trình duyệt, cookies).',
    ],
  },
  {
    title: 'Sử dụng thông tin',
    intro: 'Thông tin thu thập được sử dụng cho các mục đích chính đáng sau:',
    items: [
      'Cung cấp và vận hành các giải pháp phần mềm, CRM, ERP.',
      'Hỗ trợ kỹ thuật và chăm sóc khách hàng trong quá trình triển khai.',
      'Gửi thông tin cập nhật về tính năng mới hoặc các chiến dịch Marketing phù hợp.',
      'Nâng cao trải nghiệm người dùng thông qua phân tích dữ liệu ẩn danh.',
    ],
  },
  {
    title: 'Bảo mật dữ liệu',
    intro:
      'Chúng tôi áp dụng các biện pháp bảo mật cấp cao nhất để bảo vệ thông tin của bạn khỏi việc truy cập trái phép, thay đổi hoặc phá hủy:',
    items: [
      'Mã hóa dữ liệu chuẩn SSL/TLS cho mọi giao dịch và truyền tải thông tin.',
      'Hệ thống tường lửa đa lớp và giám sát an ninh 24/7.',
      'Chỉ cho phép nhân viên có thẩm quyền truy cập dữ liệu cần thiết cho công việc.',
    ],
  },
  {
    title: 'Chia sẻ với bên thứ ba',
    intro:
      'RIC Việt Nam cam kết không bán hoặc cho thuê thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp:',
    items: [
      'Khi có sự đồng ý bằng văn bản của khách hàng.',
      'Với các đối tác cung cấp hạ tầng (Cloud Service) dưới cam kết bảo mật nghiêm ngặt.',
      'Tuân thủ các yêu cầu pháp lý từ cơ quan nhà nước có thẩm quyền.',
    ],
  },
  {
    title: 'Quyền của người dùng',
    intro: 'Bạn luôn có quyền kiểm soát thông tin cá nhân của mình:',
    items: [
      'Yêu cầu truy cập, chỉnh sửa hoặc cập nhật thông tin cá nhân.',
      'Yêu cầu xóa bỏ dữ liệu cá nhân khỏi hệ thống của chúng tôi.',
      'Hủy đăng ký nhận email marketing bất kỳ lúc nào.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-privacy-bg">
      <div className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[calc(1000px)]">
          {' '}
          {/* Page header */}
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
              Chính sách bảo mật
            </h1>
            <div className="bg-electric mx-auto h-1.5 w-20 rounded-full" />
            <p className="mt-6 text-slate-500">Cập nhật lần cuối: 24 tháng 5, 2024</p>
          </header>
          {/* Content card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-16">
            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              Tại <strong className="text-slate-900">RIC Việt Nam</strong>, chúng tôi cam kết bảo vệ
              quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách
              chúng tôi thu thập, sử dụng và bảo mật thông tin của khách hàng khi sử dụng dịch vụ
              Marketing và Phát triển phần mềm của chúng tôi.
            </p>

            <div className="space-y-12">
              {sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="mb-6 flex items-center gap-4 text-2xl font-bold text-slate-900">
                    <span className="bg-electric/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="space-y-4 pl-14 leading-relaxed text-slate-600">
                    <p>{section.intro}</p>
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>

            {/* Contact footer */}
            <div className="mt-16 border-t border-slate-100 pt-10 text-center">
              <p className="mb-4 text-slate-500 italic">
                Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ:
              </p>
              <a
                href="mailto:privacy@ricvina.vn"
                className="hover:text-primary text-xl font-bold text-slate-900 transition-colors"
              >
                privacy@ricvina.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
