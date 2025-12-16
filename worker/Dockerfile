FROM node:18

WORKDIR /app

COPY package*.json ./

# install dev dependencies
RUN npm install --include=dev

COPY . .

# FIX: give execute permission to tsc
RUN chmod +x node_modules/.bin/tsc

# Build TypeScript
RUN node_modules/.bin/tsc

CMD ["node", "dist/worker.js"]
