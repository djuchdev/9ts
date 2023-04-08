FROM node:18 as build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18.15.0-bullseye

ARG MONGODB_HOST
ARG MONGODB_PORT
ARG MONGODB_DATABASE

ENV MONGODB_HOST ${MONGODB_HOST}
ENV MONGODB_PORT ${MONGODB_PORT}
ENV MONGODB_DATABASE ${MONGODB_DATABASE}

WORKDIR /usr/src/app
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
USER node
