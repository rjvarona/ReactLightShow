import React, { setState } from 'react';


export default class Particle extends Component{
    constructor(props) {
        super(props);


        //pass in props?
        this.state = {
            x: '',
            y: '',
            directionX: '',
            directionY: '',
            size: '',
            color: '',
        }

    }
    
    
    render() {
        return(
                <div>
                    <p>yosh circle</p>
                </div>
        );
    }
}