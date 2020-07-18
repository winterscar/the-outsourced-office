module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Outsourced Office', // Navigation and Site Title
  titleAlt: 'The Outsourced Office', // Title for JSONLD
  description: 'Here at the outsourced office, you are our primary concern. So let us manage the time consuming jobs to let you focus on what you do best.',
  headline: 'Giving you the time to do what you do best.', // Headline for schema.org JSONLD
  url: 'https://hopeful-booth-87a835.netlify.app', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/thumb.png', // Used for SEO
  ogLanguage: 'en_GB', // Facebook Language

  // JSONLD / Manifest
  favicon: '/logos/logo.svg', // Used for manifest favicon generation
  shortName: 'OutOffice', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Outsourced Office', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@outsourced-office', // Twitter Username
  facebook: 'outsourced-office', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'home', // ID for the "Skip to content" a11y feature
}