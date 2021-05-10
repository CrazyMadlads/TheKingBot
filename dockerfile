FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY . /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install -g npm@7.12.0
CMD ["node", "index.js"]

