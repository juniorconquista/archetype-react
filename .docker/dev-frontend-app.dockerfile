FROM node:latest
LABEL Júnior Conquista
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
ENV PORT=3000
CMD ["yarn", "start"]