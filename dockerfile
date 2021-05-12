FROM node:latest
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY . /app/TheKingBot
RUN npm install -g
CMD ["node", "index.js"]

