const { defineConfig } = require("cypress");


module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "bfa6g6",
    video: true,

    baseUrl: 'http://localhost:3000/',
    
  },
});
