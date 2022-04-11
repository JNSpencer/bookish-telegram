FROM node:lts-alpine
WORKDIR /bookish-telegram/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]