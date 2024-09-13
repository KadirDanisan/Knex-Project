const knex = require('./knex');

const Comment = {
    getAll: ()=> {
        return knex('comments').getAll();
    },
    create: (comment)=> {
        return knex('comments').insert(comment).returning('*');
    },
    getById: (id)=> {
        return knex('comments').where({id}).first();
    },
    update: (id, comment)=> {
        return knex('comments').where({id}).update(comment);
    },
    delete: (id)=> {
        return knex('comments').where({id}).delete();
    }
}

module.exports = Comment;