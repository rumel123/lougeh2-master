const {createData,readData} = require('../../controllers/customers/app')

const route = ({router,makeExpressCallback}) => {
    //configure route and attached callbacks with controller
    //fetching customer
    router.get('/customer',makeExpressCallback(readData))
    router.get('/customer/:id',makeExpressCallback(readData))
    //add customer
    router.post('/customer',makeExpressCallback(createData))

    return router
}

module.exports = route