FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY . /app/TheKingBot
RUN npm install
CMD ["node", "index.js"]