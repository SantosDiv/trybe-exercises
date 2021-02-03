const { workDays, weekDays } = require('../matcherNot');

// Verifica se contêm o item dentro do array em questão
describe('Bloco do matcher toContain', () => {
  it('Testa se Domingo está na lista', () => {
    expect(weekDays).toContain('Sunday');
  });
});

// Verifica pelo tamanho do array
describe('Bloco do matcher toHaveLength', () => {
  it('Verifica se contêm cinco dias de trabalho', () => {
    expect(workDays).toHaveLength(5);
  });
});

// Verificação para array, objectos e números para ver se é estritamente igual.
// O toBe funciona só para strings e números.
describe('Bloco do matcher toEqual', () => {
  it('É um array dos dias de trabalho do tipo [Monday, Tuesday, ..., Friday]', () => {
    expect(workDays).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  });
});

// Existem muitos outros matchers. Verificar a documentação do JEST