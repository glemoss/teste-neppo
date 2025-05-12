export async function findAddressByCep(cep) {
  const cleanCep = cep.replace(/\D/g, '');
  
  if (cleanCep.length !== 8) {
    return 'CEP inválido. O CEP deve conter 8 dígitos.';
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json`);
    const data = await response.json();
    
    if (data.erro) {
      return 'CEP não encontrado.';
    }

    const { logradouro, bairro, localidade, uf } = data;
    return `${logradouro}, ${bairro}, ${localidade} - ${uf}`;

  } catch (error) {
    return 'Erro ao consultar o endereço.';
  }
}