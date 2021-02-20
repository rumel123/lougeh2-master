const {createUsers,readUsers,updateUsers,deleteUsers} = require('../../use-case/user/app')

const regester = require('./regesterUser')
const remove = require('./removeUser') 
const verifyLogin = require('./verifyUser')
const dataEdited = require('./editedUser')


const regesterUser = regester({createUsers})
const removeUser = remove({deleteUsers})
const verifyLog = verifyLogin({readUsers})
const editUser = dataEdited({updateUsers})

const services = Object.freeze({
    regesterUser,removeUser,verifyLog,editUser 
})

module.exports = services
module.exports = {regesterUser,removeUser,verifyLog,editUser} 