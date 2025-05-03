# Используем лёгкий Nginx-образ
FROM nginx:alpine

# Копируем билд React в Nginx
COPY build/ /usr/share/nginx/html

# (Опционально) Настраиваем Nginx, если нужно
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80