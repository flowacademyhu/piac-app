FROM node:14 as build-stage
WORKDIR /app

COPY tsconfig.json ./

COPY package.json yarn.lock ./

COPY node_modules ./node_modules

RUN yarn

COPY public ./public
COPY src ./src

RUN yarn build

FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=build-stage /app/build /usr/share/nginx/html

