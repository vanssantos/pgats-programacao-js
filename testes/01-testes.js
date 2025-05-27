
/*
    describe - agrupador de testes
    it - é a implementação do teste

*/

import { exibirNomeDogFormatado } from '../conceitos/teste-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {

    it('deve exibir o nome do dog com maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')

    })

    it('primeiroTest', () => {

    })
})

