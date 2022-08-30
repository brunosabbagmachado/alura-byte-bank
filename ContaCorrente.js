export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; //convenção da comunidade pra deixar o atributo privado

    sacar (valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar (valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}