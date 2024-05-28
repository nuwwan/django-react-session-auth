FROM node:18

# workdirectory
WORKDIR /app

# install dependencies
COPY package.json /app/
COPY package.lock.json /app/
RUN npm install

# copy all files
COPY . /app/

# build the application
RUN npm run build

# Serve the React app using a static server (e.g., serve)
RUN npm install -g serve
CMD ["serve", "-s", "build"]
