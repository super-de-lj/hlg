import React, { PureComponent } from 'react';
import TopNav from '@/components/TopNav';
import './index.scss'
import RouterView from '@/route/RouterView';

interface propsType{
    routes:any
}

class Register extends PureComponent<propsType>{
    render() {
        return (
            <div className='register'>
               <TopNav title='注册' flag={true}/>
               <RouterView routes={this.props.routes}/>
            </div>
        );
    }
}

export default Register;