import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header.jsx';
import { getdata } from './data.js'; 
import CardList from './CardList';

class Biodata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSiswa: getdata()
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        const dataSiswa2 = this.state.dataSiswa.filter(siswa => siswa.id !== id);
        this.setState({ dataSiswa: dataSiswa2 });
    }

    render() {
        return (
            <div>
                <Header />
                <CardList datasiswa={this.state.dataSiswa} 
                onDelete={this.handleDelete} />
            </div>
        );
    }
}

const element = (
    <div
        style={{
            backgroundColor: '#FFFAE6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontFamily: 'Verdana, sans-serif',
        }}
    >
        <Biodata />
    </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
