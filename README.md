# The Gallery Project
This is my first actual project using laravel
The purpose of this project is to allow different users to upload images to the gallery which can only be seen by them.

## Install Dependencies
```bash
$ composer install
$ npm install
```

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

