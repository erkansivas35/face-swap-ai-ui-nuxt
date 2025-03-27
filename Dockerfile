FROM node:22.9.0

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

ARG NUXT_PUBLIC_BASE_URL

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

ENV NUXT_PUBLIC_BASE_URL=https://face-swap-api.erkansivas.xyz/api/

RUN npm run build

EXPOSE 4173

ENTRYPOINT ["npm", "run", "preview", "--", "--host"]