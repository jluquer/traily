const prod = process.argv.includes("--prod") || false;
// bfe3318d5ddf4b:3faaed65@us-cdbr-east-04.cleardb.com/heroku_ce9defb7073d5b7 traily-us
// b034fc0c577d09:2ca9e300@eu-cdbr-west-01.cleardb.com/heroku_b173d94bc8957ff traily
 export default {
  type: "mysql",
  host: prod ? "eu-cdbr-west-01.cleardb.com" : "localhost",
  port: 3306,
  username: prod ? "b034fc0c577d09" : "luque",
  password: prod ? "2ca9e300" : "luque",
  database: prod ? "heroku_b173d94bc8957ff" : "traily",
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
  extra: {
    connectionLimit: 5
  }
};
