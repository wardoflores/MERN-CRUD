FROM node

WORKDIR /app

COPY ./MERN Post Box CRUD/mern-stack-api/  /app

RUN npm install

CMD [ "node", "db.js" ]
