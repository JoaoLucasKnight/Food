import api from "./api";


export async function novoCliente (nome, user, email, telefone, senha){
    try {
        await api.post ('/userC', {
            nome: nome,
            user: user,
            email: email,
            telefone: telefone,
            senha: senha
    });
    return 'sucesso'
    }
    catch (erro){
        console.log(erro)
        return 'erro'
    }
}

export async function pegarCliente(nome){
    try{
        const resultado = api.get (`/userC?user=${nome}`)
        return resultado.data[0]
    }catch (erro){
        console.log(erro)
        return{}
    }
}