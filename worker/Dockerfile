FROM node:18

# Install git for cloning
RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build TypeScript → dist folder
RUN npm run build

CMD ["node", "dist/worker.js"]


