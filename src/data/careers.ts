import type { Career } from '@/types'

export const careers: Career[] = [
  {
    id: '1',
    slug: 'senior-fullstack-developer',
    title: 'Senior Fullstack Developer',
    department: 'Công nghệ',
    location: 'Hà Nội',
    type: 'full-time',
    salary: 'Thỏa thuận',
    description:
      'Chúng tôi tìm kiếm Senior Fullstack Developer có đam mê xây dựng sản phẩm SaaS chất lượng cao. Bạn sẽ đóng vai trò chủ chốt trong việc thiết kế kiến trúc hệ thống và dẫn dắt đội ngũ kỹ thuật.',
    requirements: [
      'Tối thiểu 4 năm kinh nghiệm với React/Next.js và Node.js',
      'Thành thạo TypeScript, thiết kế RESTful & GraphQL API',
      'Kinh nghiệm với PostgreSQL, Redis, microservices',
      'Hiểu biết về CI/CD, Docker, cloud deployment',
      'Kỹ năng code review và mentoring junior developers',
    ],
    benefits: [
      'Lương cạnh tranh theo thỏa thuận',
      'Cổ phần ESOP hấp dẫn',
      'Làm việc hybrid linh hoạt',
      'Budget học tập 10 triệu/năm',
      '13 tháng lương + thưởng dự án',
    ],
  },
  {
    id: '2',
    slug: 'digital-marketing-lead',
    title: 'Digital Marketing Lead',
    department: 'Marketing',
    location: 'Hà Nội',
    type: 'full-time',
    salary: '15M - 25M',
    description:
      'Dẫn dắt chiến lược marketing số toàn diện cho các sản phẩm SaaS của RIC. Bạn sẽ xây dựng và thực thi các chiến dịch đa kênh nhằm tăng trưởng thương hiệu và khách hàng.',
    requirements: [
      'Tối thiểu 3 năm kinh nghiệm Digital Marketing B2B/SaaS',
      'Thành thạo SEO, Google Ads, Meta Ads, LinkedIn Ads',
      'Kinh nghiệm với Marketing Automation (HubSpot, Mailchimp)',
      'Tư duy data-driven, phân tích GA4, dashboards',
      'Kỹ năng viết content marketing tiếng Việt và Anh',
    ],
    benefits: [
      'Lương 15 – 25 triệu + hoa hồng KPI',
      'Budget chạy ads thực chiến',
      'Đào tạo chứng chỉ Google & Meta',
      'Làm việc hybrid, giờ linh hoạt',
      'Team building hàng quý',
    ],
  },
  {
    id: '3',
    slug: 'account-manager-saas',
    title: 'Account Manager (SaaS)',
    department: 'Sales',
    location: 'Hà Nội',
    type: 'full-time',
    salary: '12M - 20M + Bonus',
    description:
      'Quản lý và phát triển danh mục khách hàng doanh nghiệp đang sử dụng sản phẩm SaaS của RIC. Mục tiêu chính là tăng retention, upsell và xây dựng quan hệ đối tác bền vững.',
    requirements: [
      'Tối thiểu 2 năm kinh nghiệm Account Management hoặc B2B Sales',
      'Kỹ năng giao tiếp, đàm phán và thuyết trình xuất sắc',
      'Hiểu biết về phần mềm ERP, CRM hoặc SaaS là lợi thế',
      'Tiếng Anh giao tiếp tốt',
      'Định hướng khách hàng, chủ động giải quyết vấn đề',
    ],
    benefits: [
      'Lương 12 – 20 triệu + hoa hồng luỹ tiến',
      'Phụ cấp di chuyển & điện thoại',
      'Đào tạo sales SaaS chuyên nghiệp',
      'Lộ trình thăng tiến lên Senior AM / Sales Manager',
      'Bảo hiểm sức khoẻ cao cấp',
    ],
  },
  {
    id: '4',
    slug: 'product-designer',
    title: 'Product Designer (UI/UX)',
    department: 'Công nghệ',
    location: 'Hà Nội',
    type: 'full-time',
    salary: 'Thỏa thuận',
    description:
      'Thiết kế trải nghiệm người dùng xuất sắc cho hệ sinh thái sản phẩm SaaS của RIC. Bạn sẽ làm việc trực tiếp với Engineering và Product để đưa ý tưởng thành hiện thực.',
    requirements: [
      'Tối thiểu 3 năm kinh nghiệm Product Design / UI/UX',
      'Thành thạo Figma, Prototyping, Design Systems',
      'Kinh nghiệm thiết kế cho web app phức tạp (B2B SaaS)',
      'Hiểu biết về accessibility, responsive design',
      'Portfolio thể hiện tư duy thiết kế rõ ràng, cụ thể',
    ],
    benefits: [
      'Lương cạnh tranh theo thỏa thuận',
      'Tự do sáng tạo, tham gia toàn bộ product lifecycle',
      'Budget mua tools thiết kế',
      'Học & tham dự hội thảo design trong nước/quốc tế',
      'Làm việc hybrid',
    ],
  },
]
