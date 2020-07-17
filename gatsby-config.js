module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Port Lligat Slab`,
          `Poppins` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};
