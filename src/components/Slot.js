import React, { useEffect, useState } from "react";

function Slot(index) {
    const colors = ["var(--muted-black)", "var(--muted-yellow)", "var(--muted-red)", "var(--muted-blue)", "var(--muted-green)", "var(--muted-orange)", "var(--muted-purple)"];

    const [colorIndex, setColorIndex] = useState(parseInt(localStorage.getItem(index.index)) || 0);

    const handleChange = () => {
        setColorIndex(prev => prev + 1 === colors.length ? 0 : prev + 1);
        localStorage.setItem(index.index, JSON.stringify(colorIndex + 1 === colors.length ? 0 : colorIndex + 1));
    };

    const style = {
        backgroundColor: colors[colorIndex],
    };
    return (
        <div onClick={handleChange} style={style}>
        </div>
    );
}

export default Slot;
