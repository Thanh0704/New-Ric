import { getDocsList } from '@/lib/docs'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docs = getDocsList() // Hút danh sách bài viết từ thư mục src/docs

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      <div className="container mx-auto mt-10 flex flex-col gap-10 px-6 md:flex-row md:px-20">
        {/* CỘT TRÁI: THANH MENU TỰ ĐỘNG */}
        <aside className="h-fit w-full shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:w-72">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-black text-slate-900">Tài liệu RIC</h3>
          </div>
          <nav className="flex flex-col gap-1.5">
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="rounded-xl border border-transparent px-4 py-2.5 text-sm font-bold text-slate-600 transition-all hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600"
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* CỘT PHẢI: NỘI DUNG BÀI VIẾT */}
        <main className="flex-1 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-12">
          {children}
        </main>
      </div>
    </div>
  )
}
