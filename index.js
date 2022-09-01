import { Cliente } from './Cliente.js';

import { ContaCorrente } from './Contas/ContaCorrente.js';
import { ContaPoupanca } from './Contas/ContaPoupanca.js';
import { ContaSalario } from './Contas/ContaSalario.js';

import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutentificacao } from './SistemaAutentificacao.js';

const cliente = new Cliente('Ricardo', 11122233309, '111');

const contaCorrente = new ContaCorrente(0, cliente, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente, 1001);
const contaSalario = new ContaSalario(cliente);

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456789');

const gerente = new Gerente('Roberto', 5000, 12378945601);
gerente.cadastrarSenha('123');

const diretorEstaLogado = SistemaAutentificacao.login(diretor, '123456789');
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, '123');
const clienteEstaLogado = SistemaAutentificacao.login(cliente, '111');

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);