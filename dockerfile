FROM node:16.1-buster
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install --global --production
COPY . /app/TheKingBot
CMD ["node", "index.js"]

