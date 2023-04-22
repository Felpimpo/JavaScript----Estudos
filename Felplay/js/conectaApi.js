async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoCovertida = await conexao.json();

    return conexaoCovertida
}

export const conectaApi = {
    listaVideos
}