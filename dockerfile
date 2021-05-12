FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]

