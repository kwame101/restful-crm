import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

/*
* Allow user to create a new contact form
*/
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

/*
* Allow user to retrieve all contacts
*/
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
}

/*
* Allow user to get contact by id
*/
export const getContactById = (req, res) =>{
    Contact.findById(req.params.contactId, (err, contact) =>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

/*
* Update user contact 
*/
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId },
         req.body, { new: true}, (err, contact) =>{
             if (err) {
                 res.send(err);
             }
             res.json(contact);
    });
}

/*
* Allow user to delete a contact by id
*/
export const deleteContact = (req, res) =>{
    Contact.remove({ _id: req.params.contactId },
        req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'You have successfully deleted contact' });
        });
}
