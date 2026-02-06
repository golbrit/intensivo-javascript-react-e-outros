import React from 'react'
import Produto from './produto';
import './ListaProdutos';

function ListaProdutos() {
        
    const produtos = [
        {id: Date.now(), nome: "Garrafa", preco: 50, descricao: "garrafa"},
        {id: Date.now()+1, nome: "pedar", preco: 50, descricao: "pedar"}
    ]
    function cadastrarPorduto(){
        const produto = {
            id: Date.now(),
            nome: prompt("Dígite o nome do produto: "),
            preco: prompt(Number("Preço: ")),
            descricao: prompt("Descrição: ")
        }
    }

    return (
        <div className ={"lista"}>
            <p>Lista de produtos</p>
            <button onClick = {cadastrarPorduto}>Cadastrar Porduto</button>
            <div className="renderCardis">
                {produtos.map((prod)=> (
                        <Produto p = {prod} key= {prod.id}/>
                    ))}
                {/* <Produto p = {produtos[0]}/> */}

            </div>

        </div>
    )
}

export default ListaProdutos
