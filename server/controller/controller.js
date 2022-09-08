let Contactdb = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new contact
    const contact = new Contactdb({
        
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        address : req.body.address,
        phone : req.body.phone
    })

   

    contact
        .save(contact)
        .then(data => {
            res.redirect('/add-contact');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Contactdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found contact with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving contact with id " + id})
            })

    }else{
        Contactdb.find()
            .then(contact => {
                res.send(contact)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving contact information" })
            })
    }

    
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Contactdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update contact with ${id}. Maybe contact not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update contact information"})
        })
}


exports.delete = (req, res)=>{
    const id = req.params.id;

    Contactdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Contact was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete contact with id=" + id
            });
        });
}