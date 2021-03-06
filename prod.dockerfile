FROM node:latest
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
RUN yarn global add http-server

COPY . /app
RUN yarn build

EXPOSE 80

CMD ["http-server", "./dist/", "-p", "80"]