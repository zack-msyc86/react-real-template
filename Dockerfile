FROM node:alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
CMD ["node", "build.ts"]