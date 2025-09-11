export const captureEval = (response) => {
    const evalRegex = /Final evaluation \s*([+-]?\d+\.\d+|mate in \d+)/
    const match = response.match(evalRegex)
    if(match) {
        return match[match.length - 1]
    }
    return null
}

export const captureBestMove = (response) => {
    const moveRegex = /bestmove \s+[a-h][1-8][a-h][1-8][qrbn]?/
    const match = response.match(moveRegex)
    if(match) {
        return match[0]
    }
    return null
}