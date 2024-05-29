import React from 'react';
import DeleteButton from './Delbtn';

function Card({ id, nama, jenis, jumlah_kaki, foto,behaviour, onDelete }) {
    return (
        <div style={cardStyles}>
            <CardImage foto={foto} />
            <CardBody nama={nama} jenis={jenis} jumlah_kaki={jumlah_kaki} behaviour={behaviour} />
            <DeleteButton id={id} onDelete={onDelete} style={buttonStyles}/>
        </div>
    );
}

function CardBody({ nama, jenis, jumlah_kaki, behaviour }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Nama: {nama}</li>
            <li>Jenis {jenis}</li>
            <li>Jumlah Kaki: {jumlah_kaki}</li>
            <li>Behaviour: {behaviour}</li>
        </ul>
    );
}

function CardImage({ foto }) {
    return <img src={foto} alt="Orang ganteng" style={{ width: '140px', height: '90px', marginLeft: '10px', borderRadius: '10px' }} />;
}

const cardStyles = {
    border: '2px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px'
};

const buttonStyles = {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};

export default Card;
