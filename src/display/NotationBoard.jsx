const NotationBoard = (game) => {
    const moves = game.history()

    return (
        <div>
            <h3>Moves</h3>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                    {moves.map((move, index) => {
                        if(index % 2 === 0){
                            return (
                                <tr key={index}>
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