import React,{Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class Formulario extends Component {

    constructor(props){
        super(props);
        this.namePetRef = React.createRef();
        this.nameOwnerRef = React.createRef();
        this.timeCiteRef = React.createRef();
        this.hoursCiteRef = React.createRef();
        this.symptomPetRef = React.createRef();
    }
    

    state = {
        error: false
    }

    createNewCite = (e) =>{
        e.preventDefault();

        const  namePet = this.namePetRef.current.value,
                nameOwner = this.nameOwnerRef.current.value,
                timeCite = this.timeCiteRef.current.value,
                hoursCite = this.hoursCiteRef.current.value,
                symptomPet = this.symptomPetRef.current.value

        //  Validando el formulario        
        if(namePet === '' || nameOwner === '' || timeCite === '' || hoursCite === '' || symptomPet === ''){
            this.setState({
                error: true
            })
        }else{
            const data = {
                id: uuid(),
                namePet,
                nameOwner,
                timeCite,
                hoursCite,
                symptomPet 
            }
    
            this.props.createCite(data)
    
            //reinniciando el formulario
            e.currentTarget.reset();

            this.setState({
                error: false
            })
        }
    }

    render() {

        const errores = this.state.error

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">{this.props.titulo}</h2>
                    <form onSubmit={this.createNewCite}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.namePetRef} className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.nameOwnerRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.timeCiteRef} className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.hoursCiteRef} className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.symptomPetRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {errores? <div className="alert alert-danger text-center">Todo los campos son obligatorios</div> 
                        : ''}
                </div>
            </div>

            
        );
    }
}

Formulario.propTypes = {
    titulo: PropTypes.string.isRequired,
    createCite: PropTypes.func.isRequired
}