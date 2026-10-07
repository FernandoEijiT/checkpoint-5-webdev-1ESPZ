"use client";

import { useState } from "react";

export default function Componente1() {
    const [nome, setNome] = useState("");
    const [nomes, setNomes] = useState([]);

    function adicionarNome() {
        const valor = nome.trim();

        if (!valor) {
            return;
        }

        setNomes((listaAtual) => [...listaAtual, valor]);
        setNome("");
    }

    return (
        <div>
            <h2>Adicionar nome</h2>

            <div>
                <input
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Digite um nome"
                />

                <button
                    type="button"
                    onClick={adicionarNome}
                >
                    Adicionar nome
                </button>
            </div>

            <ul>
                {nomes.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}