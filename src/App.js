import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';


export default class App extends Component {

    state = {
        cite: []
    }


    createCite = (datos) => {
        //Obteniedo una copia del state y agregando la nueva cita 
        const cite = [...this.state.cite, datos]
        
        //actualizando el state
        this.setState({
            cite
        })  
    }

    

    render() {
        return (
            <div className="container-fluid">
                <Header 
                    titulo='Administrador de citas'
                />
                <div className="row">
                    <div className="col-md-6">
                        <Formulario 
                            titulo="Agrega las citas aquí"
                            createCite={this.createCite}
                        />
                    </div>
                    <div className="col-md-6">
                        <Citas 
                            citas={this.state.cite}
                        />
                    </div>
                </div>
            </div>
        );
    }
}