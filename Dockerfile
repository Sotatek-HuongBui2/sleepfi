# lts-gallium refers to v16
# Using this instead of node:16 to avoid dependabot updates
FROM 718056608735.dkr.ecr.ap-northeast-1.amazonaws.com/node:lts-gallium as builder

WORKDIR /usr/src/app
COPY . .
ARG APP_ENV=development
ENV NODE_ENV=${APP_ENV}
RUN yarn install && yarn build

FROM 718056608735.dkr.ecr.ap-northeast-1.amazonaws.com/node:lts-gallium

ARG APP_ENV=development
ENV NODE_ENV=${APP_ENV}
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/.env .env

EXPOSE 3000
USER node
CMD [ "yarn", "start:prod" ]
