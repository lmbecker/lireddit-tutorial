declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    CORS_ORIGIN: string;
  }
}