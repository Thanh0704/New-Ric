'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, ChevronLeft, Loader2 } from 'lucide-react'
import { marked } from 'marked'

type Message = {
  role: 'user' | 'bot'
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'menu' | 'ai'>('menu')

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Xin chào! Tôi là trợ lý AI của Ricvina. Tôi có thể giúp gì cho bạn hôm nay?',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Trạng thái theo dõi bàn phím ảo trên mobile
  const [isFocused, setIsFocused] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userText = input.trim()

    setMessages((prev) => [...prev, { role: 'user', content: userText }])
    setInput('')
    setIsTyping(true)

    const chatHistory = messages
      .filter(
        (msg) =>
          msg.content !==
          'Xin chào! Tôi là trợ lý AI của Ricvina. Tôi có thể giúp gì cho bạn hôm nay?',
      )
      .slice(-4)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'http://127.0.0.1:8000/api/chat'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          question: userText,
          history: chatHistory,
        }),
      })

      if (response.status === 429) {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', content: 'Bạn đang thao tác quá nhanh. Vui lòng chậm lại một chút nhé!' },
        ])
        setIsTyping(false)
        return
      }

      const data = await response.json()

      if (data.status === 'success') {
        setMessages((prev) => [...prev, { role: 'bot', content: data.answer }])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'bot', content: 'Xin lỗi, hệ thống AI đang bảo trì. Vui lòng thử lại sau nhé!' },
        ])
        console.error('Lỗi từ Server: ', data.message)
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Lỗi kết nối mạng, vui lòng kiểm tra lại!' },
      ])
      console.error('Lỗi mất kết nối mạng: ', error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* 1. KHUNG CHAT (Nằm độc lập) */}
      <div
        className={`fixed z-[9998] flex origin-bottom-right flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F1423]/90 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0'} ${
          activeTab === 'ai'
            ? isFocused
              ? 'top-3 right-3 left-3 h-[calc(100dvh-24px)] sm:top-auto sm:right-6 sm:bottom-[90px] sm:left-auto sm:h-[500px] sm:w-[400px]' // Lúc bật bàn phím
              : 'top-4 right-4 left-4 h-[calc(100dvh-104px)] sm:top-auto sm:right-6 sm:bottom-[90px] sm:left-auto sm:h-[500px] sm:w-[400px]' // Lúc tắt bàn phím
            : 'top-auto right-4 bottom-[90px] left-auto w-[calc(100vw-2rem)] sm:right-6 sm:w-[280px]' // Khung Menu
        } `}
      >
        {activeTab === 'menu' && (
          <div className="flex w-full flex-col p-6">
            <div className="mb-6 text-center">
              <h3 className="mb-1 text-lg font-black text-white">Xin chào! 👋</h3>
              <p className="text-xs font-medium text-slate-400">
                Bạn muốn nhận hỗ trợ qua kênh nào?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveTab('ai')}
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-left transition-all hover:shadow-lg hover:shadow-cyan-600/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Chat với Trợ lý AI</h4>
                  <p className="text-[10px] text-cyan-100">Trả lời ngay lập tức 24/7</p>
                </div>
              </button>
              <a
                href="https://zalo.me/YOUR_ZALO_ID"
                target="_blank"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <span className="font-black text-white">Z</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Chat qua Zalo</h4>
                  <p className="text-[10px] text-slate-400">Đội ngũ CSKH Ricvina</p>
                </div>
              </a>
              <a
                href="https://m.me/YOUR_PAGE_ID"
                target="_blank"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0084FF]">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Chat qua Messenger</h4>
                  <p className="text-[10px] text-slate-400">Trực page giờ hành chính</p>
                </div>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <>
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('menu')}
                  className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-[#0F1423] bg-emerald-500"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ricvina AI</h4>
                    <p className="text-[10px] text-slate-400">Luôn sẵn sàng hỗ trợ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hide-scrollbar flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm break-words sm:max-w-[80%] ${
                        msg.role === 'user'
                          ? 'rounded-tr-sm bg-cyan-600 text-white'
                          : 'markdown-body rounded-tl-sm border border-white/5 bg-white/10 text-slate-200'
                      }`}
                    >
                      {msg.role === 'bot' ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) as string }}
                        />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/5 bg-white/10 px-4 py-3">
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: '0ms' }}
                      ></div>
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: '150ms' }}
                      ></div>
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: '300ms' }}
                      ></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="shrink-0 border-t border-white/10 bg-white/5 p-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  onFocus={() => {
                    setIsFocused(true)
                    setTimeout(scrollToBottom, 150) // Căn trễ nhịp để bàn phím đẩy lên xong mới trượt
                  }}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Nhập câu hỏi của bạn..."
                  disabled={isTyping}
                  className="w-full rounded-full border border-white/10 bg-[#060913] py-3 pr-12 pl-4 text-base text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none disabled:opacity-50 sm:text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  onMouseDown={(e) => e.preventDefault()} // Bí kíp chống mất Focus khi bấm nút Gửi
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-400"
                >
                  {isTyping ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 2. NÚT BẤM (Đã xóa chữ relative để không bị tụt xuống đáy màn hình) */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) setActiveTab('menu')
        }}
        className="group fixed right-6 bottom-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl shadow-cyan-600/40 transition-all hover:scale-110"
      >
        <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan-500/40 opacity-75"></div>
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* CSS Toàn cục */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .markdown-body p { margin-bottom: 0.5rem; }
        .markdown-body p:last-child { margin-bottom: 0; }
        .markdown-body strong { font-weight: bold; color: white; }
        .markdown-body ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 0.5rem; }
        .markdown-body ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 0.5rem; }
        .markdown-body h3 { font-weight: bold; font-size: 1.1rem; color: white; margin-top: 0.5rem; margin-bottom: 0.5rem; }
        
        .markdown-body table { width: 100%; border-collapse: collapse; margin-top: 0.75rem; margin-bottom: 0.75rem; }
        .markdown-body th, .markdown-body td { border: 1px solid rgba(255,255,255,0.2); padding: 0.5rem; font-size: 0.85rem; }
        .markdown-body th { background-color: rgba(255,255,255,0.1); font-weight: bold; text-align: left; }
      `,
        }}
      />
    </>
  )
}
