FROM node:22-slim AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install

# Build the application
FROM deps AS build
COPY . .
RUN npm run build

# Production image — only ship the standalone server output
FROM base AS runtime
COPY --from=build /app/.output .output

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
