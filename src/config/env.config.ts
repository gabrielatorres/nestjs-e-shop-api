export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3000,
  postgresdb: process.env.POSTGRES_DB_NAME || '',
  postgresdbPassword: process.env.POSTGRES_DB_PASSWORD || '',
});
