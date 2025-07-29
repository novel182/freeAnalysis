import createGame from "../utils/createGame"
import NotationBoard from "./NotationBoard"

const Visuals = async () => {
    const game = await createGame()
    return (
        <div>
            {/* Create board */}
            <NotationBoard game={game}/>
        </div>
    )
}

export default Visuals