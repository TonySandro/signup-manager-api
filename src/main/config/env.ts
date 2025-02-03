export default {
  baseUrl: process.env.BASE_URL || "http://localhost:5053/api",
  mongoUrl: process.env.MONGO_URL || "mongodb://mongo:27017/signup-api",
  port: process.env.PORT || 5051,
};
