FROM node:16
WORKDIR /backend
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "index.js"]