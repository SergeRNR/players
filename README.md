## Installation

```sh
# install python dependencies
pip install django==1.9
pip install djangorestframework
pip install django-cors-headers

# generate players information
python manage.py shell < players/scripts/add.py
# clear DB
python manage.py flush

# UI
cd ui/
# install UI libs
npm install
```

## Start application

Start API server (on http://127.0.0.1:8000/)
```sh
python manage.py runserver
```

build UI application
```sh
cd ui/
# build app
npm run build
```
To start dev server (on http://localhost:8080)
```sh
npm start
```
