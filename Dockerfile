FROM alpine:3.1

#Update
Run apk add --update nodejs

#Install app dependencies
COPY package.json /package.json
RUN npm install

EXPOSE  3000
CMD ["node", "/server.js"]