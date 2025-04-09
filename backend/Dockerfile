FROM python:3.12.7-slim-bookworm

WORKDIR /app
COPY ./requirements.txt /app/

RUN pip install --upgrade pip && pip install -r requirements.txt