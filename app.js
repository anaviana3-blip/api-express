import express from 'express';

const app = express();
const PORT = 3000;

const usuarios = [
    {id: 1, nome: 'Pedro'},
    {id: 2, nome: 'Sarah'}
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuario', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: 'João'
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});