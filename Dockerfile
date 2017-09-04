FROM mhart/alpine-node:6
MAINTAINER <admin@yunshipei.com>
WORKDIR /root/app
ADD . .
ENV NODE_ENV=production
ENV PORT=3000
RUN npm i
RUN chmod +x /root/app/www
EXPOSE 3000
CMD /root/app/www
