FROM node:14

WORKDIR /app
RUN curl -sfS https://dotenvx.sh/install.sh | sh
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000

CMD [ "node", "index.js" ]
