const personagem1 = {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
      return this.formatarDescricao();
    },
    formatarDescricao: function () {
      return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de velocidade: ${this.velocidade}\nNível de força: ${this.forca}\nNível de resistência: ${this.resistencia}`;
    }
  }
const personagem2 = {
  nome: 'Tony Stark',
  codinome: 'Homem de Ferro',
  armaPrincipal: 'Armadura Mark',
  armaSecundaria: 'Rajadas de energia',
  velocidade: 90,
  forca: 85,
  resistencia: 75,
  descricao: function () {
    return this.formatarDescricao()
  },
  formatarDescricao: function () {
    return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de velocidade: ${this.velocidade}\nNível de força: ${this.forca}\nNível de resistência: ${this.resistencia}`
  },
}

const personagem3 = {
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: 'Mjolnir',
    armaSecundaria: 'Stormbreaker',
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    descricao: function () {
      return this.formatarDescricao();
    },
    formatarDescricao: function () {
      return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de velocidade: ${this.velocidade}\nNível de força: ${this.forca}\nNível de resistência: ${this.resistencia}`;
    }
}
  
const personagem4 = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Força Bruta',
    armaSecundaria: '',
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function () {
      return this.formatarDescricao();
    },
    formatarDescricao: function () {
      return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de velocidade: ${this.velocidade}\nNível de força: ${this.forca}\nNível de resistência: ${this.resistencia}`;
    }
}
  
const personagem5 = {
    nome: 'Thanos',
    codinome: 'Titã Louco',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: 'Força sobre-humana',
    velocidade: 65,
    forca: 100,
    resistencia: 100,
    descricao: function () {
      return this.formatarDescricao();
    },
    formatarDescricao: function () {
      return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de velocidade: ${this.velocidade}\nNível de força: ${this.forca}\nNível de resistência: ${this.resistencia}`;
    }
}
  
const personagens = new Array(personagem1, personagem2, personagem3, personagem4, personagem5);

function compararHerois(personagens) {
    let maisForte = personagens[0];

    for (let i = 1; i < personagens.length; i++) {
        if (personagens[i].forca > maisForte.forca) {
            maisForte = personagens[i];
        }
    }
    console.log(`O personagem mais forte é: ${maisForte.codinome}`)
    console.log(maisForte.descricao());
}

compararHerois(personagens);
