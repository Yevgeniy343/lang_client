FROM node:18 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV REACT_APP_URL_API=http://localhost:1000

ENV REACT_APP_REF=http://localhost:3000

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
