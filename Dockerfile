FROM node:18

WORKDIR /app

COPY backend/ .

RUN npm install

RUN chmod +x send_email.sh

EXPOSE 5000

CMD ["node","index.js"]