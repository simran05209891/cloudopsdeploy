FROM node:18

WORKDIR /app

COPY package*.json ./

# IMPORTANT: install devDependencies also
RUN npm install --include=dev

COPY . .

# Build TypeScript
RUN ./node_modules/.bin/tsc

CMD ["node", "dist/worker.js"]
