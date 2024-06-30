import React, { Component } from 'react'

// functional component
// function ItemDescription({name, description}){
//     return (
//         <div>
//             <p>{name}</p>
//             <p>{description}</p>
//         </div>
//     )
// }

// export default ItemDescription



//class based component
export default class ItemDescription extends Component {
    render() {
        const {name, description} = this.props;

        return (
            <div>
            <p>{name}</p>
            <p>
                <i>{description}</i>
            </p>
            </div>
        )
    }
}