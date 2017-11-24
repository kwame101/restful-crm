import { addNewContact, 
        getContacts, 
        getContactById, 
        updateContact,
        deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    //get call
    .get((req, res, next) =>{
        //use middleware here
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },getContacts)   

    //post endpoint
    .post(addNewContact);   

     app.route('/contact/:contactId')
     //get by id
     .get(getContactById)
    //put call
    .put(updateContact)    
    //delete call
    .delete(deleteContact); 
}

export default routes;