const insertCustomer = ({postcustomers,query}) => {
    return async function post(info) {
        let datas = await postcustomers(info)
        let data = {
                fullname: datas.getF(),
                contact: datas.getC(),
                address: datas.getA()
        }

      //fetch data with existing fullname
         const validate1 = await query.validationCustomerName({data}) 
         const length = validate1.length 
         //if the query read a existing data it will throw an error or else will insert a customer
         if(length > 0) { throw new Error(`Inputed Name Exist, please Choose other Name!`)}
        const res = await query.addCustomer({data})
        let msg = `We have a problem.`
        //throwing the notification success
        if (res) msg = `Successfully adding the Customer.` 
        return msg  
    }
}
module.exports=insertCustomer