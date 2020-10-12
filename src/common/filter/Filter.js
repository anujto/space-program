import React, { Component } from 'react';
import AjaxWrapper from '../../api/AjaxWrapper';
import './Filter.scss'

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spacesData: [],
            selectedYear: null,
            selectedLaunch: null,
            selectedLanding: null,
            years: []
        };
    }

    componentWillMount() {
        const years = [];

        for (let year = 2006; year <= 2020; year++) {

            years.push(year);

        }
        this.setState({ years });
    }


    handleSelectedYear(year) {
        const { selectedLaunch, selectedLanding } = this.state
        if (this.state.selectedYear === year) {
            this.setState({ selectedYear: null });
            this.props.handleFilter(null, selectedLaunch, selectedLanding);
            return;
        }
        this.setState({ selectedYear: year });
        this.props.handleFilter(year, selectedLaunch, selectedLanding);
    }

    handleLaunchType(selectedLaunch) {
        const { selectedYear, selectedLanding } = this.state
        if (this.state.selectedLaunch === selectedLaunch) {
            this.setState({ selectedLaunch: null });
            this.props.handleFilter(selectedYear, null, selectedLanding);
            return;
        }
        this.setState({ selectedLaunch });
        this.props.handleFilter(selectedYear, selectedLaunch, selectedLanding);

    }

    handleLandingType(selectedLanding) {
        const { selectedYear, selectedLaunch } = this.state
        if (this.state.selectedLanding === selectedLanding) {
            this.setState({ selectedLanding: null });
            this.props.handleFilter(selectedYear, selectedLaunch, null);
            return;
        }
        this.setState({ selectedLanding });
        this.props.handleFilter(selectedYear, selectedLaunch, selectedLanding);

    }



    render() {
        const { years, selectedYear, selectedLanding, selectedLaunch } = this.state;



        return (
            <div className='filter'>
                <h5 className='filter-heading'>Filters</h5>
                <div>Launch Year</div>
                <div className='years-button'>
                    {years && years.map((year) => {
                        const active = (year === selectedYear) ? 'active' : ''
                        return <button type='button' key={year} className={`btn-year ${active}`} onClick={() =>
                            this.handleSelectedYear(year)}>{year}</button>
                    })
                    }


                </div>
                <div className='successful-launch'>
                    <h5>Successful Launch</h5>
                    <div>
                        <button type='button' key={1} className={`btn-launch ${selectedLaunch === true ? 'active' : ''}`} onClick={() =>
                            this.handleLaunchType(true)}>True</button>
                        <button type='button' key={2} className={`btn-launch ${selectedLaunch === false ? 'active' : ''}`} onClick={() =>
                            this.handleLaunchType(false)}>False</button>
                    </div>

                </div>

                <div className='successful-landing'>
                    <h5>Successful Landing</h5>
                    <div>
                        <button type='button' key={3} className={`btn-landing ${selectedLanding === true ? 'active' : ''}`} onClick={() =>
                            this.handleLandingType(true)}>True</button >
                        <button type='button' key={4} className={`btn-landing ${selectedLanding === false ? 'active' : ''}`} onClick={() =>
                            this.handleLandingType(false)}>False</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Filter