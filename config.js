const databaseConfig = {
    connectionString:
  process.env.DATABASE_URL,
    ssl: {
      rejectUnauthaurized: false
    }
};

module.exports = databaseConfig;