'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground mt-4 text-lg">Trang bạn tìm kiếm không tồn tại</p>
      <Link href="/" className={buttonVariants({ className: 'mt-8' })}>
        Về trang chủ
      </Link>
    </Container>
  )
}
