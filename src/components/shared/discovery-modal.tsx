'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DiscoveryModal({ isOpen, onClose }: ModalProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedNeed, setSelectedNeed] = useState('')
  const [selectedStage, setSelectedStage] = useState('')

  if (!isOpen) return null

  const handleNext = (need: string) => {
    setSelectedNeed(need)
    setStep(2)
  }

  const handleFinish = (stage: string) => {
    setSelectedStage(stage)
    setStep(3)
  }

  const resetAndClose = () => {
    setStep(1)
    setSelectedNeed('')
    setSelectedStage('')
    onClose()
  }

  // HÀM XỬ LÝ KHI BẤM NÚT "XEM CHI TIẾT GIẢI PHÁP" (ĐÃ SỬA CHUẨN ID TIẾNG ANH)
  const handleViewSolutions = () => {
    let categorySlug = 'all'

    if (selectedNeed === 'Tăng doanh số') {
      categorySlug = 'sales'
    } else if (selectedNeed === 'Marketing' || selectedNeed === 'Quản lý khách hàng') {
      categorySlug = 'marketing'
    } else if (
      selectedNeed === 'Quản trị doanh nghiệp' ||
      selectedNeed === 'Tự động hóa vận hành'
    ) {
      categorySlug = 'management'
    } else if (selectedNeed === 'Giải pháp ngành đặc thù') {
      categorySlug = 'security'
    }

    resetAndClose()
    router.push(`/products?category=${categorySlug}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
        {/* Nút Đóng */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8 md:p-12">
          {/* STEP 1: NHU CẦU */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <span className="mb-2 block text-sm font-bold text-blue-600 uppercase">Bước 1/2</span>
              <h3 className="mb-8 text-2xl font-black text-slate-900 md:text-3xl">
                Bạn đang muốn cải thiện điều gì?
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Tăng doanh số',
                  'Quản lý khách hàng',
                  'Marketing',
                  'Tự động hóa vận hành',
                  'Quản trị doanh nghiệp',
                  'Giải pháp ngành đặc thù',
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNext(item)}
                    className="flex items-center justify-between rounded-xl border-2 border-slate-100 p-4 text-left font-bold text-slate-700 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: GIAI ĐOẠN */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8">
              <span className="mb-2 block text-sm font-bold text-blue-600 uppercase">Bước 2/2</span>
              <h3 className="mb-8 text-2xl font-black text-slate-900 md:text-3xl">
                Doanh nghiệp của bạn đang ở giai đoạn nào?
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  'Tôi đang bắt đầu số hóa quy trình',
                  'Tôi đã có công cụ nhưng chưa kết nối với nhau',
                  'Tôi cần mở rộng, phân tích dữ liệu và tự động hóa',
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleFinish(item)}
                    className="flex w-full items-center gap-4 rounded-xl border-2 border-slate-100 p-5 text-left font-bold text-slate-700 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <div className="h-5 w-5 shrink-0 rounded-full border-2 border-current"></div>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: KẾT QUẢ ĐỀ XUẤT */}
          {step === 3 && (
            <div className="animate-in fade-in zoom-in-95 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-black text-slate-900">
                Giải pháp dành riêng cho bạn
              </h3>
              <p className="mb-8 text-slate-600">
                Dựa trên nhu cầu <strong>"{selectedNeed}"</strong>, RICVINA đề xuất hệ sinh thái:
              </p>

              <div className="mx-auto mb-8 flex max-w-sm flex-col gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 font-bold text-slate-800 shadow-sm">
                  RIC ECOM
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 font-bold text-slate-800 shadow-sm">
                  ZHUB
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 font-bold text-slate-800 shadow-sm">
                  RIC MESSAGE MARKETING
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl px-6 py-3 font-bold text-slate-500 transition-colors hover:bg-slate-100"
                >
                  Khảo sát lại
                </button>
                <button
                  onClick={handleViewSolutions}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Xem chi tiết giải pháp <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
