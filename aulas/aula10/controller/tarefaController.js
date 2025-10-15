function listar(req, res){
    return res.status(200).json({})
}

function criar(req, res){
    return res.status(201).json({})
}

function buscar(req, res, next){
    const {id} = req.params
    next()
}

function atualizar(req, res){
    return res.status(200).json({})
}

function remover(req, res){
    return res.status(204).end()
}

function exibir(req, res){
    return res.json({})
}

module.exports={exibir, remover, atualizar, buscar, criar, listar}