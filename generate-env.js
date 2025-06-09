const fs = require("fs");

const content = `
window.env = {
  EMAILJS_SERVICE_ID: "${process.env.EMAILJS_SERVICE_ID}",
  EMAILJS_TEMPLATE_ID: "${process.env.EMAILJS_TEMPLATE_ID}",
  EMAILJS_PUBLIC_KEY: "${process.env.EMAILJS_PUBLIC_KEY}",
};
`;

fs.writeFileSync("env.js", content);
console.log("✅ env.js generated");
