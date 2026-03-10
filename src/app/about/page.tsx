import type { Metadata } from 'next'
import { Users, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { SectionHeading } from '@/components/shared/section-heading'
import { AnimateOnScroll } from '@/components/shared/animate-on-scroll'
import { teamMembers } from '@/data/team'

export const metadata: Metadata = {
  title: 'Về chúng tôi',
  description:
    'Tìm hiểu về RIC Vietnam - công ty công nghệ hàng đầu cung cấp giải pháp phần mềm cho doanh nghiệp.',
  openGraph: {
    title: 'Về chúng tôi',
    description: 'Tìm hiểu về lịch sử, sứ mệnh và đội ngũ RIC Vietnam.',
  },
}

const values = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    description:
      'Cung cấp giải pháp công nghệ tiên tiến, giúp doanh nghiệp Việt Nam tối ưu vận hành và phát triển bền vững.',
  },
  {
    icon: Lightbulb,
    title: 'Tầm nhìn',
    description:
      'Trở thành đối tác công nghệ tin cậy hàng đầu cho doanh nghiệp vừa và nhỏ tại Việt Nam.',
  },
  {
    icon: Users,
    title: 'Giá trị cốt lõi',
    description:
      'Đổi mới không ngừng, lấy khách hàng làm trung tâm, cam kết chất lượng và tinh thần đồng đội.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Về chúng tôi</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Đồng hành cùng doanh nghiệp Việt trên hành trình chuyển đổi số
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold">Câu chuyện của chúng tôi</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              RIC Vietnam được thành lập với mục tiêu mang công nghệ tiên tiến đến gần hơn với doanh
              nghiệp Việt Nam. Với đội ngũ kỹ sư giàu kinh nghiệm và am hiểu thị trường nội địa,
              chúng tôi phát triển các giải pháp phần mềm ERP, HRM và WMS giúp tối ưu hóa quy trình
              vận hành doanh nghiệp.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Sau nhiều năm hoạt động, RIC Vietnam đã đồng hành cùng hơn 100 doanh nghiệp trên toàn
              quốc, từ startup đến các tập đoàn lớn, triển khai thành công hàng chục dự án công
              nghệ.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      <section className="bg-muted/30 py-20">
        <Container>
          <SectionHeading
            title="Sứ mệnh & Giá trị"
            description="Những giá trị định hướng mọi hoạt động của chúng tôi"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item) => (
              <AnimateOnScroll key={item.title}>
                <Card className="h-full text-center">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Đội ngũ lãnh đạo" description="Những người dẫn dắt RIC Vietnam" />
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <AnimateOnScroll key={member.id}>
                <Card className="h-full text-center">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <div className="bg-muted h-24 w-24 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-primary text-sm">{member.title}</p>
                      <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
