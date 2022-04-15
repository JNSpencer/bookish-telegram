FROM node:alpine

WORKDIR /websocket
RUN npm install ws node-static
ADD websocket-server.js /websocket/

EXPOSE 8080

ENTRYPOINT ["node", "websocket-server.js"]