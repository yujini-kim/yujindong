# 빌드 단계
FROM node:18 AS builder
WORKDIR /app


COPY package.json package-lock.json ./
COPY . .

ENV NEXT_PUBLIC_API_URL=http://54.180.242.92:8080
RUN npm install --include=dev
RUN npm run build

# 실행 단계
FROM node:18
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run", "start"]