import { useState, useEffect } from "react"
import { Chess } from "chess.js"
import { fetchLatestGameData } from "../utils/query.js"
import { getPGN } from "../utils/getPGN.js"

const useGame = async () => {
    const [game, setGame] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchLatestGameData()
            .then(data => {
                const pgn = getPGN(data)
                const chess = new Chess()
                chess.loadPgn(pgn)
                setGame(chess)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
            })
    }, [])
    return { game, isLoading, error }
}

export default useGame