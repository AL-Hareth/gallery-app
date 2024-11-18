# The Gallery Project
This is my first actual project using laravel
The purpose of this project is to allow different users to upload images to the gallery which can only be seen by them.

## Install Dependencies
```bash
$ composer install
$ npm install
```

![Image from url]([https://assets.digitalocean.com/articles/alligator/boo.svg](https://imgs.search.brave.com/nVPt_FFadeuDJOhgRslHnSesRik1gq8k3ePPgMMt0tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw) "a title")

## how to run this app
- create a database file in the `database` directory called gallery.sqlite
```bash
$ touch database/gallery.sqlite
```

- create a new migration
```bash
$ php artisan migrate
```

- run the app
```bash
$ php artisan serve
```

- run the hot reload frontend
```bash
$ npm run dev
```

> After running the app and uploading some images they will be stored in the `Storage/public/` directory.

