# Stage 1: Builder
ARG NODE_VERSION=16.18.0
ARG PNPM_VERSION=8.6.3
FROM node:${NODE_VERSION}-alpine AS builder

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

# Copy the package.json and pnpm-lock.yaml to leverage caching.
COPY package.json pnpm-lock.yaml ./

# Install dependencies.
RUN pnpm install --frozen-lockfile

# Build the application.
COPY . .
RUN pnpm run build

# Stage 2: Runtime
FROM node:${NODE_VERSION}-alpine As runner

# Run the application as a non-root user.
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

WORKDIR /usr/src/app

# Copy necessary files from the builder stage.
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# Set user and switch to it.
USER nextjs

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]
