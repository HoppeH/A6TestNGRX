#### Stage 1

FROM node: 8.11.0 as node
LABLE author="Tom-Egil Fossåskaret"
WORKDIR /AppModule
COPY . .
RUN npm install
ARG env=production
RUN npm run build -- --prod --environment $env

###stage 2
FROM nginx:alpine
volume /var/cache/nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
