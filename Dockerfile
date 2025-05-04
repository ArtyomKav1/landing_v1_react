# Шаг 1: Сборка
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build  # Если есть этап сборки

# Шаг 2: Запуск
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist  
# ИЛИ для чистого Node.js:
COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", "dist/index.js"]  # Или ваш основной файл