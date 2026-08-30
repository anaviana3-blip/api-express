import express from 'express'; 
 
const app = express(); 
const PORT = 3000; 
 
const usuarios = [ 
    {id: 1, nome: 'Pedro'}, 
    {id: 2, nome: 'Sarah'} 
]; 

const produtos = [
    {id: 1, nome: 'Notebook'},
    {id: 2, nome: 'Celular'},
    {id: 3, nome: 'Camiseta'}
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

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    res.json(produto);
});
 
app.listen(PORT, () => { 
    console.log(`Servidor rodando em http://localhost:${PORT}`); 
});