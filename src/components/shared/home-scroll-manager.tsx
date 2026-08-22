'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function HomeScrollManager() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')

    if (scrollTo) {
      // 1. Xóa tín hiệu trên thanh địa chỉ đi
      router.replace('/', { scroll: false })

      // 2. Đợi 0.4s rồi cuộn xuống đúng mục tiêu
      setTimeout(() => {
        let targetId = ''

        // Phân loại tín hiệu
        if (scrollTo === 'insights') targetId = 'ric-insights'
        if (scrollTo === 'ecosystem') targetId = 'ric-ecosystem'

        // Bắn mục tiêu
        if (targetId) {
          const target = document.getElementById(targetId)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }, 400)
    }
  }, [searchParams, router])

  return null
}
