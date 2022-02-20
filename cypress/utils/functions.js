const faker = require('faker-br');

export const generateNewCPF = () => {
  let randomCPF = faker.br.cpf();

  return randomCPF;
};