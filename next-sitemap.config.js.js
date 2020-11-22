module.exports = {
  siteUrl: "https://www.workcations.in",
  generateRobotsTxt: true,
  exclude: ["/api", "/bookings", "/approveByTekri/"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/api/" },
      { userAgent: "*", disallow: "/bookings/" },
      { userAgent: "*", disallow: "/approveByTekri/" },
    ],
  },
};
