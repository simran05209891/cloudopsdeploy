# Next.js requires Node 20+
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
