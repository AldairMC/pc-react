import React,{Component} from 'react';

export default class InfoCitas extends Component { 

    deleteCite = () => {
        const idCite = this.props.citas.id
        this.props.deleteCite(idCite)
    }

    render() {

        const citas = this.props.citas

        const {namePet, nameOwner, timeCite, hoursCite, symptomPet} = citas

        return (
            <div className="media mb-3">
                <div className="media-body">
                    <h2 className="mt-0"></h2>
                    <h3 className="card-text">{namePet}</h3>
                    <p className="card-text"><span>Nombre del dueño: </span>{nameOwner}</p>
                    <p className="card-text"><span>Fecha: </span>{timeCite}</p>
                    <p className="card-text"><span>Hora: </span>{hoursCite}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{symptomPet}</p>

                    <button className="btn btn-danger" onClick={this.deleteCite}>Delete</button>
                </div> 
            </div>
        );
    }
}