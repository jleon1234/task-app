const fs = require('fs');

let listtoDo = [];

const saveDB = () => {
    let data = JSON.stringify(listtoDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) 
            throw new Error('Dont save');
      });
}

const loadDB = () => {

    try {
        listtoDo = require('../db/data.json');
    } catch (error) {
       listtoDo = [];
    }
}



const crear = ( description ) => {
    loadDB();
    let toDo = {
        description,
        completed: false
    };
    
    listtoDo.push(toDo);

    saveDB();
    return toDo;
}

const getList = () => {
    loadDB();
    return listtoDo;   
}

const update = ( description , completed = true ) => {
    loadDB();

    let index = listtoDo.findIndex ( task => task.description === description);

    if(index >= 0){
        listtoDo[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }

}

const deleted = ( description ) => {
    loadDB();

    let index = listtoDo.findIndex ( task => task.description === description);

    if(index >= 0){
        listtoDo.splice(listtoDo[index], 1);
        saveDB();
        return true;
    }else{
        return false;
    }

}

module.exports = {
    crear,
    getList,
    update,
    deleted
}