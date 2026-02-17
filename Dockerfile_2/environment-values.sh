#!/bin/bash
docker build -t node-app .
docker run -d \
  -e PORT=4242 \
  -e POSTGRE_PASSWORD=etna42 \
  -e POSTGRE_USER=admin \
  -p 4242:4242 \
  node-app
