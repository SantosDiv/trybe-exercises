const { encode, decode } = require('../src/exercicioPrt2.1');

describe('Testes para encode e decode', () => {
    it('Testando se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    it('Verifica se a quantidade de caracteres retornados, é a mesma que a passada', () => {
        expect(encode('Diogenes')).toHaveLength(8);
        expect(decode('Diogenes')).toHaveLength(8);
    });
});

describe('Teste para a função encode', () => {
    it('Verifica se as vogais a,e,i,o,u são convertidas para 1,2,3,4 e 5 respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('Verifica se as vogais b,c,g,t,r não são convertidas para 1,2,3,4 e 5 respectivamente', () => {
        expect(encode('bcgtr')).not.toBe('12345');
    });
});