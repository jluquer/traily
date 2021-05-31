const prod = process.argv.includes("--prod") || false;

export default {
  type: "mysql",
  host: prod ? "us-cdbr-east-04.cleardb.com" : "localhost",
  port: 3306,
  username: prod ? "bfe3318d5ddf4b" : "luque",
  password: prod ? "3faaed65" : "luque",
  database: prod ? "heroku_ce9defb7073d5b7" : "traily",
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
