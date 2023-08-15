import './index.scss'
import React, { PureComponent } from 'react';
import RecommendList from '@/components/RecommendList'

class Recommend extends PureComponent {
    render() {
        return (
            <div className='recommend'>
                <RecommendList></RecommendList>
            </div>
        );
    }
}
export default Recommend;