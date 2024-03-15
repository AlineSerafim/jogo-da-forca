const words = [
    { word: "Abacaxi", clue: "Frutas tropicais" },

    { word: "Computador", clue: "Dispositivo eletrônico usado para processar e armazenar informações" },

    { word: "Violino", clue: "instrumento musical de cordas, frequentemente usado em orquestras" },

    { word: "Praia", clue: "local de lazer à beira-mar, frequentado por banhistas e turistas" },

    { word: "Eletricidade", clue: "forma de energia causada pelo movimento de partículas carregadas eletricamente" },

    { word: "pessoa", clue: "ser humano, indivíduo" },

    { word: "livro", clue: "objeto composto por páginas impressas, geralmente encadernadas, usado para leitura" },

    { word: "Neurociência", clue: "Estudo científico do sistema nervoso" },

    { word: "Galáxia", clue: " Grande sistema de estrelas, poeira interestelar, gases e matéria escura" },

    { word: "Equilibrio", clue: "Estado de estabilidade física ou mental" },

    { word: "Amizade", clue: " Relação afetuosa entre pessoas que compartilham interesses e apoiam umas às outras" },

    { word: "Universo", clue: "Todo o espaço e tudo o que existe nele, incluindo estrelas, planetas, galáxias e matéria" },

    { word: "Exploração", clue: "Ato de viajar por lugares desconhecidos para descobrir ou investigar" },

    { word: "Independência", clue: "Condição de não estar sob o controle ou influência de outros." },

    { word: "Fotografia", clue: "Arte ou prática de capturar imagens usando luz e equipamento óptico" },

    { word: "Aventura", clue: " Uma experiência emocionante ou arriscada" },

    { word: "Jogos olímpicos modernos", clue: "Evento esportivo internacional que ocorre a cada quatro anos, composto por diversas modalidades esportivas." },

    { word: "Conta de luz", clue: " Valor a ser pago pelo consumo de eletricidade em uma residência ou estabelecimento" },
    
    { word: "Banho de sol", clue: "Atividade relaxante ao ar livre para receber os benefícios dos raios solares" },

];

export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}