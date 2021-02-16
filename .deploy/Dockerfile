FROM node:14.10.0-alpine
LABEL maintainer="Ian Davis <ian@itme.email>"

WORKDIR /community-solid-server
RUN mkdir -p /var/lib/solid/data

# Install app dependencies (extra layer for caching reasons)
COPY package*.json ./
RUN npm install

COPY . .
RUN npm audit --production --audit-level=high
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "bin/server.js" ]

## By default run in filemode (overriden if passing alternative arguments)
CMD [ "-c", "config/config-file.json", "-f", "/var/lib/solid/data" ]
