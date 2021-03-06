import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';


export default class App extends Component {

    state = {
        cite: []
    }

    componentDidMount(){
        const citeLS = localStorage.getItem('citas')
        if(citeLS){
            this.setState({
                cite: JSON.parse(citeLS)
            })
        }
    }

    //Metodo de Ciclo de vida - se ejecuta cuando algo cambia en el componente
    componentDidUpdate() {
        localStorage.setItem(
            //JSON.stringify - de array|ojects a string
            'citas', JSON.stringify(this.state.cite)
        )
    }

    createCite = (datos) => {
        //Obteniedo una copia del state y agregando la nueva cita 
        const cite = [...this.state.cite, datos]
        
        //actualizando el state
        this.setState({
            cite
        })  
    }

    deleteCite = id => {
        //Obteniendo copia del state
        const citasActuales = [...this.state.cite]
        
        //Eliminando la cita con filter
        const cite = citasActuales.filter(i => i.id !== id)

        //Actualizando el state
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
                            deleteCite={this.deleteCite}
                        />
                    </div>
                </div>
            </div>
        );
    }
}