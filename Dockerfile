FROM node:8
WORKDIR /app
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 1337
