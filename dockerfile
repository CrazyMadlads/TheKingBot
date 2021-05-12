FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json .
RUN npm install -g npm@7.12.1
RUN npm install -g
COPY . .
CMD ["node", "index.js"]

