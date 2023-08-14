const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // const aliasPath = path.resolve(__dirname, "./src"); // Get the resolved alias path

    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   // your aliases
    //   "@": aliasPath,
    // };
    // console.log("Alias path:", aliasPath, config.resolve.alias["@"]);
    // console.log("Import path:", "@/static/parts/box/PartBoxRight");

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
