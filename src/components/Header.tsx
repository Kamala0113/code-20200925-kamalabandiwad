import React, { Component } from 'react';
import FilterComponent from './FilterComponent';

type headerProps = {
    carTypes: string[],
    selectedFilter: string,
    setFilterCarData: Function,
    updateFilterSelection: Function
}
class Header extends Component<headerProps> {
    render() {
        const { carTypes, selectedFilter, updateFilterSelection } = this.props;
        return (
            <header className="App-header">
                <div className="appHeader" data-testid="header">Car Catalogue</div>
                <FilterComponent carTypes={carTypes} selectedFilter = {selectedFilter} updateFilterSelection={updateFilterSelection} />
            </header>
        )
    }
}

export default Header;