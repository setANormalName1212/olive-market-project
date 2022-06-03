const index = {
    login: async (req, res) => {
        res.render('login')
    },
    main: async (req, res) => {
        res.render('main')
    },
    
}

module.exports = index