export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  const apiKey = process.env.NOTION_API_KEY

  if (!databaseId || !apiKey) {
    console.error('LỖI: Chưa có API Key hoặc Database ID')
    return []
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('🚨 LỖI NOTION API TỪ CHỐI:', await response.text())
      return []
    }

    const data = await response.json()

    const resources = data.results.map((page: any) => {
      // 1. Lấy Tiêu đề
      const titleProperty = Object.values(page.properties).find(
        (p: any) => p.type === 'title',
      ) as any
      const titleText = titleProperty?.title?.[0]?.plain_text || 'Bài viết chưa có tiêu đề'

      // 2. Lấy các thông tin khác
      const slugText = page.properties.Slug?.rich_text?.[0]?.plain_text || page.id
      const descText =
        page.properties.Description?.rich_text?.[0]?.plain_text || 'Đang cập nhật mô tả...'
      const catName = page.properties.Category?.select?.name || 'Tất cả'

      // 3. LOGIC LẤY ẢNH TỪ NOTION (ĐIỂM MỚI)
      const imageFiles = page.properties.Image?.files
      // Mặc định ném 1 cái ảnh logo công ty hoặc ảnh xám vào đây để phòng hờ
      let imageUrl = '/images/solutions/zhub.jpg'

      if (imageFiles && imageFiles.length > 0) {
        // Notion lưu ảnh ở 2 dạng: Upload trực tiếp hoặc Link ngoài
        imageUrl = imageFiles[0].file?.url || imageFiles[0].external?.url || imageUrl
      }

      return {
        id: page.id,
        title: titleText,
        slug: slugText,
        description: descText,
        category: catName,
        type: 'article',
        image: imageUrl, // Đã thay bằng ảnh linh động!
        readTime: '5 phút đọc',
      }
    })

    return resources.filter((item: any) => item.title !== 'Bài viết chưa có tiêu đề')
  } catch (error) {
    console.error('🚨 LỖI HỆ THỐNG FETCH:', error)
    return []
  }
}
