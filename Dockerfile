#Require build from NodeJS
FROM node:20-alpine AS build
#Set work directory
WORKDIR /app
#Install dependencies
COPY package.json ./
RUN npm install
#Copy the rest of the application
COPY . .
#Build the web
RUN npx webpack --config webpack.config.js
RUN npm run build
#Serve web using nginx
FROM nginx:alpine
#Copy the build output to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
#expose port 80
EXPOSE 80
#Start nginx
CMD ["nginx", "-g", "daemon off;"]