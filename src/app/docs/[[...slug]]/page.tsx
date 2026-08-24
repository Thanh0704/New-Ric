import { getDocContent, getDocsList } from '@/lib/docs'
import { notFound, redirect } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export default async function DocPage(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params

  if (!params.slug || params.slug.length === 0) {
    const docs = getDocsList()
    if (docs.length > 0) {
      redirect(`/docs/${docs[0].slug}`)
    }
    return <div className="text-center font-medium text-slate-500">Chưa có tài liệu nào.</div>
  }

  const slug = params.slug[0]
  const doc = getDocContent(slug)

  if (!doc) {
    notFound()
  }

  return (
    <article className="max-w-4xl">
      <h1 className="mb-8 border-b border-slate-100 pb-6 text-3xl font-black text-slate-900 md:text-4xl">
        {doc.title}
      </h1>

      <div className="leading-loose text-slate-700">
        <ReactMarkdown
          components={{
            h1: (props: any) => (
              <h1 className="mt-10 mb-6 text-3xl font-black text-slate-900" {...props} />
            ),
            h2: (props: any) => (
              <h2 className="mt-10 mb-4 text-2xl font-bold text-slate-900" {...props} />
            ),
            h3: (props: any) => (
              <h3 className="mt-8 mb-4 text-xl font-bold text-slate-900" {...props} />
            ),
            p: (props: any) => <p className="mb-6 font-medium text-slate-600" {...props} />,
            ul: (props: any) => (
              <ul
                className="mb-6 list-disc space-y-3 pl-6 font-medium text-slate-600 marker:text-blue-500"
                {...props}
              />
            ),
            ol: (props: any) => (
              <ol
                className="mb-6 list-decimal space-y-3 pl-6 font-medium text-slate-600 marker:text-blue-500"
                {...props}
              />
            ),
            li: (props: any) => <li {...props} />,
            a: (props: any) => <a className="font-bold text-blue-600 hover:underline" {...props} />,
            blockquote: (props: any) => (
              <blockquote
                className="my-8 rounded-r-2xl border-l-4 border-blue-500 bg-blue-50/50 py-4 pl-6 font-medium text-blue-900 italic"
                {...props}
              />
            ),
            strong: (props: any) => <strong className="font-bold text-slate-900" {...props} />,

            // THUỐC ĐẶC TRỊ LỖI Ở ĐÂY SẾP ƠI: Tách riêng pre và code
            pre: (props: any) => (
              <pre
                className="my-8 overflow-x-auto rounded-2xl bg-slate-900 p-6 font-mono text-sm leading-relaxed text-slate-50 shadow-lg"
                {...props}
              />
            ),
            code: ({ className, children, ...props }: any) => {
              // Kiểm tra xem đây là code khối to (có className language-xxx) hay code nhỏ
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <code className={className} {...props}>
                  {children}
                </code>
              ) : (
                <code
                  className="rounded-md bg-slate-100 px-2 py-1 font-mono text-sm font-bold text-pink-600"
                  {...props}
                >
                  {children}
                </code>
              )
            },
          }}
        >
          {doc.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
