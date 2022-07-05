FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
RUN npm install -g @nestjs/cli
COPY . .
RUN nest build
EXPOSE 3000
#RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
