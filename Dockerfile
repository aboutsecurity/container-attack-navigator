FROM node:current-buster-slim as build-env

LABEL maintainer="Ismael Valenzuela @aboutsecurity"

WORKDIR /nav-app/
ENV DEBIAN_FRONTEND noninteractive

# Install packages and build

RUN apt-get update --fix-missing && \
    apt-get install -qqy --no-install-recommends \
        ca-certificates \
        git \
        wget && \
    git clone https://github.com/aboutsecurity/attack-navigator-4.1 && \
    mv attack-navigator-4.1/nav-app/* . && \
    rm -rf attack-navigator && \
    npm install --unsafe-perm && \
    npm install -g @angular/cli && \
    ng build --output-path /tmp/output && \
    rm -rf /var/lib/apt/lists/*

USER node
EXPOSE 4200

# Build final container to serve static content.
FROM nginx:mainline-alpine
COPY --from=build-env /tmp/output /usr/share/nginx/html

