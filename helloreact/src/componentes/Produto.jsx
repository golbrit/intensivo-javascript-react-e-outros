import React from 'react'

function Produto(props) {
    return (
        <div >
            <p>Porduto: {props.p.nome}</p>
            <p>Preco: {props.p.preco}</p>
            <p>Descricao: {props.p.descricao}</p>
        </div>
    )
}

export default Produto
