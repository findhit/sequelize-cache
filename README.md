# sequelize-cache

[![Test Status](http://strider.findhit.com/findhit/sequelize-cache/badge)](http://strider.findhit.com/findhit/sequelize-cache) [![Dependency Status](https://david-dm.org/findhit/sequelize-cache.svg)](https://david-dm.org/findhit/sequelize-cache)

**sequelize-cache** is a caching-layer plugin for [sequelize](https://github.com/sequelize/sequelize).
It has some out-of-the-box features such as the ability to cache: locally, on a memcache server or on a redis server.

**Work in Progress**

Instalation
-----------

```bash

	npm install sequelize-cache --save

```

Usage
-----

```js

var Sequelize = require( 'sequelize' ),
        .plugin( 'sequelize-cache' );

```

### Example with Redis

```js

var redis = require( 'redis' ),
    Sequelize = require( 'sequelize' ),
    SequelizeCache = require( 'sequelize-cache' ),
        .plugin( 'sequelize-cache', {
            store: new SequelizeCache.Store.Redis({
                client: new redis.createClient();
            }),
        });

```
