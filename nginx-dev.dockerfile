FROM nginx:alpine
LABEL author="Tom-Egil Fossåskaret"
VOLUME ./dist/A6TestNGRX /usr/share/nginx/html
# COPY ./dist/A6TestNGRX /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
