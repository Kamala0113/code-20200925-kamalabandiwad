import React, { Component } from 'react';
import CarItem from './CarItem';
import Car from '../interfaces';
import './carList.css';

type listProps = {
    data: Car[]
}
class CarsList extends Component <listProps>{
    render() {
        const {data} = this.props;
        return (
            <ul className="carContainer">
                {data && data.length > 0 ? data.map((item)=>{
                    return <li key={item.id} className="carList">
                        <CarItem data={item} />
                    </li>
                }) : <div className="noDataDiv">No Data Found</div>}

            </ul>
        )
    }
}

export default CarsList;