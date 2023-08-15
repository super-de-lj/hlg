import './index.scss';
import AddBtn from '@/components/AddBtn';
import {Table} from 'antd'
import { SwiperColumns } from './table';
import { useNavigate } from 'react-router-dom';
import { useGetSwiperTable } from '@/utils/serverFun';
import { useSelector } from 'react-redux';

const Swiper = () => {
    //路由
    var navigate = useNavigate();
    var swiperFlag = useSelector((state:any)=>state.TableState);
    //新增轮播图
    var handleAdd = ()=> navigate('/index/swiperadd')

    //轮播图管理表格数据
    var {loading,SwiperDataSource} = useGetSwiperTable(swiperFlag);

    return (
        <div className='swiper'>
            <AddBtn title='添加轮播图' onClick={handleAdd}/>
            <Table columns={SwiperColumns()} dataSource={SwiperDataSource} loading={loading}/>
        </div>
    );
};

export default Swiper;