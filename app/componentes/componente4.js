"use client";

import { useState } from "react";

export default function Componente3() {
    const [cpf, setCpf] = useState("");
    const [cpfs, setCpfs] = useState([]);

    function adicionarCpf() {
        const valor = cpf.trim();

        if (!valor) {
            return;
        }

        setCpfs((listaAtual) => [...listaAtual, valor]);
        setCpf("");
    }

    return (
        <div>
            <h2>Adicionar CPF</h2>

            <div>
                <input
                    type="text"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    placeholder="Digite um CPF"
                />

                <button
                    type="button"
                    onClick={adicionarCpf}
                >
                    Adicionar CPF
                </button>
            </div>

            <ul>
                {cpfs.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}