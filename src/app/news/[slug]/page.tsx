import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  User,
  Tag,
  ChevronRight
} from 'lucide-react'

// ----------------------------------------------------------------------
// 36 MOCK DATA (Đồng bộ chuẩn 100% với trang Danh sách)
// ----------------------------------------------------------------------
const newsArticles = [
  // SẢN PHẨM
  { id: 1, slug: 'ric-travel-ra-mat-nen-tang-ota', category: 'Sản phẩm', author: 'Ban Giám đốc', publishedAt: '2026-08-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop', title: 'RIC Travel chính thức ra mắt nền tảng OTA thế hệ mới', excerpt: 'Giải pháp đặt phòng và quản lý chuỗi lưu trú tích hợp sâu hệ thống phần mềm quản trị, đánh dấu bước ngoặt lớn của RIC Travel trong hệ sinh thái số.', content: 'Nội dung chi tiết của bài viết đang được cập nhật. Đây là giải pháp đột phá giúp tối ưu hóa quy trình quản lý khách sạn, resort và homestay...' },
  { id: 2, slug: 'cap-nhat-ai-chatbot-erp', category: 'Sản phẩm', author: 'Product Team', publishedAt: '2026-08-01T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop', title: 'Cập nhật tính năng AI Chatbot cho hệ thống ERP Ricvina', excerpt: 'Giờ đây, Ban lãnh đạo có thể truy vấn số liệu tài chính, doanh thu và tồn kho chỉ bằng cách "nhắn tin" trực tiếp với trợ lý ảo AI trên hệ thống.', content: 'Với bản cập nhật mới nhất, AI Chatbot trên ERP Ricvina không chỉ trả lời các câu hỏi đóng mà còn có khả năng tự động trích xuất và vẽ biểu đồ doanh thu ngay trong khung chat...' },
  { id: 3, slug: 'ra-mat-ung-dung-ric-pos', category: 'Sản phẩm', author: 'Product Team', publishedAt: '2026-07-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop', title: 'Ra mắt ứng dụng di động RIC POS dành riêng cho iPad và Tablet', excerpt: 'Mang trải nghiệm bán hàng di động lên một tầm cao mới. Nhỏ gọn, linh hoạt và đồng bộ dữ liệu theo thời gian thực (Real-time) về máy chủ trung tâm.', content: 'Giờ đây nhân viên phục vụ tại nhà hàng có thể cầm trực tiếp iPad tới bàn khách để order, dữ liệu ngay lập tức được đẩy xuống bếp và quầy thu ngân mà không có độ trễ.' },
  { id: 4, slug: 'tich-hop-thanh-toan-apple-pay', category: 'Sản phẩm', author: 'Partnership Dept', publishedAt: '2026-06-22T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop', title: 'Tích hợp thanh toán Apple Pay và Google Pay trên toàn hệ thống', excerpt: 'RIC Việt Nam chính thức ký kết hợp tác, cho phép các cửa hàng sử dụng hệ thống của chúng tôi chấp nhận thanh toán chạm NFC tiện lợi.', content: 'Xu hướng thanh toán không chạm (Contactless) đang bùng nổ. Việc tích hợp Apple Pay giúp khách hàng thanh toán chỉ trong 1 giây bằng iPhone hoặc Apple Watch.' },
  { id: 5, slug: 'module-quan-tri-kho-bai-wms', category: 'Sản phẩm', author: 'RITECH Dev', publishedAt: '2026-05-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', title: 'Module Quản trị kho bãi (WMS) phiên bản 2.0 có gì mới?', excerpt: 'Hỗ trợ quét mã vạch tốc độ cao, quản lý vị trí lưu kho 3D và tự động hóa quy trình nhặt hàng (Picking) giúp giảm 40% thời gian xuất kho.', content: 'Hệ thống WMS 2.0 cung cấp bản đồ kho 3D trực quan, giúp nhân viên kho dễ dàng định vị chính xác vị trí của từng kiện hàng trên kệ kệ cao tầng.' },
  { id: 6, slug: 'danh-gia-nang-luc-360-hrm', category: 'Sản phẩm', author: 'HR Solutions', publishedAt: '2026-04-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', title: 'RIC HRM giới thiệu công cụ đánh giá năng lực nhân sự 360 độ', excerpt: 'Hệ thống tự động tổng hợp KPIs, điểm chuyên cần và phiếu đánh giá chéo từ đồng nghiệp để tạo ra báo cáo hiệu suất toàn diện cho từng nhân viên.', content: 'Không còn cảm tính trong việc thăng tiến. Mọi quyết định nhân sự giờ đây được dựa trên dữ liệu hiệu suất minh bạch.' },

  // GIẢI PHÁP
  { id: 7, slug: 'chuyen-doi-so-nganh-ban-le', category: 'Giải pháp', author: 'Chuyên gia RIC', publishedAt: '2026-08-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', title: 'Chuyển đổi số ngành bán lẻ: Bắt đầu từ đâu trong năm 2026?', excerpt: 'Hướng dẫn từng bước cho các chủ cửa hàng muốn ứng dụng công nghệ để tối ưu hóa quy trình vận hành và quản lý tồn kho đa kênh một cách triệt để.', content: 'Trong bối cảnh thị trường cạnh tranh gay gắt, các doanh nghiệp bán lẻ truyền thống đang phải đối mặt với nhiều thách thức từ việc quản lý tồn kho, chăm sóc khách hàng đến tối ưu hóa chi phí vận hành.\n\nChuyển đổi số không còn là lựa chọn mà là con đường bắt buộc để sinh tồn và phát triển. Việc giữ nguyên các quy trình ghi chép sổ sách hoặc dùng các phần mềm lỗi thời sẽ khiến doanh nghiệp chậm nhịp so với đối thủ.\n\nBước đầu tiên và quan trọng nhất là trang bị một hệ thống quản lý bán hàng đa kênh (Omnichannel) kết hợp với ERP. Điều này giúp đồng bộ dữ liệu từ online đến offline, quản lý kho hàng theo thời gian thực và mang lại trải nghiệm mua sắm liền mạch cho khách hàng.' },
  { id: 8, slug: 'tu-dong-hoa-chuoi-cung-ung-fmcg', category: 'Giải pháp', author: 'Business Analyst', publishedAt: '2026-07-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop', title: 'Giải pháp tự động hóa chuỗi cung ứng cho doanh nghiệp FMCG', excerpt: 'Giải quyết bài toán luân chuyển hàng hóa tiêu dùng nhanh (FMCG) với hệ thống dự báo nhu cầu (Forecasting) bằng Trí tuệ nhân tạo.', content: 'Ngành FMCG đòi hỏi tốc độ xoân vòng vốn và hàng hóa cực nhanh. Bất kỳ sự chậm trễ nào trong khâu cung ứng đều dẫn đến việc hết hạn sử dụng sản phẩm hoặc mất thị phần.' },
  { id: 9, slug: 'ung-dung-rpa-ke-toan', category: 'Giải pháp', author: 'Financial Tech', publishedAt: '2026-06-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop', title: 'Ứng dụng RPA trong quy trình kế toán: Không còn nỗi lo nhập liệu', excerpt: 'Robot tự động trích xuất dữ liệu từ hóa đơn chứng từ, đối soát ngân hàng và hạch toán trực tiếp lên hệ thống ERP mà không cần sức người.', content: 'Công nghệ RPA (Robotic Process Automation) đã chứng minh khả năng thay thế con người trong các tác vụ lặp đi lặp lại với độ chính xác 100%.' },
  { id: 10, slug: 'xay-dung-trung-tam-du-lieu-data-lake', category: 'Giải pháp', author: 'Data Engineer', publishedAt: '2026-05-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', title: 'Xây dựng trung tâm dữ liệu tập trung (Data Lake) cho tập đoàn', excerpt: 'Hợp nhất dữ liệu từ hàng chục công ty con, chi nhánh về một nguồn duy nhất để phục vụ cho các báo cáo phân tích Business Intelligence.', content: 'Data Lake cho phép lưu trữ dữ liệu thô ở mọi định dạng, tạo tiền đề vững chắc cho việc triển khai AI và Machine Learning trong tương lai.' },
  { id: 11, slug: 'crm-chuyen-sau-nganh-bat-dong-san', category: 'Giải pháp', author: 'CRM Expert', publishedAt: '2026-04-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop', title: 'Quản lý vòng đời khách hàng (CRM) chuyên sâu cho ngành Bất động sản', excerpt: 'Theo dõi tiến độ giữ chỗ, đặt cọc, ký hợp đồng và kịch bản chăm sóc khách hàng tự động bám sát theo từng dự án.', content: 'Đặc thù ngành BĐS là chu kỳ bán hàng dài và giá trị sản phẩm lớn. Một hệ thống CRM chuyên sâu sẽ giúp Sales không bỏ lỡ bất kỳ điểm chạm nào với khách hàng.' },
  { id: 12, slug: 'toi-uu-hoa-quy-trinh-san-xuat-mes', category: 'Giải pháp', author: 'Tech Consultant', publishedAt: '2026-03-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', title: 'Tối ưu hóa quy trình sản xuất nhà máy thông qua hệ thống MES', excerpt: 'Phần mềm Hệ thống điều hành sản xuất (MES) giúp kiểm soát chất lượng trên từng chuyền, tính toán OEE (Hiệu suất thiết bị tổng thể) tức thời.', content: 'Biết chính xác nguyên nhân gây lãng phí nguyên vật liệu và thời gian máy chết (Downtime) chính là chìa khóa tối ưu chi phí nhà máy.' },

  // IT
  { id: 13, slug: 'bao-mat-du-lieu-dam-may-2', category: 'IT', author: 'RIC Security Team', publishedAt: '2026-08-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop', title: 'Bảo mật dữ liệu trên Cloud: Tiêu chuẩn ISO 27001 là gì?', excerpt: 'Tìm hiểu về tiêu chuẩn bảo mật khắt khe nhất thế giới và cách hệ sinh thái Ricvina bảo vệ dữ liệu tuyệt đối khỏi các cuộc tấn công mạng.', content: 'ISO 27001 không chỉ là một chứng chỉ, nó là một khuôn khổ toàn diện yêu cầu doanh nghiệp phải liên tục đánh giá và phòng ngừa rủi ro thông tin.' },
  { id: 14, slug: 'kien-truc-microservices', category: 'IT', author: 'Lead Architect', publishedAt: '2026-07-02T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', title: 'Xu hướng kiến trúc Microservices trong phát triển phần mềm doanh nghiệp', excerpt: 'Tại sao các hệ thống Monolithic (nguyên khối) dần lỗi thời, và làm thế nào Microservices giúp hệ thống chịu tải hàng triệu người dùng?', content: 'Chia nhỏ hệ thống thành các dịch vụ độc lập giúp team Dev dễ dàng nâng cấp một tính năng mà không sợ làm sập toàn bộ ứng dụng.' },
  { id: 15, slug: 'graphql-vs-rest-api', category: 'IT', author: 'Senior Dev', publishedAt: '2026-06-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1627398240309-089a14bcce4a?q=80&w=2070&auto=format&fit=crop', title: 'GraphQL vs REST API: Lựa chọn nào tối ưu cho hệ thống quy mô lớn?', excerpt: 'So sánh chi tiết về hiệu năng, bảo mật và khả năng bảo trì giữa 2 chuẩn thiết kế API phổ biến nhất hiện nay.', content: 'GraphQL cung cấp sự linh hoạt tuyệt vời cho Frontend khi chỉ truy vấn đúng lượng dữ liệu cần thiết, giảm thiểu tình trạng Over-fetching.' },
  { id: 16, slug: 'trien-khai-ci-cd-kubernetes', category: 'IT', author: 'DevOps Team', publishedAt: '2026-05-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop', title: 'Hướng dẫn triển khai CI/CD tự động với Kubernetes và Docker', excerpt: 'Cách đội ngũ kỹ sư RIC thiết lập pipeline tự động hóa việc kiểm thử và đưa phiên bản mới lên server mà không làm gián đoạn hệ thống.', content: 'Với sức mạnh của K8s, việc Zero-downtime Deployment (cập nhật không gián đoạn) trở nên khả thi và an toàn hơn bao giờ hết.' },
  { id: 17, slug: 'tuong-lai-dien-toan-luong-tu', category: 'IT', author: 'Research Dept', publishedAt: '2026-04-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop', title: 'Tương lai của điện toán lượng tử và ảnh hưởng tới mã hóa dữ liệu', excerpt: 'Khi sức mạnh tính toán vượt ra ngoài giới hạn vật lý hiện tại, các thuật toán mã hóa AES hay RSA liệu có còn an toàn?', content: 'Thế giới công nghệ đang rục rịch chuẩn bị cho kỷ nguyên "Post-Quantum Cryptography" (Mật mã học hậu lượng tử).' },
  { id: 18, slug: 'chong-tan-cong-ddos', category: 'IT', author: 'System Admin', publishedAt: '2026-03-22T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069&auto=format&fit=crop', title: 'Chống lại các cuộc tấn công DDoS: Kinh nghiệm từ đội ngũ RIC', excerpt: 'Các kỹ thuật lọc lưu lượng (Traffic Scrubbing), định tuyến BGP và thiết lập Tường lửa ứng dụng web (WAF) để bảo vệ máy chủ.', content: 'Tấn công DDoS ngày càng tinh vi với quy mô Terabit. Việc thiết lập hệ thống cảnh báo sớm (Early Warning) là vô cùng quan trọng.' },

  // MARKETING
  { id: 19, slug: 'xu-huong-inbound-marketing', category: 'Marketing', author: 'Marketing Dept', publishedAt: '2026-07-28T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', title: 'Inbound Marketing: Chìa khóa tăng trưởng bền vững cho B2B', excerpt: 'Thay vì chạy quảng cáo tốn kém, việc xây dựng nội dung chất lượng cao để thu hút khách hàng tự tìm đến đang là chiến lược cốt lõi.', content: 'Marketing hiện đại không phải là hét vào mặt khách hàng, mà là trở thành giải pháp mà họ đang chủ động tìm kiếm trên Google.' },
  { id: 20, slug: 'toi-uu-hoa-pheu-chuyen-doi', category: 'Marketing', author: 'Performance Lead', publishedAt: '2026-06-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', title: 'Tối ưu hóa phễu chuyển đổi (Funnel) bằng dữ liệu hành vi người dùng', excerpt: 'Sử dụng Heatmap và A/B Testing để tìm ra những điểm "rơi rụng" (Drop-off) của khách hàng trên giao diện Website.', content: 'Đôi khi chỉ một sự thay đổi nhỏ về màu sắc nút bấm hoặc vị trí form điền thông tin có thể tăng tỷ lệ chuyển đổi (CR) lên 50%.' },
  { id: 21, slug: 'video-marketing-tiktok-reels', category: 'Marketing', author: 'Social Team', publishedAt: '2026-05-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop', title: 'Xu hướng Video ngắn trên TikTok và Reels B2B năm 2026', excerpt: 'Nắm bắt sự thay đổi của thuật toán phân phối: Khi các nội dung review giải pháp chuyên sâu lên ngôi thay vì các trend giải trí.', content: 'B2B không có nghĩa là nhàm chán. Cách các kỹ sư phần mềm diễn giải tính năng kỹ thuật thông qua video ngắn 60s đang cực kỳ thu hút.' },
  { id: 22, slug: 'chien-luoc-omnichannel-marketing', category: 'Marketing', author: 'CMO', publishedAt: '2026-04-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Xây dựng chiến lược Omnichannel Marketing hiệu quả cho ngành bán lẻ', excerpt: 'Khách hàng thấy sản phẩm trên Facebook, nhận mã giảm giá qua Email và đến cửa hàng chốt sale. Đó chính là sức mạnh của Omnichannel.', content: 'Hợp nhất dữ liệu khách hàng từ đa kênh về một nền tảng CDP (Customer Data Platform) là bắt buộc để có trải nghiệm đồng nhất.' },
  { id: 23, slug: 'marketing-automation-lead-nurturing', category: 'Marketing', author: 'Marketing Automation', publishedAt: '2026-03-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', title: 'Tự động hóa kịch bản nuôi dưỡng khách hàng tiềm năng (Lead Nurturing)', excerpt: 'Thiết lập các workflow gửi Email tự động dựa trên hành vi (click, tải tài liệu) để "hâm nóng" khách hàng trước khi chuyển cho bộ phận Sales.', content: 'Lead Nurturing giúp tiết kiệm thời gian cho Sales bằng cách lọc ra những khách hàng thực sự có nhu cầu mua hàng (Hot Leads).' },
  { id: 24, slug: 'danh-gia-roi-influencer-marketing', category: 'Marketing', author: 'Brand Manager', publishedAt: '2026-02-05T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2067&auto=format&fit=crop', title: 'Đánh giá hiệu quả (ROI) của các chiến dịch Influencer Marketing', excerpt: 'Không chỉ dựa vào lượt Like/Share. Cách thiết lập mã Tracking và UTM link để đo lường chính xác doanh thu đem về từ KOL/KOC.', content: 'Một Macro Influencer có hàng triệu follower chưa chắc mang lại hiệu quả chuyển đổi bằng một Micro Influencer có tệp audience ngách.' },

  // CONTENT
  { id: 25, slug: 'nghe-thuat-ke-chuyen-thuong-hieu', category: 'Content', author: 'Creative Team', publishedAt: '2026-07-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', title: 'Nghệ thuật kể chuyện (Storytelling) trong thiết kế Website', excerpt: 'Làm thế nào để biến một website giới thiệu công ty khô khan thành một hành trình trải nghiệm thú vị giữ chân khách hàng lâu hơn?', content: 'Mọi người không nhớ tính năng sản phẩm, họ nhớ cảm giác mà sản phẩm đó mang lại thông qua câu chuyện bạn kể.' },
  { id: 26, slug: 'viet-microcopy-tang-ctr', category: 'Content', author: 'UX Writer', publishedAt: '2026-06-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop', title: 'Cách viết Microcopy giúp tăng 30% tỷ lệ click (CTR) trên nút CTA', excerpt: 'Chỉ cần thay đổi cụm từ "Đăng ký" thành "Bắt đầu trải nghiệm miễn phí", những dòng text nhỏ bé có thể tạo ra khác biệt khổng lồ.', content: 'UX Writing (Viết cho trải nghiệm người dùng) đòi hỏi sự ngắn gọn, rõ ràng và mang tính định hướng hành vi cực cao.' },
  { id: 27, slug: 'chien-luoc-noi-dung-hub-and-spoke', category: 'Content', author: 'SEO Expert', publishedAt: '2026-05-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop', title: 'Chiến lược xây dựng nội dung SEO mô hình Hub-and-Spoke', excerpt: 'Cách cấu trúc 1 bài viết nền tảng (Pillar Page) liên kết với hàng chục bài viết ngách (Cluster) để thống trị thứ hạng trên Google.', content: 'Mô hình này giúp Google dễ dàng hiểu được cấu trúc chuyên môn của website, từ đó đẩy toàn bộ các từ khóa lên Top 1 cách bền vững.' },
  { id: 28, slug: 'ux-writing-trong-saas', category: 'Content', author: 'Product Designer', publishedAt: '2026-04-18T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop', title: 'Tầm quan trọng của UX Writing trong ứng dụng phần mềm SaaS', excerpt: 'Thông báo lỗi thân thiện, hướng dẫn sử dụng rõ ràng (Onboarding) sẽ giúp giảm thiểu 50% số lượng ticket yêu cầu hỗ trợ.', content: 'Thay vì báo lỗi "Error 404 - Bad Request", hãy viết "Rất tiếc, hệ thống không tìm thấy dữ liệu bạn yêu cầu. Vui lòng thử lại".' },
  { id: 29, slug: 'su-dung-ai-san-xuat-noi-dung', category: 'Content', author: 'Content Lead', publishedAt: '2026-03-25T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1684369175836-8c440a34b2ed?q=80&w=2070&auto=format&fit=crop', title: 'Sử dụng AI (ChatGPT, Claude) để tăng tốc độ sản xuất nội dung số', excerpt: 'Đừng copy/paste nguyên si. Hướng dẫn cách tạo Prompts chuyên sâu để AI đóng vai trò như một trợ lý viết lách mang đậm văn phong.', content: 'Kỹ năng Prompt Engineering sẽ quyết định liệu bài viết của bạn có hồn hay giống hệt hàng nghìn bài viết "rác" do AI tạo ra trên mạng.' },
  { id: 30, slug: 'xay-dung-brand-voice', category: 'Content', author: 'Brand Manager', publishedAt: '2026-02-12T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop', title: 'Hướng dẫn xây dựng Tone of Voice cho thương hiệu công nghệ', excerpt: 'Làm thế nào để giọng điệu của công ty công nghệ không còn cứng nhắc, máy móc mà trở nên gần gũi, đáng tin cậy và truyền cảm hứng?', content: 'Tính chuyên gia không đồng nghĩa với ngôn từ học thuật khó hiểu. Sự tinh tế nằm ở chỗ biến thứ phức tạp thành đơn giản.' },

  // ĐA NGÀNH
  { id: 31, slug: 'ung-dung-chuyen-doi-so-nong-nghiep', category: 'Đa ngành', author: 'RIC Solutions', publishedAt: '2026-07-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop', title: 'Đưa công nghệ vào Nông nghiệp công nghệ cao (AgriTech)', excerpt: 'Câu chuyện thực tế về việc ứng dụng hệ thống cảm biến IoT và phần mềm quản trị ERP vào các nông trại quy mô lớn tại Việt Nam.', content: 'Cảm biến độ ẩm, nhiệt độ tự động báo dữ liệu về hệ thống máy chủ để kích hoạt hệ thống tưới tiêu một cách hoàn toàn tự động.' },
  { id: 32, slug: 'edtech-giao-duc-truc-tuyen', category: 'Đa ngành', author: 'Education Tech', publishedAt: '2026-06-20T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop', title: 'EdTech: Sự chuyển mình của giáo dục trực tuyến hậu đại dịch', excerpt: 'Hệ thống Quản lý học tập (LMS) tích hợp thực tế ảo (VR) đang xóa nhòa khoảng cách giữa học online và học trực tiếp trên giảng đường.', content: 'Các nền tảng EdTech không chỉ dừng lại ở Zoom hay Teams, mà tiến tới việc theo dõi hành vi học tập để đưa ra lộ trình cá nhân hóa.' },
  { id: 33, slug: 'healthtech-y-te-tu-xa', category: 'Đa ngành', author: 'Medical IT', publishedAt: '2026-05-15T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', title: 'HealthTech: Tương lai của y tế từ xa và hồ sơ bệnh án điện tử', excerpt: 'Công nghệ phân tích hình ảnh y khoa bằng AI và hệ thống lưu trữ bệnh án Cloud giúp các bệnh viện giảm tải và chẩn đoán chính xác hơn.', content: 'Hệ thống HIS/LIS hiện đại cho phép kết nối liên thông dữ liệu giữa các bệnh viện, giúp bệnh nhân không phải mang theo sổ y bạ giấy.' },
  { id: 34, slug: 'proptech-vr-bat-dong-san', category: 'Đa ngành', author: 'Real Estate', publishedAt: '2026-04-02T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop', title: 'PropTech: Ứng dụng thực tế ảo (VR/AR) trong tham quan bất động sản', excerpt: 'Khách hàng có thể "đi dạo" trong căn hộ mẫu ở bên kia bán cầu chỉ với một chiếc kính VR và nền tảng Web3D tương tác.', content: 'Trải nghiệm 360 độ giúp tăng 60% khả năng chốt sale đối với các dự án chưa thành hình hoặc khách hàng ở xa.' },
  { id: 35, slug: 'fintech-ngan-hang-so', category: 'Đa ngành', author: 'Fintech Lead', publishedAt: '2026-03-10T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop', title: 'FinTech: Sự trỗi dậy của ngân hàng số (Digital Banking)', excerpt: 'Quy trình eKYC (Định danh điện tử) và Open Banking API đang tạo ra một hệ sinh thái tài chính không giấy tờ và không cần đến phòng giao dịch.', content: 'Chỉ với chiếc điện thoại, khách hàng có thể mở tài khoản, vay vốn, đầu tư chứng khoán thông qua các siêu ứng dụng (Super Apps).' },
  { id: 36, slug: 'logistics-ai-giao-hang', category: 'Đa ngành', author: 'Supply Chain', publishedAt: '2026-02-28T00:00:00Z', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?q=80&w=2070&auto=format&fit=crop', title: 'Logistics: Sử dụng AI tối ưu hóa lộ trình giao hàng chặng cuối', excerpt: 'Thuật toán Machine Learning phân tích tình trạng giao thông, thời tiết và khối lượng hàng để tự động vẽ ra tuyến đường ngắn nhất cho shipper.', content: 'Bài toán "Last-mile Delivery" luôn là vấn đề tốn kém nhất trong chuỗi cung ứng. AI đang giải quyết điều này một cách xuất sắc.' }
]

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : [],
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  // Logic tìm bài kế tiếp / bài trước
  const currentIndex = newsArticles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null
  
  // Logic tìm bài viết cùng chuyên mục (related)
  const relatedArticles = newsArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  const paragraphs = article.content.split('\n\n').filter(Boolean)
  const readTime = Math.max(3, Math.ceil(article.content.split(' ').length / 200))

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30 pb-24">
      
      {/* BREADCRUMB */}
      <div className="pt-28 pb-4 border-b border-slate-200 bg-white/90 backdrop-blur-xl relative z-20">
        <div className="container mx-auto px-6 md:px-20 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/news" className="hover:text-blue-600 transition-colors">Tin tức</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] md:max-w-md">{article.title}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE HEADER */}
      <section className="px-6 pt-16 pb-12 md:px-20 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-cyan-50 border border-cyan-100 px-5 py-2 text-xs font-bold tracking-widest text-cyan-700 uppercase mb-8">
            {article.category}
          </span>
          <h1 className="text-4xl leading-[1.15] font-black text-slate-900 md:text-5xl lg:text-[4rem] mb-10 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700">
              <User className="h-4 w-4 text-blue-600" /> {article.author}
            </span>
            <span className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700">
              <CalendarDays className="h-4 w-4 text-cyan-600" />
              {new Date(article.publishedAt).toLocaleDateString('vi-VN', {
                day: '2-digit', month: 'long', year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700">
              <Clock className="h-4 w-4 text-slate-600" /> {readTime} phút đọc
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT & SIDEBAR */}
      <section className="px-6 md:px-20">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Cover Image Panorama */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl mb-20 border border-slate-200 group">
             <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Cột Trái: Nội dung bài viết */}
            <div className="lg:col-span-8">
              <article className="space-y-8 font-medium">
                {/* Đoạn mở đầu (Excerpt) làm nổi bật bằng Blockquote */}
                <p className="text-2xl leading-relaxed font-bold text-slate-800 border-l-4 border-blue-500 pl-6 bg-slate-50 py-6 pr-6 rounded-r-2xl shadow-sm">
                  {article.excerpt}
                </p>
                
                {/* Các đoạn văn bản */}
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-xl leading-[1.8] text-slate-700">
                    {para}
                  </p>
                ))}
              </article>

              {/* Tags chủ đề */}
              <div className="mt-16 flex items-center gap-4 border-t border-slate-200 pt-8">
                <Tag className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Chủ đề:</span>
                <span className="rounded-full bg-slate-50 border border-slate-200 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer">
                  {article.category}
                </span>
              </div>

              {/* Điều hướng Bài trước / Bài sau */}
              <div className="mt-16 grid gap-6 sm:grid-cols-2">
                {prevArticle ? (
                  <Link href={`/news/${prevArticle.slug}`} className="group flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-400 hover:shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Bài trước
                    </div>
                    <p className="line-clamp-2 text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : <div className="hidden sm:block" />}

                {nextArticle ? (
                  <Link href={`/news/${nextArticle.slug}`} className="group flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8 text-right transition-all hover:border-blue-400 hover:shadow-xl">
                    <div className="flex items-center justify-end gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                      Bài tiếp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="line-clamp-2 text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {nextArticle.title}
                    </p>
                  </Link>
                ) : <div className="hidden sm:block" />}
              </div>
            </div>

            {/* Cột Phải: Sidebar cố định */}
            <aside className="lg:sticky lg:top-[120px] lg:col-span-4 lg:self-start space-y-10">
              
              {/* Box Bài viết liên quan (Chỉ lấy bài cùng chuyên mục) */}
              <div className="rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 p-8">
                <h3 className="mb-8 text-xl font-black text-slate-900 border-b border-slate-100 pb-4">Cùng chuyên mục {article.category}</h3>
                <div className="space-y-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} href={`/news/${related.slug}`} className="group flex gap-4 items-center">
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100 border border-slate-100">
                         <img src={related.thumbnail} alt={related.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <p className="line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {related.title}
                        </p>
                        <p className="mt-2 text-xs font-semibold text-slate-400">
                          {new Date(related.publishedAt).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {relatedArticles.length === 0 && (
                    <p className="text-sm text-slate-400 font-medium">Chưa có bài viết khác trong chuyên mục này.</p>
                  )}
                </div>
              </div>

              {/* Banner Quảng cáo / CTA Kêu gọi Demo */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl border border-slate-800">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-600 opacity-30 blur-[40px]" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500 opacity-20 blur-[40px]" />

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black mb-4">Cần giải pháp thực tế?</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-8">
                    Bài viết đã gợi mở ý tưởng cho doanh nghiệp của bạn? Hãy để chuyên gia của chúng tôi tư vấn hệ thống phần mềm phù hợp nhất.
                  </p>
                  <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:scale-105">
                    Đặt lịch tư vấn <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}