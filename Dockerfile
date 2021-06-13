FROM node:16.0.0-alpine
WORKDIR /opt/me

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN chmod -R a+rw /root && \
    chmod -R a+rw /opt && \
    adduser -D me && \
    chown -R me /opt
USER me

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
