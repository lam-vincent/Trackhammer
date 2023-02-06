import Slot from "./Slot";
import { useState, useEffect } from "react"
import "../styles/Board.css";

function Board() {
    return (
        <div className="card">
            <div className="main">
                <div className="container">
                    {[...Array(18)].map((_, key) => (
                        <Slot key={key} index={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;
