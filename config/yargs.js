const description = {
    demand: true,
    alias: 'd',
    desc: 'Description task to do'
}
const completed = {
    alias: 'c',
    desc: 'put the task as completed',
    default: true
}

const argv = require('yargs')
            .command('create', 'Create a new task',{
               description
            })
            .command('update', 'update a task', {
                description,
                completed
            })
            .command('delete', 'deleted any task that you dont want relize',{
                description
            })
            .help()
            .argv;

module.exports = {
    argv
}