import type { Career } from '@/types'

export const careers: Career[] = [
  {
    id: '1',
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Kỹ thuật',
    location: 'TP. Hồ Chí Minh',
    type: 'full-time',
    description:
      'Chúng tôi tìm kiếm Frontend Developer có đam mê xây dựng UI đẹp và hiệu suất cao.',
    requirements: [
      'Tối thiểu 2 năm kinh nghiệm với React/Next.js',
      'Thành thạo TypeScript, Tailwind CSS',
      'Hiểu biết về SEO và Web Performance',
    ],
    benefits: [
      'Lương cạnh tranh 20-35 triệu',
      'Làm việc hybrid',
      'Đào tạo chuyên sâu',
      '13 tháng lương',
    ],
  },
  {
    id: '2',
    slug: 'backend-developer',
    title: 'Backend Developer',
    department: 'Kỹ thuật',
    location: 'TP. Hồ Chí Minh',
    type: 'full-time',
    description: 'Xây dựng và tối ưu API, hệ thống backend cho các sản phẩm SaaS của công ty.',
    requirements: [
      'Tối thiểu 2 năm kinh nghiệm với Node.js hoặc Go',
      'Thành thạo SQL, thiết kế database',
      'Kinh nghiệm với microservices',
    ],
    benefits: [
      'Lương cạnh tranh 25-40 triệu',
      'Làm việc hybrid',
      'Budget học tập hàng năm',
      'Cổ phần (ESOP)',
    ],
  },
  {
    id: '3',
    slug: 'business-development',
    title: 'Business Development Executive',
    department: 'Kinh doanh',
    location: 'Hà Nội / TP. HCM',
    type: 'full-time',
    description: 'Phát triển thị trường, tìm kiếm và chăm sóc khách hàng doanh nghiệp.',
    requirements: [
      'Tối thiểu 1 năm kinh nghiệm B2B Sales',
      'Kỹ năng giao tiếp, thuyết trình tốt',
      'Tiếng Anh giao tiếp',
    ],
    benefits: ['Lương + hoa hồng hấp dẫn', 'Phụ cấp di chuyển', 'Đào tạo sales chuyên nghiệp'],
  },
]
