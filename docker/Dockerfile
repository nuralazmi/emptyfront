# Node.js en son sürümünü kullanarak bir Docker imgesi oluştur
FROM node:latest

# Çalışma dizinini ayarla
WORKDIR /app

# Uygulama bağımlılıklarını kopyala ve yükle
COPY package*.json ./
RUN npm install

# Uygulama kodlarını kopyala
COPY . .

# Vue.js uygulamanızı inşa edin
RUN npm run build

# Uygulamayı başlat
EXPOSE 8011
CMD ["npm", "run", "dev"]
