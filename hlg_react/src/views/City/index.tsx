import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav'
import {getSortCity} from '@/api'

interface propsType{
    history:any,
    location:any,
    match:any,
}

interface stateType{
    data:any[]
}

class City extends PureComponent<propsType,stateType> {
    constructor(props:propsType){
        super(props);
        this.state = {
            data:[]
        }
    }
    async componentDidMount(){
        var res = await getSortCity();
        res.data.code && this.setState({data:res.data})
    }
    render() {
        return (
            <div className='city'>
                <TopNav title="城市" flag/>
            </div>
        );
    }
}

export default City;