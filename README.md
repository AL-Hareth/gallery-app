# The Gallery Project
This is my first actual project using laravel
The purpose of this project is to allow different users to upload images to the gallery which can only be seen by them.

## Install Dependencies
```bash
$ composer install
$ npm install
```

![Image from url](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg"  height="300" width="500" />

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

