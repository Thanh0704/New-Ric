'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  CalendarDays,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Newspaper,
  TrendingUp,
  ChevronRight as ChevronRightIcon,
  Search
} from 'lucide-react'

// ----------------------------------------------------------------------
// DANH MỤC TIN TỨC
// ----------------------------------------------------------------------
const newsCategories = [
  { id: 'all', label: 'Tất cả bài viết' },
  { id: 'Sản phẩm', label: 'Sản phẩm' },
  { id: 'Giải pháp', label: 'Giải pháp' },
  { id: 'IT', label: 'Công nghệ IT' },
  { id: 'Marketing', label: 'Marketing' },
  { id: 'Content', label: 'Content' },
  { id: 'Đa ngành', label: 'Ngành nghề khác' },
]

// ----------------------------------------------------------------------
// 36 MOCK DATA (6 bài cho mỗi mảng)
// ----------------------------------------------------------------------
const newsArticles = [
  // SẢN PHẨM
  { id: 1, slug: 'ric-travel-ra-mat-nen-tang-ota', category: 'Sản phẩm', author: 'Ban Giám đốc', publishedAt: '2026-08-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop', title: 'RIC Travel chính thức ra mắt nền tảng OTA thế hệ mới', excerpt: 'Giải pháp đặt phòng và quản lý chuỗi lưu trú tích hợp sâu hệ thống phần mềm quản trị, đánh dấu bước ngoặt lớn của RIC Travel trong hệ sinh thái số.' },
  { id: 2, slug: 'cap-nhat-ai-chatbot-erp', category: 'Sản phẩm', author: 'Product Team', publishedAt: '2026-08-01T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop', title: 'Cập nhật tính năng AI Chatbot cho hệ thống ERP Ricvina', excerpt: 'Giờ đây, Ban lãnh đạo có thể truy vấn số liệu tài chính, doanh thu và tồn kho chỉ bằng cách "nhắn tin" trực tiếp với trợ lý ảo AI trên hệ thống.' },
  { id: 3, slug: 'ra-mat-ung-dung-ric-pos', category: 'Sản phẩm', author: 'Product Team', publishedAt: '2026-07-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop', title: 'Ra mắt ứng dụng di động RIC POS dành riêng cho iPad và Tablet', excerpt: 'Mang trải nghiệm bán hàng di động lên một tầm cao mới. Nhỏ gọn, linh hoạt và đồng bộ dữ liệu theo thời gian thực (Real-time) về máy chủ trung tâm.' },
  { id: 4, slug: 'tich-hop-thanh-toan-apple-pay', category: 'Sản phẩm', author: 'Partnership Dept', publishedAt: '2026-06-22T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop', title: 'Tích hợp thanh toán Apple Pay và Google Pay trên toàn hệ thống', excerpt: 'RIC Việt Nam chính thức ký kết hợp tác, cho phép các cửa hàng sử dụng hệ thống của chúng tôi chấp nhận thanh toán chạm NFC tiện lợi.' },
  { id: 5, slug: 'module-quan-tri-kho-bai-wms', category: 'Sản phẩm', author: 'RITECH Dev', publishedAt: '2026-05-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', title: 'Module Quản trị kho bãi (WMS) phiên bản 2.0 có gì mới?', excerpt: 'Hỗ trợ quét mã vạch tốc độ cao, quản lý vị trí lưu kho 3D và tự động hóa quy trình nhặt hàng (Picking) giúp giảm 40% thời gian xuất kho.' },
  { id: 6, slug: 'danh-gia-nang-luc-360-hrm', category: 'Sản phẩm', author: 'HR Solutions', publishedAt: '2026-04-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', title: 'RIC HRM giới thiệu công cụ đánh giá năng lực nhân sự 360 độ', excerpt: 'Hệ thống tự động tổng hợp KPIs, điểm chuyên cần và phiếu đánh giá chéo từ đồng nghiệp để tạo ra báo cáo hiệu suất toàn diện cho từng nhân viên.' },

  // GIẢI PHÁP
  { id: 7, slug: 'chuyen-doi-so-nganh-ban-le', category: 'Giải pháp', author: 'Chuyên gia RIC', publishedAt: '2026-08-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', title: 'Chuyển đổi số ngành bán lẻ: Bắt đầu từ đâu trong năm 2026?', excerpt: 'Hướng dẫn từng bước cho các chủ cửa hàng muốn ứng dụng công nghệ để tối ưu hóa quy trình vận hành và quản lý tồn kho đa kênh một cách triệt để.' },
  { id: 8, slug: 'tu-dong-hoa-chuoi-cung-ung-fmcg', category: 'Giải pháp', author: 'Business Analyst', publishedAt: '2026-07-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop', title: 'Giải pháp tự động hóa chuỗi cung ứng cho doanh nghiệp FMCG', excerpt: 'Giải quyết bài toán luân chuyển hàng hóa tiêu dùng nhanh (FMCG) với hệ thống dự báo nhu cầu (Forecasting) bằng Trí tuệ nhân tạo.' },
  { id: 9, slug: 'ung-dung-rpa-ke-toan', category: 'Giải pháp', author: 'Financial Tech', publishedAt: '2026-06-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop', title: 'Ứng dụng RPA trong quy trình kế toán: Không còn nỗi lo nhập liệu', excerpt: 'Robot tự động trích xuất dữ liệu từ hóa đơn chứng từ, đối soát ngân hàng và hạch toán trực tiếp lên hệ thống ERP mà không cần sức người.' },
  { id: 10, slug: 'xay-dung-trung-tam-du-lieu-data-lake', category: 'Giải pháp', author: 'Data Engineer', publishedAt: '2026-05-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', title: 'Xây dựng trung tâm dữ liệu tập trung (Data Lake) cho tập đoàn', excerpt: 'Hợp nhất dữ liệu từ hàng chục công ty con, chi nhánh về một nguồn duy nhất để phục vụ cho các báo cáo phân tích Business Intelligence.' },
  { id: 11, slug: 'crm-chuyen-sau-nganh-bat-dong-san', category: 'Giải pháp', author: 'CRM Expert', publishedAt: '2026-04-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop', title: 'Quản lý vòng đời khách hàng (CRM) chuyên sâu cho ngành Bất động sản', excerpt: 'Theo dõi tiến độ giữ chỗ, đặt cọc, ký hợp đồng và kịch bản chăm sóc khách hàng tự động bám sát theo từng dự án.' },
  { id: 12, slug: 'toi-uu-hoa-quy-trinh-san-xuat-mes', category: 'Giải pháp', author: 'Tech Consultant', publishedAt: '2026-03-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', title: 'Tối ưu hóa quy trình sản xuất nhà máy thông qua hệ thống MES', excerpt: 'Phần mềm Hệ thống điều hành sản xuất (MES) giúp kiểm soát chất lượng trên từng chuyền, tính toán OEE (Hiệu suất thiết bị tổng thể) tức thời.' },

  // IT
  { id: 13, slug: 'bao-mat-du-lieu-dam-may-2', category: 'IT', author: 'RIC Security Team', publishedAt: '2026-08-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop', title: 'Bảo mật dữ liệu trên Cloud: Tiêu chuẩn ISO 27001 là gì?', excerpt: 'Tìm hiểu về tiêu chuẩn bảo mật khắt khe nhất thế giới và cách hệ sinh thái Ricvina bảo vệ dữ liệu tuyệt đối khỏi các cuộc tấn công mạng.' },
  { id: 14, slug: 'kien-truc-microservices', category: 'IT', author: 'Lead Architect', publishedAt: '2026-07-02T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', title: 'Xu hướng kiến trúc Microservices trong phát triển phần mềm doanh nghiệp', excerpt: 'Tại sao các hệ thống Monolithic (nguyên khối) dần lỗi thời, và làm thế nào Microservices giúp hệ thống chịu tải hàng triệu người dùng?' },
  { id: 15, slug: 'graphql-vs-rest-api', category: 'IT', author: 'Senior Dev', publishedAt: '2026-06-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1627398240309-089a14bcce4a?q=80&w=2070&auto=format&fit=crop', title: 'GraphQL vs REST API: Lựa chọn nào tối ưu cho hệ thống quy mô lớn?', excerpt: 'So sánh chi tiết về hiệu năng, bảo mật và khả năng bảo trì giữa 2 chuẩn thiết kế API phổ biến nhất hiện nay.' },
  { id: 16, slug: 'trien-khai-ci-cd-kubernetes', category: 'IT', author: 'DevOps Team', publishedAt: '2026-05-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop', title: 'Hướng dẫn triển khai CI/CD tự động với Kubernetes và Docker', excerpt: 'Cách đội ngũ kỹ sư RIC thiết lập pipeline tự động hóa việc kiểm thử và đưa phiên bản mới lên server mà không làm gián đoạn hệ thống.' },
  { id: 17, slug: 'tuong-lai-dien-toan-luong-tu', category: 'IT', author: 'Research Dept', publishedAt: '2026-04-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop', title: 'Tương lai của điện toán lượng tử và ảnh hưởng tới mã hóa dữ liệu', excerpt: 'Khi sức mạnh tính toán vượt ra ngoài giới hạn vật lý hiện tại, các thuật toán mã hóa AES hay RSA liệu có còn an toàn?' },
  { id: 18, slug: 'chong-tan-cong-ddos', category: 'IT', author: 'System Admin', publishedAt: '2026-03-22T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop', title: 'Chống lại các cuộc tấn công DDoS: Kinh nghiệm từ đội ngũ RIC', excerpt: 'Các kỹ thuật lọc lưu lượng (Traffic Scrubbing), định tuyến BGP và thiết lập Tường lửa ứng dụng web (WAF) để bảo vệ máy chủ.' },

  // MARKETING
  { id: 19, slug: 'xu-huong-inbound-marketing', category: 'Marketing', author: 'Marketing Dept', publishedAt: '2026-07-28T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', title: 'Inbound Marketing: Chìa khóa tăng trưởng bền vững cho B2B', excerpt: 'Thay vì chạy quảng cáo tốn kém, việc xây dựng nội dung chất lượng cao để thu hút khách hàng tự tìm đến đang là chiến lược cốt lõi.' },
  { id: 20, slug: 'toi-uu-hoa-pheu-chuyen-doi', category: 'Marketing', author: 'Performance Lead', publishedAt: '2026-06-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', title: 'Tối ưu hóa phễu chuyển đổi (Funnel) bằng dữ liệu hành vi người dùng', excerpt: 'Sử dụng Heatmap và A/B Testing để tìm ra những điểm "rơi rụng" (Drop-off) của khách hàng trên giao diện Website.' },
  { id: 21, slug: 'video-marketing-tiktok-reels', category: 'Marketing', author: 'Social Team', publishedAt: '2026-05-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop', title: 'Xu hướng Video ngắn trên TikTok và Reels B2B năm 2026', excerpt: 'Nắm bắt sự thay đổi của thuật toán phân phối: Khi các nội dung review giải pháp chuyên sâu lên ngôi thay vì các trend giải trí.' },
  { id: 22, slug: 'chien-luoc-omnichannel-marketing', category: 'Marketing', author: 'CMO', publishedAt: '2026-04-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Xây dựng chiến lược Omnichannel Marketing hiệu quả cho ngành bán lẻ', excerpt: 'Khách hàng thấy sản phẩm trên Facebook, nhận mã giảm giá qua Email và đến cửa hàng chốt sale. Đó chính là sức mạnh của Omnichannel.' },
  { id: 23, slug: 'marketing-automation-lead-nurturing', category: 'Marketing', author: 'Marketing Automation', publishedAt: '2026-03-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', title: 'Tự động hóa kịch bản nuôi dưỡng khách hàng tiềm năng (Lead Nurturing)', excerpt: 'Thiết lập các workflow gửi Email tự động dựa trên hành vi (click, tải tài liệu) để "hâm nóng" khách hàng trước khi chuyển cho bộ phận Sales.' },
  { id: 24, slug: 'danh-gia-roi-influencer-marketing', category: 'Marketing', author: 'Brand Manager', publishedAt: '2026-02-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2067&auto=format&fit=crop', title: 'Đánh giá hiệu quả (ROI) của các chiến dịch Influencer Marketing', excerpt: 'Không chỉ dựa vào lượt Like/Share. Cách thiết lập mã Tracking và UTM link để đo lường chính xác doanh thu đem về từ KOL/KOC.' },

  // CONTENT
  { id: 25, slug: 'nghe-thuat-ke-chuyen-thuong-hieu', category: 'Content', author: 'Creative Team', publishedAt: '2026-07-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', title: 'Nghệ thuật kể chuyện (Storytelling) trong thiết kế Website', excerpt: 'Làm thế nào để biến một website giới thiệu công ty khô khan thành một hành trình trải nghiệm thú vị giữ chân khách hàng lâu hơn?' },
  { id: 26, slug: 'viet-microcopy-tang-ctr', category: 'Content', author: 'UX Writer', publishedAt: '2026-06-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop', title: 'Cách viết Microcopy giúp tăng 30% tỷ lệ click (CTR) trên nút CTA', excerpt: 'Chỉ cần thay đổi cụm từ "Đăng ký" thành "Bắt đầu trải nghiệm miễn phí", những dòng text nhỏ bé có thể tạo ra khác biệt khổng lồ.' },
  { id: 27, slug: 'chien-luoc-noi-dung-hub-and-spoke', category: 'Content', author: 'SEO Expert', publishedAt: '2026-05-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop', title: 'Chiến lược xây dựng nội dung SEO mô hình Hub-and-Spoke', excerpt: 'Cách cấu trúc 1 bài viết nền tảng (Pillar Page) liên kết với hàng chục bài viết ngách (Cluster) để thống trị thứ hạng trên Google.' },
  { id: 28, slug: 'ux-writing-trong-saas', category: 'Content', author: 'Product Designer', publishedAt: '2026-04-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop', title: 'Tầm quan trọng của UX Writing trong ứng dụng phần mềm SaaS', excerpt: 'Thông báo lỗi thân thiện, hướng dẫn sử dụng rõ ràng (Onboarding) sẽ giúp giảm thiểu 50% số lượng ticket yêu cầu hỗ trợ.' },
  { id: 29, slug: 'su-dung-ai-san-xuat-noi-dung', category: 'Content', author: 'Content Lead', publishedAt: '2026-03-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1684369175836-8c440a34b2ed?q=80&w=2070&auto=format&fit=crop', title: 'Sử dụng AI (ChatGPT, Claude) để tăng tốc độ sản xuất nội dung số', excerpt: 'Đừng copy/paste nguyên si. Hướng dẫn cách tạo Prompts chuyên sâu để AI đóng vai trò như một trợ lý viết lách mang đậm văn phong.' },
  { id: 30, slug: 'xay-dung-brand-voice', category: 'Content', author: 'Brand Manager', publishedAt: '2026-02-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop', title: 'Hướng dẫn xây dựng Tone of Voice cho thương hiệu công nghệ', excerpt: 'Làm thế nào để giọng điệu của công ty công nghệ không còn cứng nhắc, máy móc mà trở nên gần gũi, đáng tin cậy và truyền cảm hứng?' },

  // ĐA NGÀNH
  { id: 31, slug: 'ung-dung-chuyen-doi-so-nong-nghiep', category: 'Đa ngành', author: 'RIC Solutions', publishedAt: '2026-07-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop', title: 'Đưa công nghệ vào Nông nghiệp công nghệ cao (AgriTech)', excerpt: 'Câu chuyện thực tế về việc ứng dụng hệ thống cảm biến IoT và phần mềm quản trị ERP vào các nông trại quy mô lớn tại Việt Nam.' },
  { id: 32, slug: 'edtech-giao-duc-truc-tuyen', category: 'Đa ngành', author: 'Education Tech', publishedAt: '2026-06-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop', title: 'EdTech: Sự chuyển mình của giáo dục trực tuyến hậu đại dịch', excerpt: 'Hệ thống Quản lý học tập (LMS) tích hợp thực tế ảo (VR) đang xóa nhòa khoảng cách giữa học online và học trực tiếp trên giảng đường.' },
  { id: 33, slug: 'healthtech-y-te-tu-xa', category: 'Đa ngành', author: 'Medical IT', publishedAt: '2026-05-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', title: 'HealthTech: Tương lai của y tế từ xa và hồ sơ bệnh án điện tử', excerpt: 'Công nghệ phân tích hình ảnh y khoa bằng AI và hệ thống lưu trữ bệnh án Cloud giúp các bệnh viện giảm tải và chẩn đoán chính xác hơn.' },
  { id: 34, slug: 'proptech-vr-bat-dong-san', category: 'Đa ngành', author: 'Real Estate', publishedAt: '2026-04-02T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop', title: 'PropTech: Ứng dụng thực tế ảo (VR/AR) trong tham quan bất động sản', excerpt: 'Khách hàng có thể "đi dạo" trong căn hộ mẫu ở bên kia bán cầu chỉ với một chiếc kính VR và nền tảng Web3D tương tác.' },
  { id: 35, slug: 'fintech-ngan-hang-so', category: 'Đa ngành', author: 'Fintech Lead', publishedAt: '2026-03-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop', title: 'FinTech: Sự trỗi dậy của ngân hàng số (Digital Banking)', excerpt: 'Quy trình eKYC (Định danh điện tử) và Open Banking API đang tạo ra một hệ sinh thái tài chính không giấy tờ và không cần đến phòng giao dịch.' },
  { id: 36, slug: 'logistics-ai-giao-hang', category: 'Đa ngành', author: 'Supply Chain', publishedAt: '2026-02-28T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop', title: 'Logistics: Sử dụng AI tối ưu hóa lộ trình giao hàng chặng cuối', excerpt: 'Thuật toán Machine Learning phân tích tình trạng giao thông, thời tiết và khối lượng hàng để tự động vẽ ra tuyến đường ngắn nhất cho shipper.' }
]

