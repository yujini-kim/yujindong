# 빌드 단계
FROM node:18 AS builder
WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 실행 단계
FROM node:18
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]