import React from "react";
import Card from "./Card";

function CardList({ datasiswa, onDelete }) {
    return (
        <div style={cardListStyles} className="card-list">
            {datasiswa.map((siswa) => (
                <Card {...siswa} key={siswa.id} onDelete={onDelete} />
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
