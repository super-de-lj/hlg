import { Table } from 'antd';
import './index.scss';
import {ProColumns} from './table'
import { useGetProTable } from '@/utils/serverFun';

const ProList = () => {
    //产品列表
    var {loading,ProDataSource} = useGetProTable();
    return (
        <div className='proList'>
            <Table columns={ProColumns()} dataSource={ProDataSource} loading={loading} pagination={{pageSize:6}}/>
        </div>
    );
};

export default ProList;