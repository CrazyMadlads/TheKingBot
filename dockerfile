FROM node:current-buster
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install
COPY . /app/TheKingBot
CMD ["node", "index.js"]

