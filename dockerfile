FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install -g npm@7.12.0
RUN npm install
COPY . /app/TheKingBot
CMD ["node", "index.js"]

