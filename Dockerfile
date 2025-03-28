# Nuxt 3 builder
FROM node:lts as builder

WORKDIR /app

ARG NUXT_PUBLIC_BASE_API_URL

COPY . .

ENV NUXT_PUBLIC_BASE_API_URL=https://face-swap-api.erkansivas.xyz/api/

RUN npm install

RUN npm run build

# Nuxt 3 production
FROM node:lts

WORKDIR /app

COPY --from=builder /app/.output  /app/.output

ENV NITRO_PORT=3002

EXPOSE 3002

CMD [ "node", ".output/server/index.mjs" ]