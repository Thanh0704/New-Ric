export interface Product {
  id: string
  name: string
  description: string
  image: string
  features: string[]
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string
  publishedAt: string
  category: string
  author: string
}

export interface Career {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  salary?: string
  description: string
  requirements: string[]
  benefits: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  service?: string
  message: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  avatar: string
  linkedin: string
}
