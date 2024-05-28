FROM python:3.11

# set work directory
WORKDIR /app

# install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# copy files
COPY . /app/