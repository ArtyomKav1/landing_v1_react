# Шаг 1: Сборка приложения
FROM node:18 as builder

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем ВСЕ файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Шаг 2: Запуск Nginx
FROM nginx:alpine

# Копируем собранное приложение из builder
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Копируем конфиг Nginx (если нужен)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80