import React, { useEffect, useState } from "react"

const fetchCertificados = async () => {
    const response = await fetch("https://api.notion.com/v1/databases/1aac6669145580eaa412e128315775cc/query", {
        method: "POST",
        headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
        },
    })

    if (response.ok) {
        const data = await response.json()
        return data.results.map((certificado) => ({
            nome: certificado.properties["Nome do Certificado"]?.title?.[0]?.text?.content || "Sem Nome",
            imagem: certificado.cover?.external?.url || certificado.cover?.file?.url || "",
            data: certificado.properties["Data de Emissão"]?.date?.start || "Sem data",
            url: certificado.url,
        }))
    } else {
        throw new Error("Erro ao buscar certificados")
    }
}

export default function Certificados() {
    const [certificados, setCertificados] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCertificados()
            .then(setCertificados)
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Carregando certificados...</p>

    return (
        <div>
            <h2>Certificados</h2>
            <ul>
                {certificados.map((certificado, index) => (
                    <li key={index}>
                        {certificado.imagem && <img src={certificado.imagem} alt={certificado.nome} width="200" />}
                        <h3>{certificado.nome}</h3>
                        <p>Data de Emissão: {certificado.data}</p>
                        <a href={certificado.url} target="_blank" rel="noopener noreferrer">Ver Certificado</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
