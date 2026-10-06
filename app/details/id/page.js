"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function carregar() {
            const res = await axios.get(
                "https://6abc410ab2118ed7abb9a6d6.mockapi.io/:endpoint"
            );
            setData(res.data.data);
        }
        carregar();
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}