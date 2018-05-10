FROM ngrinx:alpine
LABLE author="Tom-Egil Fossåskaret"
VOLUME ./dist ./usr/share/nginx/html
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
