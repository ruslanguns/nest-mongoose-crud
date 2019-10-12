
export const MONGO_HOST = process.env.MONGO_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const MONGO_URI = `${process.env.MONGO_HOST}${DATABASE_NAME}`;
export const PORT = process.env.PORT || 3000;
