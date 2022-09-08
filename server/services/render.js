const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/contacts')
        .then(function(response){

            res.render('index', { contacts : response.data });
        })
        .catch(err =>{

            res.send(err);
        })

    
}

exports.add_contact = (req, res) =>{
    res.render('add_contact');
}

exports.update_contact = (req, res) =>{
    axios.get('http://localhost:3000/api/contacts', { params : { id : req.query.id }})
        .then(function(contactdata){
            res.render("update_contact", { contact : contactdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

// exports.view_contact = (req, res) =>{
//     res.render('view_contact');
// }

exports.view_contact = (req, res) => {
    axios.get('http://localhost:3000/api/contacts', { params : { id : req.query.id }})
        .then(function(contactdata){
            res.render("view_contact", { contactss : contactdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}