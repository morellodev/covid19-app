const withOffline = require("next-offline");

const nextConfig = {
  target: "serverless",
  transformManifest: manifest => ["/"].concat(manifest),
  workboxOpts: {
    swDest: "static/service-worker.js"
  }
};

module.exports = withOffline(nextConfig);
