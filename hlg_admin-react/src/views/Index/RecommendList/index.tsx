import { pro } from '@/api';
import { useGetRecommendTable } from '@/utils/serverFun';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Table } from 'antd';
import { useEffect, useState } from 'react';
import './index.scss';
import {RecommendListColumns} from './table'

const RecommendList = () => {
    //下拉菜单
    var [dropValue,setDropValue] = useState(1);
    var items:any = [
        {
            key: '1',
            label: <span onClick={()=>{setDropValue(1)}}>选中的</span>,
        },
        {
            label: <span onClick={()=>{setDropValue(0)}}>未选中的</span>,
            key: '0',
        },
    ]
    
    //推荐列表表格数据
    var {loading,ProDataSource  } = useGetRecommendTable(dropValue);
   
    return (
        <div className='recommendList'>
            <Dropdown menu={{ items }} >
                <Button>
                    <span>{dropValue==1?'选中的':'未选中的'}</span>
                   <DownOutlined />
                </Button>
            </Dropdown>
           <Table columns={RecommendListColumns} dataSource={ProDataSource} loading={loading} pagination={{pageSize:6}}/>
        </div>
    );
};

export default RecommendList;