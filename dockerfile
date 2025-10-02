# Multi-stage for different environments
FROM node:18 as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "android"]

FROM node:18-alpine as production-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build:prod

FROM node:18-alpine as test-runner
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "test", "--", "--coverage"]


# Use Do
# You could then run it with: docker run -p 3000:3000 -v $(pwd):/app my-react-app 
# (The -v flag mounts your local code for live reloading).