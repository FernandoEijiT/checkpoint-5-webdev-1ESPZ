"use client";

import { useState } from "react";

export default function Componente3() {
    const [sexo, setSexo] = useState("");
    const [sexos, setSexos] = useState([]);

    function adicionarSexo() {
        const valor = sexo.trim();

        if (!valor) {
            return;
        }

        setSexos((listaAtual) => [...listaAtual, valor]);
        setSexo("");
    }

    return (
        <div>
            <h2>Adicionar sexo</h2>

            <div>
                <input
                    type="text"
                    value={sexo}
                    onChange={(event) => setSexo(event.target.value)}
                    placeholder="Digite um sexo"
                />

                <button
                    type="button"
                    onClick={adicionarSexo}
                >
                    Adicionar sexo
                </button>
            </div>

            <ul>
                {sexos.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}