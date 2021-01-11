module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  "collectCoverageFrom": [
    "src/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};
