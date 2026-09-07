'use client'

import { use, useEffect, useState, useRef } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  ShieldCheck,
  Zap,
  BarChart3,
  ShoppingCart,
  Users,
  Megaphone,
  Briefcase,
  Smartphone,
  Globe,
  Server,
  Lock,
  Fingerprint,
  Target,
  Rocket,
  GitMerge,
  CheckSquare,
  Layers,
  Database,
  Link2,
} from 'lucide-react'

// ----------------------------------------------------------------------
// DATABASE: NỘI DUNG CHI TIẾT SẢN PHẨM
// ----------------------------------------------------------------------
const productDetails: Record<string, any> = {
  ecom: {
    name: 'RIC ECOM',
    category: 'Bán hàng & Thương mại',
    tagline: 'Nền tảng thương mại điện tử linh hoạt',
    description:
      'Được thiết kế để phục vụ bán hàng và quản trị hoạt động thương mại số. Cung cấp bộ lõi (Commerce Core) mạnh mẽ để quản lý đồng bộ từ Website, Zalo Mini App đến Native App.',
    target:
      'Đặc biệt phù hợp cho các doanh nghiệp SME, hộ kinh doanh và các thương hiệu bán lẻ đang muốn bắt đầu số hóa, tự động hóa hoặc mở rộng hệ sinh thái bán hàng của mình.',
    image: '/images/solutions/ecom.jpg',
    theme: 'from-blue-600 to-cyan-400',
    iconColor: 'text-blue-500',
    bgLight: 'bg-blue-50',
    advantages: [
      {
        icon: Database,
        title: 'Commerce Core',
        desc: 'Sở hữu bộ lõi quản lý đồng bộ sản phẩm, tồn kho, đơn hàng, khuyến mãi và thanh toán.',
      },
      {
        icon: Globe,
        title: 'Bán hàng đa kênh',
        desc: 'Triển khai linh hoạt trên nhiều nền tảng: Web, Zalo Mini App hay Native App.',
      },
      {
        icon: Zap,
        title: 'Tự động hóa',
        desc: 'Tự động hóa luồng xử lý đơn hàng, giảm thiểu thao tác thủ công và sai sót.',
      },
    ],
    benefits: [
      'Quản lý tập trung mọi điểm chạm bán hàng trên một màn hình duy nhất.',
      'Dễ dàng mở rộng hệ sinh thái khi doanh nghiệp tăng trưởng.',
      'Tối ưu hóa trải nghiệm mua sắm của khách hàng, tăng tỷ lệ chuyển đổi.',
      'Kiểm soát tồn kho chính xác theo thời gian thực (Real-time).',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Khảo sát & Chuẩn hóa',
        desc: 'Phân tích mô hình bán hàng, chuẩn hóa danh mục sản phẩm và quy trình xử lý đơn.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Thiết lập Commerce Core',
        desc: 'Cấu hình hệ thống lõi, nhập liệu tồn kho và thiết lập các cổng thanh toán/vận chuyển.',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Triển khai Đa kênh',
        desc: 'Mở rộng kênh bán lên Website, Zalo Mini App theo yêu cầu của doanh nghiệp.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Đào tạo & Go-live',
        desc: 'Hướng dẫn nhân sự vận hành và chính thức đưa hệ thống vào hoạt động.',
      },
    ],
  },
  'ric-message': {
    name: 'RIC MESSAGE',
    category: 'Marketing & Tương tác',
    tagline: 'Hạ tầng Marketing Automation',
    description:
      'Nền tảng hạ tầng tin nhắn hỗ trợ tự động hóa marketing và tối ưu hóa giao tiếp khách hàng, giúp doanh nghiệp gửi thông báo (đặc biệt qua Zalo ZNS) một cách thông minh.',
    target:
      'Rất hữu ích đối với các doanh nghiệp có lượng khách hàng lớn, cần giao tiếp qua nhiều điểm chạm như TMĐT, du lịch khách sạn, giáo dục, tài chính hoặc dịch vụ có lịch hẹn.',
    image: '/images/solutions/ric-message.jpg',
    theme: 'from-purple-600 to-pink-500',
    iconColor: 'text-purple-500',
    bgLight: 'bg-purple-50',
    advantages: [
      {
        icon: Megaphone,
        title: 'Tự động hóa chuỗi tin',
        desc: 'Kích hoạt tin nhắn tự động theo sự kiện mua hàng hoặc hành vi người dùng.',
      },
      {
        icon: Smartphone,
        title: 'Tối ưu Zalo ZNS',
        desc: 'Khai thác tối đa sức mạnh của Zalo Notification Service với chi phí tối ưu.',
      },
      {
        icon: Fingerprint,
        title: 'Cá nhân hóa sâu',
        desc: 'Xây dựng hành trình chăm sóc khách hàng dựa trên dữ liệu thực tế.',
      },
    ],
    benefits: [
      'Tiết kiệm 80% thời gian gửi thông báo thủ công cho khách hàng.',
      'Tăng tỷ lệ khách hàng quay lại mua hàng nhờ kịch bản nuôi dưỡng (Nurturing).',
      'Giảm chi phí SMS truyền thống bằng các kênh thay thế hiệu quả cao.',
      'Giao tiếp chuyên nghiệp, đúng thời điểm, không gây spam.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Phân tích Data',
        desc: 'Phân loại tệp khách hàng và vẽ lại hành trình trải nghiệm (Customer Journey).',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Xây dựng Kịch bản',
        desc: 'Thiết lập các chuỗi tin nhắn tự động (Chúc mừng sinh nhật, Nhắc lịch, Cảm ơn mua hàng...).',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Kết nối Kênh',
        desc: 'Tích hợp API với Zalo ZNS, SMS Brandname và các kênh gửi tin khác.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Đo lường & Tối ưu',
        desc: 'Chạy chiến dịch thực tế, theo dõi tỷ lệ mở tin/chuyển đổi và tinh chỉnh kịch bản.',
      },
    ],
  },
  zhub: {
    name: 'ZHUB',
    category: 'Marketing & Tương tác',
    tagline: 'Trung tâm hội thoại hợp nhất',
    description:
      'Unified Chat / Conversation Hub giúp gom tất cả các luồng giao tiếp với khách hàng từ nhiều kênh về một nơi duy nhất. Chuyển đổi hội thoại thành cơ hội bán hàng (Lead) hiệu quả.',
    target:
      'Sinh ra dành cho các doanh nghiệp SME có đội ngũ Sales/CSKH nhận tin nhắn từ nhiều nguồn, muốn quản lý tập trung để không bỏ sót khách và kiểm soát hiệu suất làm việc.',
    image: '/images/solutions/zhub.jpg',
    theme: 'from-slate-700 to-slate-500',
    iconColor: 'text-slate-600',
    bgLight: 'bg-slate-100',
    advantages: [
      {
        icon: Layers,
        title: 'Gom kênh tập trung',
        desc: 'Nhận và trả lời tin nhắn Zalo, Facebook, Website... trên một màn hình duy nhất.',
      },
      {
        icon: Users,
        title: 'Phân quyền thông minh',
        desc: 'Tự động chia chat cho nhân sự, bảo mật thông tin khách hàng giữa các ca trực.',
      },
      {
        icon: Target,
        title: 'Quản lý Lead',
        desc: 'Chuyển đổi trực tiếp các đoạn chat tiềm năng thành cơ hội bán hàng có thể theo dõi.',
      },
    ],
    benefits: [
      'Không bao giờ bỏ sót tin nhắn hay yêu cầu hỗ trợ từ khách hàng.',
      'Đánh giá chính xác hiệu suất làm việc và thời gian phản hồi của từng nhân sự CSKH.',
      'Tạo sự liền mạch trong giao tiếp, khách hàng không phải trình bày lại vấn đề.',
      'Dễ dàng trích xuất dữ liệu chat để phân tích insight khách hàng.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Đấu nối hệ thống',
        desc: 'Cấp quyền và kết nối các trang Fanpage, Zalo OA, Website chat vào nền tảng ZHUB.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Phân luồng & Cài đặt',
        desc: 'Thiết lập kịch bản chatbot cơ bản, cài đặt luật chia chat cho nhân viên tư vấn.',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Training nhân sự',
        desc: 'Đào tạo đội ngũ Sales/CSKH thao tác nhận tin, gắn tag và xử lý lead trên hệ thống.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Kiểm soát chất lượng',
        desc: 'Ban quản lý bắt đầu sử dụng các báo cáo thời gian thực để đánh giá chất lượng CSKH.',
      },
    ],
  },
  'ric-affiliate': {
    name: 'RIC AFFILIATE',
    category: 'Bán hàng & Thương mại',
    tagline: 'Quản lý mạng lưới bán hàng & CTV',
    description:
      'Nền tảng công nghệ chuyên sâu dùng để quản lý đội ngũ cộng tác viên (CTV) và các chương trình affiliate. Cung cấp công cụ tạo mã/link giới thiệu và theo dõi doanh số minh bạch.',
    target:
      'Phục vụ từ doanh nghiệp mới xây dựng chương trình CTV đơn giản, đến các hệ thống muốn mở rộng mạng lưới phân phối và cấu hình ma trận hoa hồng phức tạp đa tầng.',
    image: '/images/solutions/ric-affiliate.jpg',
    theme: 'from-emerald-500 to-teal-400',
    iconColor: 'text-emerald-500',
    bgLight: 'bg-emerald-50',
    advantages: [
      {
        icon: GitMerge,
        title: 'Ma trận hoa hồng',
        desc: 'Cho phép cấu hình các ma trận hoa hồng phức tạp đa tầng, đa đối tượng linh hoạt.',
      },
      {
        icon: Link2,
        title: 'Tracking chuẩn xác',
        desc: 'Tạo mã và link giới thiệu (Affiliate Link) cá nhân hóa, ghi nhận doanh số tức thì.',
      },
      {
        icon: BarChart3,
        title: 'Quản lý cấp bậc',
        desc: 'Phân cấp thành viên rõ ràng, kích thích thi đua và thăng cấp trong mạng lưới.',
      },
    ],
    benefits: [
      'Bùng nổ doanh số bằng việc tận dụng nguồn lực bán hàng từ cộng đồng (Social Selling).',
      'Xóa bỏ hoàn toàn sai sót và tranh chấp trong việc tính toán hoa hồng thủ công.',
      'Cộng tác viên có portal riêng để tự theo dõi thu nhập, tăng độ tin tưởng và gắn bó.',
      'Tối ưu chi phí Marketing: Chỉ trả phí (hoa hồng) khi có đơn hàng thành công.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Tư vấn Chính sách',
        desc: 'Số hóa các chính sách trả thưởng, cấu trúc cây đại lý/CTV của doanh nghiệp lên hệ thống.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Cấu hình Kỹ thuật',
        desc: 'Khởi tạo hệ thống tracking, cài đặt các mức % hoa hồng theo sản phẩm và cấp bậc.',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Ra mắt Portal',
        desc: 'Bàn giao giao diện đăng nhập dành riêng cho Cộng tác viên lấy link và xem báo cáo.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Vận hành đối soát',
        desc: 'Thực hiện các chu kỳ đối soát, duyệt đơn và chi trả hoa hồng tự động hàng tháng.',
      },
    ],
  },
  'ric-trust': {
    name: 'RIC TRUST',
    category: 'Bảo vệ thương hiệu',
    tagline: 'Tem QR xác thực & Chống lấn kênh',
    description:
      'Giải pháp tem QR thông minh đóng vai trò xác thực sản phẩm, bảo vệ thương hiệu. Quét mã QR độc nhất để chống hàng giả và theo dõi luồng hàng hóa qua các cấp phân phối.',
    target:
      'Đặc biệt phù hợp cho các doanh nghiệp sản xuất, thương hiệu mỹ phẩm, thực phẩm, dược phẩm có hệ thống phân phối phức tạp với nhiều đại lý và vùng bán hàng.',
    image: '/images/solutions/ric-trust.jpg',
    theme: 'from-orange-500 to-amber-400',
    iconColor: 'text-orange-500',
    bgLight: 'bg-orange-50',
    advantages: [
      {
        icon: Fingerprint,
        title: 'QR Độc nhất',
        desc: 'Mỗi sản phẩm mang một định danh duy nhất, không thể làm giả hay sao chép.',
      },
      {
        icon: ShieldCheck,
        title: 'Cảnh báo lấn kênh',
        desc: 'Phát hiện ngay lập tức tình trạng đại lý vùng này tuồn hàng sang bán phá giá ở vùng khác.',
      },
      {
        icon: Smartphone,
        title: 'Tương tác End-user',
        desc: 'Khách hàng quét mã không chỉ kiểm tra thật giả mà còn nhận điểm thưởng, bảo hành.',
      },
    ],
    benefits: [
      'Bảo vệ uy tín thương hiệu và sức khỏe người tiêu dùng trước vấn nạn hàng giả.',
      'Duy trì sự công bằng và ổn định giá trong toàn bộ hệ thống đại lý phân phối.',
      'Thu thập dữ liệu khách hàng cuối (End-user) - những người trực tiếp mở hộp sản phẩm.',
      'Kiểm soát chính xác số lượng hàng hóa lưu thông trên thị trường theo từng lô sản xuất.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Đăng ký & Định danh',
        desc: 'Thiết lập danh mục sản phẩm, khởi tạo dải mã định danh riêng biệt trên hệ thống.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'In ấn & Dán tem',
        desc: 'Xuất dữ liệu QR, tiến hành in tem vật lý bảo mật cao và dán lên bao bì sản phẩm.',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Quản trị phân phối',
        desc: 'Sử dụng app quét mã nội bộ để xuất kho, gắn lô hàng với từng đại lý/khu vực cụ thể.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Giám sát thị trường',
        desc: 'Hệ thống tự động tiếp nhận lượt quét từ khách hàng và trả về cảnh báo vi phạm (nếu có).',
      },
    ],
  },
  ricio: {
    name: 'RICIO',
    category: 'Quản trị chuyên ngành',
    tagline: 'CRM & PMS cho Du lịch Lưu trú',
    description:
      'Nền tảng quản trị tích hợp CRM và PMS bao quát toàn bộ hành trình của khách du lịch. Giải quyết nghiệp vụ từ quản lý quỹ phòng, đặt phòng, đối soát đến kết nối OTA.',
    target:
      'Tối ưu hóa riêng cho ngành dịch vụ lưu trú (Hospitality), phục vụ hoàn hảo các mô hình từ homestay, villa, khách sạn nhỏ đến các khu resort quy mô lớn.',
    image: '/images/solutions/ricio.jpg',
    theme: 'from-indigo-600 to-blue-500',
    iconColor: 'text-indigo-500',
    bgLight: 'bg-indigo-50',
    advantages: [
      {
        icon: Briefcase,
        title: 'PMS Trực quan',
        desc: 'Sơ đồ quản lý quỹ phòng, check-in, check-out và dọn phòng nhanh chóng, chống thất thoát.',
      },
      {
        icon: Users,
        title: 'CRM Chuyên sâu',
        desc: 'Tự động hóa chăm sóc khách hàng, lưu trữ thói quen và sở thích để cá nhân hóa dịch vụ.',
      },
      {
        icon: Globe,
        title: 'Đồng bộ kênh OTA',
        desc: 'Quản lý giá và phòng trống tập trung, đồng bộ hai chiều với Booking, Agoda, Traveloka...',
      },
    ],
    benefits: [
      'Ngăn chặn triệt để tình trạng Overbooking (đặt phòng trùng lặp) giữa các kênh.',
      'Giảm áp lực cho lễ tân, tăng tốc độ phục vụ và nâng tầm trải nghiệm khách lưu trú.',
      'Báo cáo doanh thu minh bạch, bóc tách rõ ràng tiền phòng, dịch vụ và nhà hàng.',
      'Gia tăng tỷ lệ khách quay lại (Retention Rate) nhờ hệ thống lưu trữ dữ liệu CRM.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Setup Sơ đồ phòng',
        desc: 'Khởi tạo sơ đồ phòng, hạng phòng, thiết lập các bảng giá linh hoạt theo mùa vụ.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Kết nối Channel Manager',
        desc: 'Đấu nối hệ thống RICIO với các kênh bán OTA và các cổng thanh toán online.',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Thiết lập CRM',
        desc: 'Cài đặt các mẫu email/tin nhắn xác nhận đặt phòng, cảm ơn sau check-out tự động.',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Training Bộ phận',
        desc: 'Đào tạo sử dụng riêng biệt cho từng bộ phận: Lễ tân, Buồng phòng, Kế toán và Sales.',
      },
    ],
  },
  'ric-erp': {
    name: 'RIC ERP',
    category: 'Quản trị chuyên ngành',
    tagline: 'Quản trị doanh nghiệp theo module',
    description:
      'Nền tảng quản trị doanh nghiệp tổng thể thiết kế theo cấu trúc phân hệ (module). Đồng bộ dữ liệu xuyên suốt từ Bán hàng, Mua hàng, Tồn kho, Kế toán đến Quản trị nhân sự.',
    target:
      'Dành cho các doanh nghiệp muốn số hóa và điều hành bài bản. Có thể mua theo từng gói module riêng lẻ tùy thuộc vào mức độ trưởng thành và quy mô vận hành.',
    image: '/images/solutions/ric-erp.jpg',
    theme: 'from-slate-800 to-slate-600',
    iconColor: 'text-slate-700',
    bgLight: 'bg-slate-100',
    advantages: [
      {
        icon: LayoutGrid,
        title: 'Cấu trúc Module',
        desc: 'Lắp ghép linh hoạt. Chỉ đầu tư vào các phân hệ doanh nghiệp thực sự cần ở hiện tại.',
      },
      {
        icon: Database,
        title: 'Đồng bộ dữ liệu',
        desc: 'Phá vỡ silo dữ liệu giữa các phòng ban. Thông biến luân chuyển xuyên suốt theo thời gian thực.',
      },
      {
        icon: BarChart3,
        title: 'Quản trị tập trung',
        desc: 'Cung cấp góc nhìn toàn cảnh (Dashboard 360) cho Ban Lãnh đạo ra quyết định nhanh chóng.',
      },
    ],
    benefits: [
      'Chuẩn hóa và tự động hóa toàn bộ quy trình vận hành phức tạp của doanh nghiệp.',
      'Giảm thiểu tối đa chi phí chìm, tối ưu hóa các nguồn lực (Nhân sự, Tài chính, Vật tư).',
      'Đảm bảo tính tuân thủ và minh bạch dữ liệu, hỗ trợ đắc lực cho công tác kiểm toán.',
      'Nền tảng vững chắc để doanh nghiệp dễ dàng mở rộng quy mô (Scale up) trong tương lai.',
    ],
    roadmap: [
      {
        phase: 'Giai đoạn 1',
        title: 'Tư vấn Nghiệp vụ',
        desc: 'Chuyên gia RICVINA làm việc cùng các trưởng bộ phận để "bắt mạch" và chuẩn hóa quy trình lõi.',
      },
      {
        phase: 'Giai đoạn 2',
        title: 'Lựa chọn Module',
        desc: 'Thống nhất các phân hệ cần triển khai (Vd: Sales + Inventory trước, Kế toán sau).',
      },
      {
        phase: 'Giai đoạn 3',
        title: 'Customize & Setup',
        desc: 'Tinh chỉnh hệ thống theo đặc thù doanh nghiệp, thực hiện di chuyển dữ liệu (Data migration).',
      },
      {
        phase: 'Giai đoạn 4',
        title: 'Triển khai & Chuyển giao',
        desc: 'Go-live từng phần, đào tạo người dùng cuối (End-user) và hỗ trợ vận hành trực tiếp.',
      },
    ],
  },
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = productDetails[id] || null

  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(-1)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!product) return

    const handleScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const triggerPoint = windowHeight * 0.6
      const start = rect.top - triggerPoint

      let progress = 0
      if (start < 0) {
        progress = Math.min(100, Math.max(0, (Math.abs(start) / rect.height) * 100))
      }
      setScrollProgress(progress)

      const stepSize = 100 / (product.roadmap.length || 1)
      let currentStep = -1
      product.roadmap.forEach((_: any, i: number) => {
        if (progress > i * stepSize + 5) {
          currentStep = i
        }
      })
      setActiveStep(currentStep)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [product])

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 pt-8 pb-20 text-white lg:pt-12 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div
          className={`absolute top-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-gradient-to-br ${product.theme} pointer-events-none opacity-20 blur-[120px]`}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-20">
          <div className="mb-12 flex items-center gap-2 text-sm font-medium text-slate-400">
            <Link href="/" className="transition-colors hover:text-white">
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="transition-colors hover:text-white">
              Sản phẩm
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-bold text-white">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-5 py-2 text-xs font-bold tracking-widest text-slate-300 uppercase backdrop-blur-md">
                <Rocket className="h-4 w-4 text-amber-400" /> {product.category}
              </div>

              <h1 className="mb-6 text-5xl leading-[1.1] font-black tracking-tight md:text-6xl lg:text-7xl">
                {product.name} <br />
                <span
                  className={`bg-gradient-to-r bg-clip-text text-transparent ${product.theme} mt-4 block text-4xl md:text-5xl`}
                >
                  {product.tagline}
                </span>
              </h1>

              <p className="mb-10 max-w-xl text-xl leading-relaxed font-medium text-slate-400">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/contact?interest=${id}`}
                  className={`rounded-full bg-gradient-to-r px-10 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 ${product.theme}`}
                >
                  Đăng ký Demo 1:1
                </Link>
                <a
                  href="#details"
                  className="flex items-center gap-2 rounded-full border border-slate-700 px-10 py-4 font-bold text-white transition-all hover:bg-slate-800"
                >
                  Tìm hiểu chi tiết <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              {/* =========================================================
                  ĐÂY LÀ ĐOẠN ĐÃ THÊM: NÚT TẢI APP CHỈ HIỂN THỊ KHI ID = 'ricio'
                  ========================================================= */}
              {id === 'ricio' && (
                <div className="mt-8 border-t border-white/10 pt-8 md:mt-10">
                  <p className="mb-4 text-sm font-medium tracking-wide text-slate-400">
                    Tải ứng dụng quản lý di động:
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Nút tải App Store */}
                    <Link
                      href="#" // Thay link iOS của Sếp vào đây
                      target="_blank"
                      className="group flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:ring-white/40"
                    >
                      <svg
                        className="h-7 w-7 fill-current transition-transform group-hover:scale-110"
                        viewBox="0 0 384 512"
                      >
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] leading-none font-medium tracking-wider text-slate-300 uppercase">
                          Download on the
                        </span>
                        <span className="text-sm leading-tight font-bold">App Store</span>
                      </div>
                    </Link>

                    {/* Nút tải Google Play */}
                    <Link
                      href="#" // Thay link Android của Sếp vào đây
                      target="_blank"
                      className="group flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-slate-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:ring-white/40"
                    >
                      <svg
                        className="h-7 w-7 fill-current transition-transform group-hover:scale-110"
                        viewBox="0 0 512 512"
                      >
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] leading-none font-medium tracking-wider text-slate-300 uppercase">
                          GET IT ON
                        </span>
                        <span className="text-sm leading-tight font-bold">Google Play</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-800 shadow-2xl md:aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                  <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-amber-400 uppercase">
                    <Target className="h-5 w-5" /> Giải pháp này dành cho ai?
                  </div>
                  <p className="text-base leading-relaxed font-medium text-white drop-shadow-md md:text-lg">
                    {product.target}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KHỐI ƯU ĐIỂM */}
      <section id="details" className="relative z-10 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
              Ưu điểm cốt lõi
            </h2>
            <p className="text-lg font-medium text-slate-500">
              Sức mạnh công nghệ giúp {product.name} tạo ra sự khác biệt trên thị trường.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.advantages.map((adv: any, idx: number) => (
              <div
                key={idx}
                className={`rounded-[2rem] border border-slate-100 p-8 ${product.bgLight} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ${product.iconColor}`}
                >
                  <adv.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-black text-slate-900">{adv.title}</h3>
                <p className="leading-relaxed font-medium text-slate-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LỢI ÍCH */}
      <section className="relative z-10 border-y border-slate-200 bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-slate-900">
                Giá trị thực tế mang lại cho doanh nghiệp
              </h2>
              <div className="space-y-6">
                {product.benefits.map((benefit: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:border-slate-300"
                  >
                    <CheckSquare className={`mt-0.5 h-6 w-6 shrink-0 ${product.iconColor}`} />
                    <p className="text-lg leading-relaxed font-semibold text-slate-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="group relative flex h-full min-h-[400px] flex-col justify-center overflow-hidden rounded-[3rem] p-10 shadow-2xl">
              <Image
                src={product.image}
                alt="Vận hành thông minh"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[3px] transition-colors duration-500 group-hover:bg-slate-900/70" />
              <div className="relative z-10 text-center">
                <Database className="mx-auto mb-8 h-24 w-24 animate-pulse text-white drop-shadow-lg" />
                <h3 className="mb-4 text-3xl font-black text-white drop-shadow-md">
                  Vận hành thông minh
                </h3>
                <p className="text-lg font-medium text-white/90 drop-shadow-md">
                  Giảm thiểu sai sót, tối đa hóa hiệu suất nguồn lực.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LỘ TRÌNH (REVEAL ANIMATION) */}
      <section className="relative z-10 bg-white py-24">
        <div className="container mx-auto px-6 md:px-20">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
              Lộ trình triển khai dự kiến
            </h2>
            <p className="text-lg font-medium text-slate-500">
              Quy trình làm việc chuyên nghiệp, rõ ràng giúp doanh nghiệp hoàn toàn an tâm.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl py-10" ref={timelineRef}>
            {/* Đường line gốc ĐÃ SỬA CĂN GIỮA */}
            <div className="absolute top-0 bottom-0 left-[28px] w-1.5 -translate-x-1/2 rounded-full bg-slate-100 md:left-1/2" />

            {/* Đường line tiến trình ĐÃ SỬA CĂN GIỮA */}
            <div
              className={`absolute top-0 left-[28px] w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b ${product.theme} transition-all duration-100 ease-out md:left-1/2`}
              style={{ height: `${scrollProgress}%` }}
            />

            {product.roadmap.map((step: any, idx: number) => {
              const isActive = idx <= activeStep

              // CSS của hiệu ứng Reveal (Ẩn & Trượt lên)
              const boxClass = isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              const circleClass = isActive
                ? `bg-gradient-to-r ${product.theme} scale-110 shadow-lg text-white border-white`
                : 'bg-slate-100 text-slate-400 scale-50 opacity-0 border-slate-200'

              return (
                <div
                  key={idx}
                  className={`relative mb-16 flex flex-col items-start justify-between md:flex-row md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden w-[45%] md:block" />

                  {/* Vòng tròn số ĐÃ SỬA VỊ TRÍ NẰM CHUẨN TRÊN ĐƯỜNG LINE */}
                  <div
                    className={`absolute left-[28px] z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 font-black transition-all duration-700 md:left-1/2 ${circleClass}`}
                  >
                    {idx + 1}
                  </div>

                  <div
                    className={`w-full pl-20 transition-all duration-700 ease-out md:w-[45%] md:pl-0 ${boxClass} ${idx % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}
                  >
                    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
                      <span
                        className={`mb-3 inline-block rounded-lg px-3 py-1 text-xs font-black tracking-wider uppercase ${product.bgLight} ${product.iconColor}`}
                      >
                        {step.phase}
                      </span>
                      <h4 className="mb-2 text-xl font-black text-slate-900">{step.title}</h4>
                      <p className="font-medium text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. KHỐI CTA */}
      <section className="relative container mx-auto border-t border-slate-100 bg-white px-6 py-20 md:px-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-20 text-center shadow-2xl md:px-16 md:py-24">
          <div
            className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l ${product.theme} pointer-events-none opacity-20 blur-[100px]`}
          />
          <h2 className="relative z-10 mx-auto mb-6 max-w-3xl text-3xl leading-tight font-black text-white md:text-5xl">
            Bắt đầu số hóa cùng {product.name}
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg font-medium text-slate-300">
            Tặng ngay gói tư vấn lộ trình chuyển đổi số và thiết lập hệ thống Demo 1:1 miễn phí cho
            doanh nghiệp của bạn.
          </p>
          <div className="relative z-10">
            <Link
              href={`/contact?interest=${id}`}
              className="inline-flex rounded-full bg-white px-10 py-4 font-bold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
            >
              Liên hệ chuyên gia tư vấn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
