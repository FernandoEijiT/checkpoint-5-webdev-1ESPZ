"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function carregar() {
            const res = await axios.get(
                "https://{projeto}.mockapi.io/api/v1/{recurso}/{id}"
            );
            setData(res.data.data);
        }
        carregar();
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}