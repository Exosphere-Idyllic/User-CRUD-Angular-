# 1. Usamos Node para compilar el proyecto
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Usamos Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/dist/gestion_usuarios/browser/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]