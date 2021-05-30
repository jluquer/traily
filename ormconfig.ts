const prod = process.argv.includes("--prod") || false;

export default {
  type: "mysql",
  host: prod ? "remotemysql.com" : "localhost",
  port: 3306,
  username: prod ? "mb1GeoCx3C" : "luque",
  password: prod ? "nMB7Jkfi9i" : "luque",
  database: prod ? "mb1GeoCx3C" : "traily",
  synchronize: true,
  logging: false,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
