import { useGetFilterTable, useGetFilterType } from '@/utils/serverFun';
import { Button, Select, Table } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import './index.scss';
import { FilterColumns } from './table';

const FilterList = () => {
    //获取选择分类数据
    var {Category} = useGetFilterType();
    //选择器分类
    var [selectValue,setSelectValue] = useState('');
    //搜索框关键字
    var [searchValue,setSearchValue] = useState('');

    //切换分类
    var handleChange = (value:string)=>{setSelectValue(value)};

    //筛选filter表格数据
    var {setFlag,loading,filterDataSource,flag} = useGetFilterTable(selectValue,searchValue)

    //点击搜索
    var handleSearch = (value:string)=>{
        setFlag(true);
        setSearchValue(value);
    }

    return (
        <div className='filterList'>
            <Select placeholder="请选择" 
            style={{ width: 120 ,marginBottom:10,marginRight:10}} 
            onChange={handleChange} 
            options={Category} />

            <Search placeholder="请输入关键字" 
            enterButton="搜索" size="middle" 
            loading={flag} 
            style={{width:500,marginRight:10}} 
            onSearch={handleSearch}/>

            <Button type="primary" 
                onClick={()=>{setSelectValue('');setSearchValue('')}}>重置
            </Button>

            <Table columns={FilterColumns} dataSource={filterDataSource} loading={loading} pagination={{pageSize:6}}/>
        </div>
    );
};

export default FilterList;