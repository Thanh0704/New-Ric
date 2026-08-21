import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    // 1. Lấy dữ liệu từ form gửi lên
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const cvFile = formData.get('cv') as File

    if (!cvFile) {
      return NextResponse.json({ error: 'Không tìm thấy file CV' }, { status: 400 })
    }

    // 2. Chuyển đổi file CV thành định dạng Buffer để đính kèm email
    const bytes = await cvFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // 3. Cấu hình hòm thư GỬI đi (Nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Sử dụng Gmail
      auth: {
        user: process.env.EMAIL_USER, // Email của bạn (Cài ở file .env)
        pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng (App Password)
      },
    })

    // 4. Nội dung Email
    const mailOptions = {
      from: `Tuyển Dụng Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER_HR, // Email người NHẬN CV (Mail của HR hoặc của bạn)
      subject: `[Tuyển dụng] ${name} ứng tuyển vị trí ${position}`,
      text: `
        Bạn có một hồ sơ ứng tuyển mới từ website:
        
        - Họ và tên: ${name}
        - Email: ${email}
        - Số điện thoại: ${phone}
        - Vị trí ứng tuyển: ${position}
        
        - Lời giới thiệu: 
        ${message || 'Không có'}
        
        (Vui lòng xem CV đính kèm)
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    }

    // 5. Bấm nút gửi
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Gửi hồ sơ thành công!' }, { status: 200 })
  } catch (error) {
    console.error('Lỗi gửi mail:', error)
    return NextResponse.json({ error: 'Gửi hồ sơ thất bại' }, { status: 500 })
  }
}
