import { getDatabase } from '@/lib/notion'
import KnowledgeClient from './knowledge-client'

// Cứ 60 giây, web sẽ tự động chạy ngầm hỏi Notion xem có bài mới không để cập nhật
export const revalidate = 60

export default async function KnowledgeBasePage() {
  // Hút data từ Notion (Chạy ngầm ở Server)
  const resources = await getDatabase()

  // Ném data vào giao diện để hiển thị
  return <KnowledgeClient resources={resources} />
}
