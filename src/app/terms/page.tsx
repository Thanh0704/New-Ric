import type { Metadata } from 'next'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng',
  description:
    'Điều khoản và điều kiện sử dụng dịch vụ của RIC Việt Nam. Vui lòng đọc kỹ trước khi sử dụng.',
  openGraph: {
    title: 'Điều khoản sử dụng — RIC Việt Nam',
    description: 'Điều khoản và điều kiện sử dụng dịch vụ của RIC Việt Nam.',
  },
}

const sections = [
  {
    title: 'Chấp thuận điều khoản',
    intro:
      'Bằng cách truy cập hoặc sử dụng website ricvina.vn và các dịch vụ của RIC Việt Nam, bạn xác nhận rằng mình đã đọc, hiểu và đồng ý với toàn bộ các điều khoản này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ của chúng tôi.',
    items: [],
  },
  {
    title: 'Quyền sở hữu trí tuệ',
    intro:
      'Toàn bộ nội dung, thương hiệu và tài sản kỹ thuật số trên nền tảng của RIC Việt Nam là tài sản trí tuệ được bảo hộ. Cụ thể:',
    items: [
      'Logo, tên thương hiệu RIC Việt Nam và các nhãn hiệu liên quan được đăng ký bảo hộ.',
      'Mã nguồn, kiến trúc phần mềm, giao diện UI/UX là tài sản độc quyền của công ty.',
      'Toàn bộ bài viết, hình ảnh và video trên website không được tái sử dụng khi chưa có phép.',
    ],
  },
  {
    title: 'Quyền và trách nhiệm người dùng',
    intro:
      'Khi sử dụng dịch vụ của chúng tôi, người dùng cam kết thực hiện đầy đủ các trách nhiệm sau:',
    items: [
      'Cung cấp thông tin cá nhân và doanh nghiệp chính xác, đầy đủ khi đăng ký.',
      'Không thực hiện các hành vi tấn công mạng, reverse engineering hoặc can thiệp vào hệ thống.',
      'Chỉ sử dụng dịch vụ cho các mục đích kinh doanh hợp pháp, tuân thủ pháp luật Việt Nam.',
      'Bảo mật thông tin tài khoản và chịu trách nhiệm về mọi hoạt động dưới tài khoản của mình.',
    ],
  },
  {
    title: 'Giới hạn trách nhiệm',
    intro:
      'RIC Việt Nam nỗ lực duy trì hoạt động ổn định và chất lượng cao của dịch vụ, tuy nhiên trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm về:',
    items: [
      'Các thiệt hại gián tiếp, mất doanh thu hoặc cơ hội kinh doanh phát sinh từ gián đoạn dịch vụ.',
      'Sự cố hệ thống hạ tầng do bên thứ ba (nhà cung cấp dịch vụ Cloud, ISP) gây ra.',
      'Rủi ro bảo mật xuất phát từ việc người dùng chia sẻ thông tin tài khoản cho bên khác.',
    ],
  },
  {
    title: 'Thay đổi điều khoản',
    intro:
      'RIC Việt Nam có quyền cập nhật hoặc điều chỉnh các điều khoản này bất kỳ lúc nào để phù hợp với yêu cầu pháp lý hoặc hoạt động kinh doanh. Mọi thay đổi sẽ được thông báo trên website và có hiệu lực kể từ ngày đăng tải. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận điều khoản mới.',
    items: [],
  },
]

export default function TermsPage() {
  return (
    <div className="bg-privacy-bg">
      <div className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Page header */}
          <header className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
              Điều khoản sử dụng
            </h1>
            <div className="bg-electric mx-auto h-1.5 w-20 rounded-full" />
            <p className="mt-6 text-slate-500">Cập nhật lần cuối: 24 tháng 5, 2024</p>
          </header>

          {/* Content card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-16">
            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              Chào mừng bạn đến với <strong className="text-slate-900">RIC Việt Nam</strong>. Tài
              liệu này quy định các điều khoản và điều kiện điều chỉnh việc sử dụng website và các
              dịch vụ phần mềm của chúng tôi. Vui lòng đọc kỹ trước khi sử dụng.
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
                    {section.items.length > 0 && (
                      <ul className="list-disc space-y-2 pl-5">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact footer */}
            <div className="mt-16 border-t border-slate-100 pt-10 text-center">
              <p className="mb-4 text-slate-500 italic">
                Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ:
              </p>
              <a
                href="mailto:contact@ric.vn"
                className="hover:text-primary inline-flex items-center gap-2 text-xl font-bold text-slate-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
                contact@ric.vn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
