const knex = require('./knex')

function createMsg(message){
    return knex('messages'.insert(message))
}

function getAllMsg() {
    return knex("messages").select("*")
}

module.exports = {createMsg, getAllMsg}