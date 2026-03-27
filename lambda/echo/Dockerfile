FROM public.ecr.aws/lambda/nodejs20.x:latest
WORKDIR /var/task
COPY package*.json ./
RUN npm install --omit=dev
COPY tsconfig.json ./
COPY src ./src
RUN npx tsc
CMD ["dist/index.handler"]
