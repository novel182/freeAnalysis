import { useState, useRef } from "react"
import { Chessboard } from "react-chessboard"

const Board = ({game}) => {
    // const currGame = useRef(game)
    const [position, setPosition] = useState(game.fen())
    const options = {
        position
    }

    return (
        <div style={{ width: "575px", height: "575px"}}>
            <Chessboard options={options}/>
        </div>
    )
}

export default Board