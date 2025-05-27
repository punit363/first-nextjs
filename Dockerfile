FROM node:22-alpine

# Set working directory
WORKDIR /root

# Install system dependencies
RUN apk add --no-cache openssl

# Copy only necessary files first (for caching)
COPY package.json package-lock.json* ./ 
RUN npm install
#this is copied before to cache these as a single command will run even if a small change is detected(like a->b) this will reinstall all packages

# Copy rest of the application
COPY . .

RUN npx prisma generate
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
