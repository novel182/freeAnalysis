import { Chess } from "chess.js"
import { fetchLatestGameData } from "../utils/query.js"
import { getPGN } from "../utils/getPGN.js"

const createGame = async () => {
    const data = await fetchLatestGameData()
    const pgn = getPGN(data)

    const chess = new Chess()
    chess.loadPgn(pgn)
    console.log('Chess game loaded with the final board state\n', chess.ascii())
    return chess
}

export default createGame