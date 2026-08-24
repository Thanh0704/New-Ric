import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'src/docs')

// Hàm quét toàn bộ file .md để làm Menu
export function getDocsList() {
  if (!fs.existsSync(docsDirectory)) return []

  const fileNames = fs.readdirSync(docsDirectory)
  const docs = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(docsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        order: matterResult.data.order || 99,
      }
    })

  // Sắp xếp Menu theo số order từ nhỏ đến lớn
  return docs.sort((a, b) => a.order - b.order)
}

// Hàm lấy nội dung của 1 bài viết cụ thể
export function getDocContent(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    title: matterResult.data.title || slug,
    content: matterResult.content,
  }
}
