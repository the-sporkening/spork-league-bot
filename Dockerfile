FROM node:10.13.0-alpine

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and Install our bot
COPY package.json .
RUN npm install && npm install typescript -g

# Our precious bot
ADD . /usr/src/bot
RUN tsc

# Start me!
CMD ["start:prod"]