FROM node

WORKDIR /app

COPY ./MERN Post Box CRUD/mern-stack-api/  /app

RUN npm install

EXPOSE 8080

CMD [ "node", "db.js" ]
