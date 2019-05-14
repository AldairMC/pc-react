import React,{Component} from 'react';

export default class Citas extends Component {

    render() {

        const cite = this.props.citas;

        const mensaje = Object.keys(cite).length === 0
            ? 'No hay citas' 
            : 'Administra tus citas aquí'

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                </div>
            </div>
        );
    }
}