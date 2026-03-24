import { Zap, Users, Lightbulb, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'

const values = [
  {
    icon: Zap,
    title: 'TỐI ƯU',
    quote: '"Công nghệ là công cụ, hiệu quả là mục tiêu."',
    description:
      'Cam kết sự tinh gọn trong quy trình và tối đa hóa năng suất cho mọi hoạt động doanh nghiệp.',
  },
  {
    icon: Users,
    title: 'ĐỒNG HÀNH',
    quote: '"Thành công của bạn là sứ mệnh của chúng tôi."',
    description:
      'Luôn tận tâm lắng nghe và sát cánh cùng doanh nghiệp vượt qua mọi thử thách trên hành trình số.',
  },
  {
    icon: Lightbulb,
    title: 'SÁNG TẠO',
    quote: '"Công nghệ hiện đại cho trải nghiệm gần gũi."',
    description:
      'Dẫn đầu xu hướng với những giải pháp sáng tạo, thân thiện và tập trung vào trải nghiệm con người.',
  },
  {
    icon: ShieldCheck,
    title: 'TIN CẬY',
    quote: '"Chất lượng khẳng định vị thế."',
    description:
      'Xây dựng uy tín dựa trên sự minh bạch, tính bảo mật cao và cam kết chất lượng tuyệt đối.',
  },
]

export function Features() {
  return (
    <section className="bg-slate-50 py-16 md:py-20 dark:bg-slate-900/50">
      <Container className="text-center">
        <div className="mb-12 space-y-4 md:mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Phát triển bền vững
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
            Giá trị cốt lõi
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Nền tảng vững chắc làm nên thương hiệu RIC Việt Nam, định hướng mọi hoạt động vì lợi ích
            khách hàng.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {values.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="group hover:border-electric/50 hover:shadow-electric/10 transform rounded-2xl border border-slate-100 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl md:p-8 dark:border-slate-700 dark:bg-slate-800">
                <div className="group-hover:bg-electric/10 group-hover:text-electric mb-4 inline-flex rounded-xl bg-slate-100 p-4 text-slate-600 transition-colors duration-300 md:mb-6 dark:bg-slate-700 dark:text-slate-400">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="group-hover:text-electric mb-3 text-xl font-bold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-slate-800 italic dark:text-slate-200">
                  {item.quote}
                </p>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
