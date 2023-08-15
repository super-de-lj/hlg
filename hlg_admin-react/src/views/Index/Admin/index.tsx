import './index.scss';
import AddBtn from '@/components/AddBtn';
import { Table } from 'antd';
import { useTable } from './Table'
import AdminDrawer from '@/components/AdminDrawer'
import { useDispatch, useSelector } from 'react-redux';
import {useGetAdmin} from '@/utils/serverFun'

const Admin = () => {
    var dispatch = useDispatch();
    //用于表格状态的更新
    var adminFlag = useSelector((state:any)=>state.TableState);
    
    //表格配置
    var AdminColumns = useTable();
    //表格数据
    var {AdminDataSource,loading} = useGetAdmin(adminFlag);

    //添加管理员
    var handleAdd = ()=>{
        //打开抽屉
        dispatch({type:'UPDATE_DRAW',payload:true});
    }
    return (
        <div className='admin'>
           <AddBtn title='添加管理员' onClick={handleAdd}/>
           <Table columns={AdminColumns} dataSource={AdminDataSource} loading={loading}/>
           <AdminDrawer/>
        </div>
    );
};

export default Admin;