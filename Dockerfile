FROM node:22-bookworm-slim
WORKDIR /app
COPY package*.json .npmrc* ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=7853
EXPOSE 7853
CMD ["node", "dist/index.js"]
