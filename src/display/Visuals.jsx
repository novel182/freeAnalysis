import { useEffect, useState } from "react"

import NotationBoard from "./NotationBoard"
import useGame from "../hooks/useGame"
import Board from "./Board"
import { captureEval, captureBestMove } from "../utils/captureResponses"

const Visuals = () => {
    const [game, setGame] = useState()
    const gameData = useGame()
    const [evaluation, setEvaluation] = useState('0.00')
    const [bestMove, setBestMove] = useState('')
    const fish = new Worker('public/stockfish-17.1-single-a496a04.js')

    useEffect(() => {
        gameData.then(data => {setGame(data.game); console.log('Game data loaded:', game)})
        fish.postMessage('position startpos')
        fish.postMessage('eval')
    }, [gameData])

    if(!game) {
        return <div>Loading...</div>
    }

    fish.onmessage = (event) => {
        const evalResult = captureEval(event.data)
        const bestMoveResult = captureBestMove(event.data)

        if(evalResult) setEvaluation(evalResult)
        if(bestMoveResult) setBestMove(bestMoveResult)
    }

    console.log(evaluation, bestMove)

    return (
        <div>
            <div className="flex justify-end overflow-hidden">
                <Board game={game}/>
                <NotationBoard game={game} evaluation={evaluation}/>
            </div>
            
        </div>
    )
}

export default Visuals