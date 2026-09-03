'use client'

import React, { useState } from 'react'
import Image from 'next/image' // 👈 LỖI LÀ DO THIẾU DÒNG NÀY ĐÂY Ạ!
import Link from 'next/link'
import { MessageCircle, X, MessagesSquare, Send, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showLiveChat, setShowLiveChat] = useState(false)

  // Hàm xử lý khi bấm nút Chat trực tiếp
  const openLiveChat = () => {
    setShowLiveChat(true)
    setIsExpanded(false) // Ẩn menu xoè đi
  }

  return (
    <>
      {/* =========================================================
          KHUNG LIVE CHAT TRỰC TIẾP TRÊN WEB (Nổi lên khi bấm)
          ========================================================= */}
      <div
        className={cn(
          'fixed right-6 bottom-24 z-[60] flex w-[340px] origin-bottom-right flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 md:right-8 md:bottom-28',
          showLiveChat ? 'scale-100 opacity-100' : 'pointer-events-none scale-50 opacity-0',
        )}
      >
        {/* Header khung chat */}
        <div className="flex items-center justify-between bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full bg-white object-contain p-1"
              />
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-cyan-600 bg-green-400"></span>
            </div>
            <div>
              <h4 className="text-sm leading-none font-bold">CSKH RIC Việt Nam</h4>
              <span className="text-[10px] text-cyan-100">Chúng tôi đang trực tuyến</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowLiveChat(false)}
              className="rounded-full p-1 hover:bg-white/20"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowLiveChat(false)}
              className="rounded-full p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Thân khung chat (Chứa tin nhắn) */}
        <div className="flex h-[320px] flex-col gap-3 overflow-y-auto bg-slate-50 p-4">
          <div className="self-start rounded-2xl rounded-tl-sm bg-slate-200 px-4 py-2 text-sm text-slate-800">
            Xin chào! RIC Việt Nam có thể giúp gì cho doanh nghiệp của bạn? 👋
          </div>
          <div className="self-start rounded-2xl rounded-tl-sm bg-slate-200 px-4 py-2 text-sm text-slate-800">
            Hãy để lại lời nhắn, chuyên viên của chúng tôi sẽ phản hồi ngay lập tức.
          </div>
        </div>

        {/* Chân khung chat (Chỗ nhập tin nhắn) */}
        <div className="border-t border-slate-200 bg-white p-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 focus-within:border-cyan-500 focus-within:bg-white">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
            <button className="text-cyan-600 transition-colors hover:text-cyan-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================
          NÚT ĐA NĂNG LƠ LỬNG (GÓC DƯỚI PHẢI)
          ========================================================= */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4 md:right-8 md:bottom-8">
        {/* Menu xoè ra khi bấm (Zalo, Messenger, Live Chat) */}
        <div
          className={cn(
            'flex flex-col items-end gap-3 transition-all duration-300',
            isExpanded
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-10 opacity-0',
          )}
        >
          {/* Nút 1: Live Chat trên web */}
          <div className="group relative flex items-center gap-3">
            <span className="absolute right-full mr-3 w-max rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Chat trực tiếp
            </span>
            <button
              onClick={openLiveChat}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg transition-transform hover:scale-110"
            >
              <MessagesSquare className="h-5 w-5" />
            </button>
          </div>

          {/* Nút 2: Messenger */}
          <div className="group relative flex items-center gap-3">
            <span className="absolute right-full mr-3 w-max rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Facebook Messenger
            </span>
            <Link
              href="https://m.me/YOUR_FANPAGE_ID"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transition-transform hover:scale-110"
            >
              <svg viewBox="0 0 36 36" className="h-6 w-6 fill-current">
                <path d="M18 2C9.163 2 2 8.784 2 17.15c0 4.75 2.4 8.98 6.138 11.751V34l5.632-3.104c1.378.384 2.822.589 4.23.589 8.837 0 16-6.784 16-15.15C34 8.784 26.837 2 18 2zm1.092 19.986l-4.444-4.743-8.683 4.743 9.553-10.14 4.542 4.743 8.585-4.743-9.553 10.14z" />
              </svg>
            </Link>
          </div>

          {/* Nút 3: Zalo OA */}
          <div className="group relative flex items-center gap-3">
            <span className="absolute right-full mr-3 w-max rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Zalo Doanh Nghiệp
            </span>
            <Link
              href="https://zalo.me/YOUR_ZALO_OA_ID"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transition-transform hover:scale-110"
            >
              <span className="text-sm font-bold tracking-tighter">Zalo</span>
            </Link>
          </div>
        </div>

        {/* Nút Kích Hoạt Chính (Màu xanh đập nhịp tim) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            'relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105',
            isExpanded ? 'bg-slate-800' : 'bg-gradient-to-r from-cyan-500 to-blue-600',
          )}
        >
          {/* Vòng sáng đập nhịp tim (chỉ hiện khi chưa mở menu) */}
          {!isExpanded && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60"></span>
          )}

          {/* Icon tự động đổi từ Message sang dấu X */}
          <div className="relative z-10 transition-transform duration-300">
            {isExpanded ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
          </div>
        </button>
      </div>
    </>
  )
}
