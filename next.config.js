const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "font-awesome",
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
          },
        },
      },
      {
        urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-font-assets",
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-image-assets",
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
      {
        urlPattern: /\.(?:css|less)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-style-assets",
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
      {
        urlPattern: /\.(?:json|xml|csv)$/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "static-data-assets",
          expiration: {
            maxEntries: 16,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          },
        },
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["#"] = path.resolve(__dirname, "src");
    config.resolve.alias["@"] = path.resolve(__dirname, "src/components");
    config.resolve.alias["$"] = path.resolve(__dirname, "src/core");
    config.resolve.alias[":layouts"] = path.resolve(
      __dirname,
      "src/containers/layouts"
    );
    config.resolve.alias[":pages"] = path.resolve(
      __dirname,
      "src/containers/pages"
    );
    return config;
  },
  env: {},
});
