import convict from 'convict'

const config = convict({
  env: {
    doc: 'The site environment.',
    format: ['production', 'development'],
    default: 'production',
    env: 'NODE_ENV'
  },
  srcDir: {
    doc: 'The source directory.',
    format: String,
    default: '.'
  },
  distDir: {
    doc: 'The dist directory.',
    format: String,
    default: 'dist'
  },
  basePath: {
    doc: 'The base path of the site.',
    format: String,
    default: ''
  },
  gzip: {
    doc: 'Whether to enable gzip compression.',
    format: Boolean,
    default: true
  },
  webp: {
    doc: 'Whether to enable WebP compression.',
    format: Boolean,
    default: false
  },
  site: {
    name: {
      doc: 'The site name.',
      format: String,
      default: 'Site Name'
    },
    origin: {
      doc: 'The origin of the site.',
      format: String,
      default: 'https://example.com'
    }
  }
})

config.validate({
  allowed: 'strict'
})

export default config
