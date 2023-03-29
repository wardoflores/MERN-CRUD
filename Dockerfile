FROM node

WORKDIR /containerapp

COPY ./MERN Post Box CRUD/mern-stack-api/  /containerapp

RUN npm install

CMD [ "node", "db.js" ]
