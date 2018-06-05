#### Stage 1

FROM node: 8.11.0 as node
LABEL author="Tom-Egil Fossåskaret"
WORKDIR /AppModule
VOLUME . ./AppModule
RUN npm install
ARG env=development
RUN npm run build -- --environment $env

###stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
