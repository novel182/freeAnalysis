const NotationBoard = ({game, evaluation}) => {
    const moves = game.history()

    return (
        <div className="ml-4 w-[300px] max-h-[600px] overflow-y-auto">
            <p>evaluation: {evaluation} </p>
            <h3>Moves</h3>
            <table className="w-full border-collapse">
                <tbody>
                    {moves.map((move, index) => {
                        if(index % 2 === 0){
                            return (
                                <tr key={index}>
                                    <td>{index / 2 +1}</td>
                                    <td style={{ padding: "5px" }}>
                                        {move || ""}
                                    </td>
                                    <td style={{ padding: "5px" }}>
                                        {moves[index + 1] || ""}
                                    </td>
                                </tr>
                            )
                        }
                        return null;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default NotationBoard