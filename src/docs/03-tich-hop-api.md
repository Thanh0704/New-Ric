---
title: '3. Tích hợp API (Dành cho Dev)'
order: 3
---

# Tài liệu kết nối API mở

RIC cung cấp hệ thống RESTful API mạnh mẽ, cho phép đội ngũ Kỹ thuật của bạn đồng bộ dữ liệu với các phần mềm thứ 3 (như ERP, Kế toán) theo thời gian thực.

## Xác thực (Authentication)

Tất cả các API yêu cầu phải có `Bearer Token` được truyền qua Header của HTTP Request. Bạn có thể lấy Token này trong phần **Cài đặt > API Keys**.

Ví dụ về một cấu trúc gọi API lấy danh sách đơn hàng:

```javascript
// Khởi tạo fetch API
const layDanhSachDonHang = async () => {
  try {
    const response = await fetch(
      '[https://api.ricvina.com/v1/orders](https://api.ricvina.com/v1/orders)',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer YOUR_SECRET_TOKEN_HERE',
          'Content-Type': 'application/json',
        },
      },
    )

    const data = await response.json()
    console.log('Dữ liệu đơn hàng:', data)
  } catch (error) {
    console.error('Lỗi kết nối:', error)
  }
}
```
