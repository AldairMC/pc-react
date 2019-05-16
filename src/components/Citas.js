import React,{Component} from 'react';
import InfoCitas from './InfoCitas';

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
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(i => (
                            <InfoCitas 
                                key={i}
                                citas={this.props.citas[i]}
                                deleteCite={this.props.deleteCite} 
                            />
                        ))}
                    </div>
                </div>


            </div>
        );
    }
}