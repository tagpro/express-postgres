import bookshelf from './db';

var User = bookshelf.Model.extend({
    tableName: 'users'
});

let user = new User({
    first_name: 'Jaspreet',
    last_name: 'Singh',
});

export {
    User
}