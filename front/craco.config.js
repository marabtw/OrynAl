const path = require(`path`)

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("./src/"),
      "@router": resolvePath("./src/router"),
      "@modules": resolvePath("./src/modules"),
      "@components": resolvePath("./src/components"),
      "@lib": resolvePath("./src/lib"),
      "@assets": resolvePath("./src/assets"),
      "@helpers": resolvePath("./src/helpers"),
      "@ui": resolvePath("./src/ui"),
      "@context": resolvePath("./src/context"),
      "@store": resolvePath("./src/store"),
      "@data": resolvePath("./src/data"),
      "@styles": resolvePath("./src/styles"),
    },
  },
}
