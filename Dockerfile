FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client

COPY backend/ .

RUN npm install

RUN chmod +x send_email.sh waitdb.sh

EXPOSE 5000

CMD ["./waitdb.sh"]
