module.exports = (err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({ message: 'Error interno del servidor'});
};