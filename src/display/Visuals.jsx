import { useEffect, useState, use } from "react"
import NotationBoard from "./NotationBoard"
import useGame from "../hooks/useGame"
import Board from "./Board"

const Visuals = () => {
    const [game, setGame] = useState()
    const gameData = useGame()
    useEffect(() => {
        gameData.then(data => {setGame(data.game); console.log('Game data loaded:', game)})
    }, [gameData])
    if(!game) {
        return <div>Loading...</div>
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