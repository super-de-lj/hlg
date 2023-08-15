import { useGetSeckillTable } from '@/utils/serverFun';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown,  Table } from 'antd';
import {  useState } from 'react';
import './index.scss';
import {SeckillColumns} from './table'

const SeckillList = () => {
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
   
    //秒杀列表SeckillList表格数据
    var {loading,ProDataSource} = useGetSeckillTable(dropValue)
   
    return (
        <div className='seckillList'>
            <Dropdown menu={{ items }} >
                <Button>
                    <span>{dropValue==1?'选中的':'未选中的'}</span>
                   <DownOutlined />
                </Button>
            </Dropdown>
           <Table columns={SeckillColumns} dataSource={ProDataSource} loading={loading} pagination={{pageSize:6}}/>
        </div>
    );
};

export default SeckillList;