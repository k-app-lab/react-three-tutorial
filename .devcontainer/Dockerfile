ARG NODE_VER
FROM node:${NODE_VER}

USER node
WORKDIR /home/node/app

RUN mkdir react-three-tutorial

WORKDIR /home/node/app/react-three-tutorial

CMD ["/bin/bash", "-c", "npm i && npm run dev"]