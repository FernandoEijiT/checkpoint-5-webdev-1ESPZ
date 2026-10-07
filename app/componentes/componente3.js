"use client";

import { useState } from "react";

export default function Componente3() {
    const [telefone, setTelefone] = useState("");
    const [telefones, setTelefones] = useState([]);

    function adicionarTelefone() {
        const valor = telefone.trim();

        if (!valor) {
            return;
        }

        setTelefones((listaAtual) => [...listaAtual, valor]);
        setTelefone("");
    }

    return (
        <div>
            <h2>Adicionar telefone</h2>

            <div>
                <input
                    type="text"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                    placeholder="Digite um telefone"
                />

                <button
                    type="button"
                    onClick={adicionarTelefone}
                >
                    Adicionar telefone
                </button>
            </div>

            <ul>
                {telefones.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}