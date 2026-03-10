import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/shared/container'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với RIC Vietnam để được tư vấn giải pháp công nghệ.',
  openGraph: {
    title: 'Liên hệ',
    description: 'Liên hệ với RIC Vietnam để được tư vấn giải pháp công nghệ.',
  },
}

const contactInfo = [
  { icon: MapPin, label: 'Địa chỉ', value: 'Số X, Đường Y, Quận Z, TP. Hồ Chí Minh' },
  { icon: Phone, label: 'Điện thoại', value: '0123 456 789' },
  { icon: Mail, label: 'Email', value: 'contact@ricvina.vn' },
  { icon: Clock, label: 'Giờ làm việc', value: 'Thứ 2 - Thứ 6: 8:00 - 17:30' },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/30 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold">Liên hệ</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Gửi tin nhắn</h2>
              <p className="text-muted-foreground mt-2">
                Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24 giờ.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item) => (
                  <Card key={item.label}>
                    <CardContent className="flex items-start gap-3 p-4">
                      <item.icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
