import db from '../models/index'
import CRUDService from '../services/CRUDService';

let getHomePage = async(req, res) => {
    try{
        let data = await db.User.findAll();
        
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch(e){
        console.log(e)
    }
    
}

let getAboutHius = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) => {
    let message = await CRUDService.createNewUserz(req.body);
    console.log(message)
    return res.send('ahha')
}

module.exports = {
    getHomePage: getHomePage,
    getAboutHius: getAboutHius,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}
