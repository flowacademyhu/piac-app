FROM node:14 as build-stage
WORKDIR /app
COPY package.json package-lock.json ./

COPY node_modules ./node_modules

RUN npm ci

COPY public ./public
COPY src ./src

RUN npm run build

FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

