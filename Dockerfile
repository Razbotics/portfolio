FROM node:12.18.1 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./src /app/src
COPY ./public /app/public

RUN npm install
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html