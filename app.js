
const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/por-hacer');

console.log(argv);

let comando = argv._[0];


switch(comando){
    case 'create':
        let task = toDo.crear(argv.description);
        console.log(task);
    break;
    case 'list':
        let list = toDo.getList();

        for( let task of list){
            console.log('========== To Do =========='.green);
            console.log(task.description);
            console.log("Status: ", task.completed);
            console.log('==========================='.green);
        }
    break;
    case 'update':  
        let updated= toDo.update(argv.description, argv.completed );
        console.log(updated);
    break;
    case 'delete':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted);
    break;
    default:
        console.log('commando unknow');
    break;
}