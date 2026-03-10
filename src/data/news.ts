import type { NewsArticle } from '@/types'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'ric-vietnam-ra-mat-phien-ban-moi',
    title: 'RIC Vietnam ra mắt phiên bản mới với nhiều tính năng vượt trội',
    excerpt:
      'Phiên bản 3.0 mang đến giao diện hiện đại, hiệu suất cải thiện 40% và hàng loạt tính năng AI tích hợp.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-1.jpg',
    publishedAt: '2026-02-15T08:00:00Z',
    category: 'Sản phẩm',
    author: 'Đội ngũ RIC Vietnam',
  },
  {
    id: '2',
    slug: 'hop-tac-chien-luoc-voi-cac-doanh-nghiep',
    title: 'RIC Vietnam ký kết hợp tác chiến lược với 10 doanh nghiệp hàng đầu',
    excerpt: 'Mở rộng hệ sinh thái đối tác, tăng cường năng lực triển khai trên toàn quốc.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-2.jpg',
    publishedAt: '2026-01-20T08:00:00Z',
    category: 'Sự kiện',
    author: 'Ban truyền thông',
  },
  {
    id: '3',
    slug: 'cong-nghe-ai-trong-quan-ly-doanh-nghiep',
    title: 'Ứng dụng AI trong quản lý doanh nghiệp: Xu hướng 2026',
    excerpt: 'Tìm hiểu cách các doanh nghiệp Việt Nam đang ứng dụng AI để tối ưu vận hành.',
    content: 'Nội dung chi tiết bài viết...',
    thumbnail: '/images/news/news-3.jpg',
    publishedAt: '2026-01-05T08:00:00Z',
    category: 'Công nghệ',
    author: 'Đội ngũ kỹ thuật',
  },
]
