
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let getAboutHius = (req, res) => {
    return res.render('test/about.ejs')
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutHius: getAboutHius,

}
