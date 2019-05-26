import React,{Component} from 'react';
import PropTypes from 'prop-types';

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
                    <h3 className="mt-0">{namePet}</h3>
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


InfoCitas.propTypes = {
    citas: PropTypes.shape({
        namePet: PropTypes.string.isRequired, 
        nameOwner: PropTypes.string.isRequired,  
        timeCite: PropTypes.string.isRequired,
        hoursCite: PropTypes.string.isRequired, 
        symptomPet: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    deleteCite: PropTypes.func.isRequired

}
