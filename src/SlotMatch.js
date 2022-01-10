import React from "react";
const SlotM = (props) => {


    let { x, y, z } = props;
    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot-inner">
                    <h1 style={{ textAlign: "center" }}>{x} {y} {z}</h1>
                    <h1  style={{ textAlign: "center" }}>This is Matching</h1>
                    <hr />

                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot-inner">
                    <h1 style={{ textAlign: "center" }}>{x} {y} {z}</h1>
                    <h1>This is Not Matching</h1>
                    <hr />

                </div>
            </>
        )
    }
}
export default SlotM;