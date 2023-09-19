const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.method = 'OPTIONS') {
        next()//если меторд = OPTIONS -  пропускаем, нас интересует только POST GET PUT DELETE 
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'не авторизован'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        
        res.status(401).json({message: 'Пользователь не авторизован'})
    }
}