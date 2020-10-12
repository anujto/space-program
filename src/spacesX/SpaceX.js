import React, { Component } from 'react';
import AjaxWrapper from '../api/AjaxWrapper';
import Filter from '../common/filter/Filter';
import './SpaceX.scss';


class SpaceX extends Component {

    constructor(props) {
        super(props);
        this.state = {

            spacesData: []
        }
        this.handleFilter = this.handleFilter.bind(this);
    }


    componentWillMount() {
        AjaxWrapper.get('https://api.spaceXdata.com/v3/launches?limit=100').then((response) => {
            console.log('response', response)
            this.setState({ spacesData: response });
            // this.props.getSpaceData(11,2,3)
        })
    }

    handleFilter(year, selectedLaunch, selectedLanding) {
        let url = 'https://api.spacexdata.com/v3/launches?limit=100';

        if (year !== null) {
            url = url + `&launch_year=${year}`;
        }

        if (selectedLaunch !== null) {
            url = url + `&launch_success=${selectedLaunch}`;
        }

        if (selectedLanding !== null) {
            url = url + `&land_success=${selectedLanding}`;

        }
        console.log('year', year)

        AjaxWrapper.get(url).then((response) => {
            console.log('response', response);
            this.setState({ spacesData: response })
        });



    }






    render() {

        const { spacesData } = this.state;
        return (
            <div className='container'>
                <header className='space-header'>SpaceX Launch Program</header>
                <div className='space-container'>
                    <Filter handleFilter={this.handleFilter} />
                    <div className='space-view'>
                        {spacesData && spacesData.map((data, index) => {

                            const style = {
                                height: '152px',
                                width: '140px',
                                padding: '5px 16px'
                            }
                            return <div className='space-program-name' key={data && data.launch_date_local}>
                                <div className='space-img'>

                                    <img src={data.links.mission_patch_small} style={style}></img>
                                </div>
                                <div className="mission-id">
                                    <div className="label">Mission Id: </div>
                                    {
                                        data && data.mission_id && data.mission_id.map((id) => {
                                            return <li>{id}</li>
                                        })
                                    }
                                </div>
                                <div className='mission-name'>
                                    <span className="label">Launch Year: </span>
                                    <span className='val' >{`${data.launch_year}`}</span>

                                </div>
                                <div className='mission-name'>
                                    <span className="label">Sucessful Launch: </span>
                                    <span className='val' >{`${data.launch_success}`}</span>
                                </div>
                                <div className='mission-name'>
                                    <span className="label">Sucessful Landing: </span>
                                    <span className='val' >{`${data.mission_name}`}</span>
                                </div>

                            </div>
                        })}
                    </div>
                </div>


            </div>
        );
    }
}

export default SpaceX;