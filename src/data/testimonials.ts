import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    title: 'Giám đốc điều hành',
    company: 'Công ty TNHH ABC',
    avatar: '/images/testimonials/avatar-1.jpg',
    content:
      'Giải pháp của RIC Vietnam giúp chúng tôi giảm 60% thời gian xử lý đơn hàng và tăng năng suất đáng kể.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Trần Thị B',
    title: 'Trưởng phòng Kế toán',
    company: 'Tập đoàn XYZ',
    avatar: '/images/testimonials/avatar-2.jpg',
    content:
      'Hệ thống dễ sử dụng, báo cáo tự động rất tiện lợi. Đội ngũ hỗ trợ nhiệt tình và chuyên nghiệp.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lê Văn C',
    title: 'CEO & Co-founder',
    company: 'Startup DEF',
    avatar: '/images/testimonials/avatar-3.jpg',
    content:
      'Triển khai nhanh, phù hợp với quy mô startup. Giá cả hợp lý, ROI rõ ràng sau 3 tháng sử dụng.',
    rating: 5,
  },
]
