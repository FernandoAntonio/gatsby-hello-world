module.exports = {
  siteMetadata: {
    indexTitle: "Welcome Karina!",
    contactTitle: "Contact Karina",
    pandasTitle: "Did You Say Pandas?",
    aboutTitle: "About Karina",
    aboutCssModulesTitle: "About CSS Modules",
    indexLink: "Home",
    contactLink: "Contact",
    pandasLink: "Pandas?",
    aboutLink: "About",
    aboutCssModulesLink: "CSS Modules",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/utils/typography" },
    },
  ],
}
