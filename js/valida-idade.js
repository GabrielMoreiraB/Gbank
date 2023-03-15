export default function ehMaiorDeIdade(campo){
    const dataNascimento  = new Date(campo.value);
    validaIdade(dataNascimento)
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getTUCFullYer() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18
}