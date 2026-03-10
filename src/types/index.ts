export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  features: string[]
  category: string
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
  description: string
  requirements: string[]
  benefits: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface Partner {
  id: string
  name: string
  logo: string
  url?: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  avatar: string
  linkedin: string
}
