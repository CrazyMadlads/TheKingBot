FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install
RUN npm install fetch
COPY . /app/TheKingBot
CMD ["node", "index.js"]

