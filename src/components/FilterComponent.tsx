import React from "react";
type filterProps = {
    carTypes: string[],
    selectedFilter: string,
    updateFilterSelection: Function
}
class FilterComponent extends React.PureComponent<filterProps>{
    render(){
        const { carTypes, selectedFilter } = this.props;
        return (
            <div className="filterDiv">
                <select value={selectedFilter} onChange={(event) => this.props.updateFilterSelection(event.target.value)}>
                    <option value="all">All</option>
                    {
                        carTypes && carTypes.length > 0 && carTypes.map((type, index)=>{
                            return <option key={type+index} value={type}>{type}</option>
                        })
                    }
                </select>
                <label className="filterLabel">Filter by Type: </label>
            </div>
        )
    }
    
}

export default FilterComponent;