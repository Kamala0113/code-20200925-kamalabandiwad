import React, { Component, Fragment } from 'react';
import Car from '../interfaces';
type carProps = {
    data: Car
}
class CarItem extends Component <carProps>{
    render() {
        const {data} = this.props;
        return (
            <Fragment>
                <figure className="figContainer" data-testid={`carItem-${data.id}`}>
                    <img src={`../images/${data['img-link']}`} alt={data.name} />
                    <figcaption>{data.name}</figcaption>
                </figure>
            </Fragment>
        )
    }
}

export default CarItem;