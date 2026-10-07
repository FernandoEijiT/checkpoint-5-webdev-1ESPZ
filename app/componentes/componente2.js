"use client";

import { useState } from "react";

export default function Componente2() {
    const [email, setEmail] = useState("");
    const [emails, setEmails] = useState([]);

    function adicionarEmail() {
        const valor = email.trim();

        if (!valor) {
            return;
        }

        setEmails((listaAtual) => [...listaAtual, valor]);
        setEmail("");
    }

    return (
        <div>
            <h2>Adicionar email</h2>

            <div>
                <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Digite um email"
                />

                <button
                    type="button"
                    onClick={adicionarEmail}
                >
                    Adicionar email
                </button>
            </div>

            <ul>
                {emails.map((item, index) => (
                    <li key={`${item}-${index}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}