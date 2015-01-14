var Store = module.exports = {};

Store.Default = Store.Local = require( './local' );
Store.Redis = require( './redis' );
Store.Memcache = require( './memcache' );
