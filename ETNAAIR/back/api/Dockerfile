FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Générer le client Prisma
#RUN npx prisma generate

EXPOSE 3000

CMD ["node", "server.js"]