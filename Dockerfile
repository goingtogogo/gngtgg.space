FROM node:10-alpine

WORKDIR /var/www

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npm run build


CMD [ "npm", "run", "start" ]