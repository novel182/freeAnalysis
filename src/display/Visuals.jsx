import { useEffect, useState, use } from "react"
import NotationBoard from "./NotationBoard"
import useGame from "../hooks/useGame"
import Board from "./Board"

const Visuals = () => {
    const [game, setGame] = useState()
    const gameData = useGame()
    const [worker, setWorker] = useState()

    useEffect(() => {
        gameData.then(data => {setGame(data.game); console.log('Game data loaded:', game)})
    }, [gameData])

    useEffect(() => {
        const fishWrkr = new Worker('public/stockfish-17.1-lite-51f59da.js')
        setWorker(fishWrkr)
    }, [])

    if(!game) {
        return <div>Loading...</div>
    }

    worker.postMessage('uci')
    worker.postMessage('ucinewgame')
    worker.postMessage('position fen ' + game.fen())
    worker.postMessage('go depth 10')

    worker.onmessage = (event) => {
        const message = event.data
        console.log(message)
    }

    return (
        <div>
            <div className="flex justify-end overflow-hidden">
                <Board game={game}/>
                <NotationBoard game={game}/>
            </div>
            
        </div>
    )
}

export default Visuals