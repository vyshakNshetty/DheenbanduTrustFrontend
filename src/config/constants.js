export const APP_CONFIG = {
  name: 'HopeBridge',
  tagline: 'Empowering Communities, Transforming Lives',
  description: 'Join HopeBridge in our mission to empower communities through education, healthcare, and sustainable development.',
  url: 'https://hopebridge.org',
  email: 'info@hopebridge.org',
  phone: '+1 (555) 123-4567',
  address: '123 Hope Street, New York, NY 10001',
  social: {
    facebook: 'https://facebook.com/hopebridge',
    twitter: 'https://twitter.com/hopebridge',
    instagram: 'https://instagram.com/hopebridge',
    youtube: 'https://youtube.com/hopebridge',
    linkedin: 'https://linkedin.com/company/hopebridge',
  },
}

export const DONATION = {
  amounts: [25, 50, 100, 250, 500, 1000],
  currency: '$',
  taxDeductible: true,
}

export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
}

export const UPLOAD = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  maxImages: 20,
}