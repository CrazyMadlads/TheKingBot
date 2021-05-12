FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json .
RUN npm install -g
COPY . .
CMD ["node", "index.js"]

