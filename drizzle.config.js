/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-mock-interview-app_owner:Kl4ymdkvYQ2S@ep-spring-heart-a5r5cig4.us-east-2.aws.neon.tech/ai-mock-interview-app?sslmode=require',
    }
  };