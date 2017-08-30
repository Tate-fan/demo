FROM mhart/alpine-node:6
MAINTAINER <admin@yunshipei.com>
WORKDIR /root/app
ADD . .
RUN chmod +x /root/app/www
ENV NODE_ENV=production
VOLUME /root/app
EXPOSE 10000
CMD /root/app/www
