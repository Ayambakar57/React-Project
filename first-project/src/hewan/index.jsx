import React from "react";
import { createRoot } from "react-dom/client";
import { gethewan } from "./datahewan";
import CardList from "./cardlist";
import Header from "./header";

class Biodata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHewan: gethewan()
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        const dataHewan2 = this.state.dataHewan.filter(hewan => hewan.id !== id);
        this.setState({ dataHewan: dataHewan2 });
    }

    render() {
        return (
            <div>
                <Header />
                <CardList dataHewan={this.state.dataHewan} 
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