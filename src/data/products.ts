import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Hệ thống quản trị',
    description:
      'Hệ thống quản trị Cloud based mạnh mẽ giúp Doanh nghiệp kiểm soát toàn bộ dữ liệu, đơn hàng và khách hàng chỉ trên một giao diện duy nhất. Thiết kế tối ưu cho mọi nghiệp vụ từ cơ bản đến chuyên sâu theo yêu cầu.',
    image: '/images/products/erp.jpg',
    features: [
      'Quản lý nghiệp vụ đa dạng: Tùy biến linh hoạt theo đặc thù từng ngành hàng',
      'Kiểm soát chặt chẽ quyền truy cập của nhân viên, cộng tác viên, đảm bảo an toàn dữ liệu tuyệt đối',
      'Theo dõi trạng thái đơn hàng, doanh thu và tồn kho theo thời gian thực',
    ],
  },
  {
    id: '2',
    name: 'Hệ thống Hỗ trợ kinh doanh',
    description:
      'Giải pháp bán hàng đa kênh cùng với bộ công cụ quản lý đại lý, cộng tác viên toàn diện. Tích hợp chức năng truy xuất nguồn gốc hàng hoá.',
    image: '/images/products/sales.jpg',
    features: [
      'Xây dựng Mini app thương mại điện tử của Doanh nghiệp trên nền tảng Zalo',
      'Công cụ quản lý đại lý, cộng tác viên và tự động hóa quy trình lên đơn hàng.',
      'Xác thực sản phẩm chính hãng với mã QR',
    ],
  },
  {
    id: '3',
    name: 'Hệ thống Truyền thông',
    description:
      'Nền tảng truyền thông đa kênh giúp doanh nghiệp tiếp cận đúng khách hàng tiềm năng. Tự động hóa chiến dịch marketing và tối ưu hóa chi phí quảng bá thương hiệu.',
    image: '/images/products/media.jpg',
    features: [
      'Tạo chiến dịch truyền thông với Tin nhắn ZBS / SMS Brandname',
      'Vận hành kênh Zalo Official Account (OA) chuyên nghiệp',
      'Đo lường hiệu quả chiến dịch thời gian thực',
    ],
  },
  {
    id: '4',
    name: 'Hệ thống Chăm sóc khách hàng',
    description:
      'Xây dựng mối quan hệ bền chặt với khách hàng thông qua hệ thống thông báo tự động đa kênh. Tận dụng sức mạnh của Zalo OA, ZBS và SMS Brandname để gửi đúng thông điệp đến đúng người vào những thời điểm quan trọng nhất.',
    image: '/images/products/crm.jpg',
    features: [
      'Tăng tỷ lệ khách hàng quay lại',
      'Cập nhật đơn hàng - Chăm sóc sau bán - Nhắc lịch mua hàng',
      'Tích hợp chương trình khách hàng thân thiết (Loyalty)',
    ],
  },
]
