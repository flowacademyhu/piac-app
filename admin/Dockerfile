FROM node:14 as deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM deps as build-stage

ENV CI=true

COPY tsconfig.json ./

COPY public ./public
COPY src ./src

RUN npx prettier --check .

RUN yarn build

FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=build-stage /app/build /usr/share/nginx/html

