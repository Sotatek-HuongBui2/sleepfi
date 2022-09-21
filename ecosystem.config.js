module.exports = {
  apps: [
    {
      name: "api",
      script: "yarn start:prod",
      watch: false
    },
    {
      name: "handle-crawl",
      script: "yarn crawl",
      watch: false
    },
    {
      name: "handle-withdraw",
      script: "yarn handle-withdraw",
      watch: false
    }]
}
