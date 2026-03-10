import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'he-thong-quan-ly-ban-hang',
    name: 'Hệ thống Quản lý Bán hàng',
    tagline: 'Quản lý đơn hàng, khách hàng và doanh thu trong một nền tảng',
    description:
      'Giải pháp toàn diện giúp doanh nghiệp quản lý toàn bộ quy trình bán hàng từ tiếp nhận đơn hàng đến xuất kho và thanh toán.',
    image: '/images/products/sales.jpg',
    features: [
      'Quản lý đơn hàng real-time',
      'Báo cáo doanh thu tự động',
      'Tích hợp thanh toán',
      'Quản lý khách hàng (CRM)',
    ],
    category: 'ERP',
  },
  {
    id: '2',
    slug: 'he-thong-quan-ly-nhan-su',
    name: 'Hệ thống Quản lý Nhân sự',
    tagline: 'Tối ưu quy trình tuyển dụng, chấm công và tính lương',
    description:
      'Nền tảng HRM đầy đủ giúp doanh nghiệp quản lý nhân viên, chấm công tự động và tính lương chính xác.',
    image: '/images/products/hrm.jpg',
    features: [
      'Chấm công tự động',
      'Quản lý bảng lương',
      'Quy trình tuyển dụng',
      'Đánh giá hiệu suất (KPI)',
    ],
    category: 'HRM',
  },
  {
    id: '3',
    slug: 'he-thong-quan-ly-kho',
    name: 'Hệ thống Quản lý Kho',
    tagline: 'Kiểm soát hàng tồn kho chính xác, giảm thất thoát',
    description:
      'Giải pháp WMS giúp doanh nghiệp quản lý kho hàng, theo dõi xuất nhập tồn và tối ưu không gian kho.',
    image: '/images/products/warehouse.jpg',
    features: [
      'Quét mã vạch / QR',
      'Theo dõi xuất nhập tồn',
      'Cảnh báo hàng sắp hết',
      'Báo cáo tồn kho',
    ],
    category: 'WMS',
  },
]
