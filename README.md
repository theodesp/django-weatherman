# django-weatherman

A Django Python app using Webpack and React that enables a user to
be able to see the minimum, maximum, average temperature, and humidity for a given city and period of time.

## Running Locally

Make sure you have Node and NPM [installed property](https://nodejs.org)

Make sure you have Python [installed properly](http://install.python-guide.org).

then just run:
```sh
$ npm install
$ pip install -r requirements.txt
$ npm run build:dev
$ python manage.py collectstatic
$ python manage.py runserver
```

Your app should now be running on [localhost:8000](http://localhost:8000/).

## Production Build

Build using production flags and a server of your choice
make sure you put the ALLOWED_HOSTS setting point to the production host and
you have a server serving the static folder assets

```sh
$ sed 's/ALLOWED_HOSTS = ['*']/ALLOWED_HOSTS = ['example.com']/' weatherman/settings.py
$ npm install
$ pip install -r requirements.txt
$ npm run build
$ python manage.py collectstatic
$ gunicorn -b :80 weatherman.wsgi --log-file - 
```

Your app should now be running on [example.com](http://example.com).

## About the Application