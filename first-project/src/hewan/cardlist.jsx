import React from "react";
import Card from "./cardbody";

function CardList({ dataHewan, onDelete }) {
    return (
        <div style={cardListStyles} className="card-list">
            {dataHewan.map((hewan) => (
                <Card {...hewan} key={hewan.id} onDelete={onDelete} />
            ))}
        </div>
    );
}

const cardListStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    gap: '10px', 
    padding: '10px'
};
export default CardList;