const ITEMS_PER_PAGE = 6

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  // 1. Reset page khi đổi Tab
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId)
    setCurrentPage(1)
  }

  // 2. Lọc dữ liệu theo Tab hiện tại
  const filteredArticles = useMemo(() => {
    return activeCategory === 'all' 
      ? newsArticles 
      : newsArticles.filter(a => a.category === activeCategory)
  }, [activeCategory])

  // 3. Logic: Chỉ hiện bài to (Featured) nếu ở tab Tất cả
  const showFeatured = activeCategory === 'all' && filteredArticles.length > 0
  const featuredArticle = filteredArticles[0]
  
  // 4. Lấy danh sách cần Phân trang (bỏ bài to nếu có)
  const listToPaginate = showFeatured ? filteredArticles.slice(1) : filteredArticles

  // 5. Tính toán phân trang
  const totalPages = Math.ceil(listToPaginate.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedArticles = listToPaginate.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30">
      
      {/* 1. BREADCRUMB */}
      <div className="pt-8 pb-4 border-b border-slate-200 bg-white/90 backdrop-blur-xl relative z-20">
        <div className="container mx-auto px-6 md:px-20 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-slate-900 font-semibold">Tin tức & Sự kiện</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-12 bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)]" />
        
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-6">
              <Newspaper className="h-4 w-4 text-blue-600" /> Trạm tin tức RIC
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Góc nhìn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Chuyên gia.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Cập nhật những xu hướng công nghệ mới nhất, kiến thức quản trị thực chiến và những câu chuyện chuyển đổi số thành công từ RIC Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TABS PHÂN LOẠI TIN TỨC (Ghim khi cuộn) */}
      <section className="bg-white/90 backdrop-blur-xl sticky top-0 z-40 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex overflow-x-auto no-scrollbar gap-3 py-4">
            {newsCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BÀI VIẾT NỔI BẬT (Chỉ hiện khi ở tab Tất cả và đang ở Trang 1) */}
      {showFeatured && featuredArticle && currentPage === 1 && (
        <section className="pb-16 pt-16 bg-white relative z-10">
          <div className="container mx-auto px-6 md:px-20">
            <Link
              href={`/news/${featuredArticle.slug}`}
              className="group flex flex-col lg:flex-row overflow-hidden rounded-[3rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Hình ảnh */}
              <div className="relative h-[300px] w-full lg:h-[450px] lg:w-3/5 overflow-hidden border-r border-slate-100">
                <img
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-black tracking-widest text-blue-600 uppercase shadow-lg border border-slate-100">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  Bài mới nhất
                </div>
              </div>

              {/* Nội dung */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:w-2/5 bg-slate-50/50 group-hover:bg-white transition-colors duration-500">
                <span className="mb-4 inline-block w-fit rounded-full bg-cyan-100 border border-cyan-200 px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-700 uppercase">
                  {featuredArticle.category}
                </span>
                <h2 className="mb-6 text-3xl md:text-4xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600 font-medium line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <CalendarDays className="h-5 w-5 text-slate-400" />
                    <span>{new Date(featuredArticle.publishedAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-white border border-blue-100 shadow-sm px-5 py-2.5 rounded-full transition-all group-hover:bg-blue-600 group-hover:text-white">
                    Đọc ngay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 5. LƯỚI BÀI VIẾT (Grid) */}
      <section className={`pb-32 bg-white ${(!showFeatured || currentPage > 1) ? 'pt-16' : ''}`}>
        <div className="container mx-auto px-6 md:px-20">
          
          {showFeatured && currentPage === 1 && (
            <div className="flex items-center gap-3 mb-12 border-t border-slate-200 pt-16">
              <TrendingUp className="h-6 w-6 text-slate-400" />
              <h3 className="text-2xl font-black text-slate-900">Các bài viết khác</h3>
            </div>
          )}

          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-md border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300"
                  >
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                      <span className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-slate-900 uppercase shadow-md border border-white">
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-1 flex-col p-8 bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                      <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="mb-8 text-slate-600 font-medium line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                          <CalendarDays className="h-4 w-4 text-slate-400" />
                          <span>{new Date(article.publishedAt).toLocaleDateString('vi-VN')}</span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* COMPONENT PHÂN TRANG (Render khi có nhiều hơn 1 trang) */}
              {totalPages > 1 && (
                <div className="mt-20 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:hover:bg-white cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all ${
                          currentPage === page 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:-translate-y-1' 
                            : 'border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  })}
                  
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:hover:bg-white cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            // Trạng thái Trống (Khi chọn danh mục chưa có bài viết)
            <div className="py-24 text-center text-slate-400 border border-slate-200 rounded-[3rem] bg-slate-50">
              <Search className="h-16 w-16 mx-auto mb-6 opacity-20" />
              <p className="text-xl font-medium">Đang cập nhật thêm bài viết trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}