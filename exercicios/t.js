

tempoAtividade(tempoDisponível)

function tempoAtividade(tempoDisponível) {
    if (tempoDisponível < 15)
        console.log(`atividade rápida: [ ${tipoAtividade}]`)
    else if ((tempoDisponível >= 15) && (tempoDisponível <= 30))
        console.log(`tempo ideal: [ ${tipoAtividade}]`)
    else if (tempoDisponível > 30)
        console.log(`Hora da diversão: [ ${tipoAtividade}]`)
   
   
    const decidirTipoDeAtividade = (nome, porte, tempo) => {
        let atividade
        switch (porte) {
            case 'P': atividade = "brincar dentro de casa"
                break
            case 'M': atividade = "caminhada no quarteirão"
                break
            case 'G': atividade = "correr no parque"
                break
            default:
                console.log("porte inválido")
        }

        if (tempo < 15) {
            console.log(`atividade rápida: ${atividade}`)
        } else if ((tempo >= 15) && (tempo <= 30)) {
            console.log(`tempo ideal: ${atividade}`)
        } else {
            console.log(`hora da diversão: ${atividade}`)
        }

    }
    decidirTipoDeAtividade('Ada', 'M', 30)
    decidirTipoDeAtividade('Scooby', 'P', 10)
    decidirTipoDeAtividade('Gigi', 'G', 50)
