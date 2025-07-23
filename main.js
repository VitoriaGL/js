//classe abstrata : pet 
class Pet {
    constructor() {
        if (new.target === Pet) {
            throw new Error("Não é possível instanciar a classe Pet diretamente.");
        }
    }
    getDescricao() {
        throw new Error("Método getDescricao() deve ser implementado na subclasse.");
    }

}
//classe concreta : filhote
class Filhote extends Pet {
    constructor(nome, idade) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }
    getDescricao() {
        return `Filhote: ${this.nome}, ${this.idade} anos`;
    }
}
class Adulto extends Pet {
    constructor(nome, idade) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }
    getDescricao() {
        return `Adulto: ${this.nome}, ${this.idade} anos`;
    }
}
//instancias
const filhote1 = new Filhote("Rex", 2);
const filhote2 = new Filhote("Fido", 1);

//exibindo as descrições
console.log(filhote1.getDescricao()); // Filhote: Rex, 2 anos
console.log(filhote2.getDescricao()); // Filhote: Fido, 1 anos
const adulto1 = new Adulto("Max", 5);
const adulto2 = new Adulto("Bella", 4);

//exibindo as descrições
console.log(adulto1.getDescricao()); // Adulto: Max, 5 anos
console.log(adulto2.getDescricao()); // Adulto: Bella, 4 anos

//instanciando a classe Pet diretamente (deve lançar erro)
try {
    const pet = new Pet("Miau", "Au Au");
} catch (error) {
    console.error(error.message); // Não é possível instanciar a classe Pet diretamente.
}
