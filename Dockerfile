# 1. Используем Node для сборки
FROM node as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Копируем build в Nginx
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80