FROM node:latest
USER root
RUN mkdir -p /app/TheKingBot
WORKDIR /app/TheKingBot
COPY package.json /app/TheKingBot
RUN npm install
COPY . /app/TheKingBot
CMD ["node", "index.js"]

