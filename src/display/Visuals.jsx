import { useEffect, useState, use } from "react"
import NotationBoard from "./NotationBoard"
import useGame from "../hooks/useGame"

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
            {/* Create board */}
            <div className="">
                <NotationBoard game={game}/>
            </div>
            
        </div>
    )
}

export default Visuals