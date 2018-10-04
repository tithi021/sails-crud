FROM node:8
RUN npm global add sails nodemon
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", 'test']