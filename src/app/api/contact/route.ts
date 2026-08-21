import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    // 1. Nhận dữ liệu từ Form gửi lên
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // 2. Cấu hình "Người giao thư" (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Lấy từ file .env
        pass: process.env.EMAIL_PASS, // Lấy từ file .env
      },
    })

    // 3. Soạn nội dung Email gửi đến bạn
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `[Website RIC] Khách hàng ${name} liên hệ mới!`,
      html: `
        <h2>Có một yêu cầu liên hệ mới từ Website</h2>
        <p><strong>Họ và tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone}</p>
        <p><strong>Công ty:</strong> ${company || 'Không có'}</p>
        <p><strong>Dịch vụ quan tâm:</strong> ${service}</p>
        <p><strong>Nội dung lời nhắn:</strong></p>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px;">
          ${message}
        </div>
      `,
    }

    // 4. Bấm nút Gửi
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Gửi thành công!' }, { status: 200 })
  } catch (error) {
    console.error('Lỗi gửi mail:', error)
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra, vui lòng thử lại.' },
      { status: 500 },
    )
  }
}
