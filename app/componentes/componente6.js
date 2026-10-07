"use client";

import { useState } from "react";

export default function Componente3() {
    const [estadoCivil, setEstadoCivil] = useState("");
    const [estadosCivis, setEstadosCivis] = useState([]);

    function adicionarEstadoCivil() {
        const valor = estadoCivil.trim();

        if (!valor) {
            return;
        }

        setEstadosCivis((listaAtual) => [...listaAtual, valor]);
        setEstadoCivil("");
    }

    return (
        <div>
            <h2>Adicionar estado civil</h2>

            <div>
                <input
                    type="text"
                    value={estadoCivil}
                    onChange={(event) => setEstadoCivil(event.target.value)}
                    placeholder="Digite um estado civil"
                />

                <button
                    type="button"
                    onClick={adicionarEstadoCivil}
                >
                    Adicionar Estado Civil
                </button>
            </div>

            <ul>
                {estadosCivis.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}