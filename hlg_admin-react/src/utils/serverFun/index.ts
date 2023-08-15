import { admin, banner, echarts, pro } from "@/api";
import { useEffect, useState } from "react";

//admin管理员表格数据
export function useGetAdmin(adminFlag: boolean) {
    //表格加载
    const [loading, setLoading] = useState(false);
    var [AdminDataSource, setAdminDataSource] = useState([]);
    useEffect(() => {
        getAdmin();
    }, [adminFlag])
    var getAdmin = async () => {
        setLoading(true);
        var res = await admin.admin_list();
        if (res.data.code == 200) {
            res.data.data.map((item: any) => {
                return item.key = item.adminname;
            })
            setAdminDataSource(res.data.data);
        }
        setLoading(false);
    }
    return {
        AdminDataSource: AdminDataSource ? AdminDataSource : [],
        loading,
    };
}

//筛选filter分类数据
export function useGetFilterType() {
    //定义状态
    var [Category, setCategory] = useState([])

    //初始调用一次
    useEffect(() => {
        getCategory()
    }, [])

    //发请求，获取选择分类数据
    var getCategory = async () => {
        var res = await pro.pro_getCategory();
        if (res.data.code == 200) {
            var list = res.data.data.map((item: any) => {
                return { value: item, label: item };
            })
            setCategory(list);
        }
    }
    //导出
    return {
        Category: Category ? Category : []
    }
}

//筛选filter表格数据
export function useGetFilterTable(selectValue: string, searchValue: string) {
    var [filterDataSource, setFilterDataSource] = useState([]);
    //表格加载
    const [loading, setLoading] = useState(false);
    //加载
    var [flag, setFlag] = useState(false);
    var getFilterTable = async () => {
        setLoading(true);
        var res = await pro.pro_searchPro({ category: selectValue, search: searchValue });
        if (res.data.code == 200) {
            var list = res.data.data.map((item: any) => {
                item.key = item.proid;
                return item;
            })
            setFilterDataSource(list);
        }
        setLoading(false);
    }
    useEffect(() => {
        getFilterTable();
        setFlag(false);
    }, [selectValue, searchValue])

    return {
        filterDataSource: filterDataSource ? filterDataSource : [],
        loading,
        flag, setFlag
    }
}

//产品列表pro表格数据
export function useGetProTable() {
    var [ProDataSource, setProDataSource] = useState([]);
    //表格加载
    const [loading, setLoading] = useState(false);
    var getProDataSource = async () => {
        setLoading(true);
        var res = await pro.pro_list();
        if (res.data.code == 200) {
            res.data.data.forEach((item: any) => {
                item.key = item.proid;
            })
            setProDataSource(res.data.data);
        }
        setLoading(false);
    }
    useEffect(() => {
        getProDataSource()
    }, [])
    return {
        ProDataSource: ProDataSource ? ProDataSource : [],
        loading
    }
}

//推荐列表RecommendList表格数据
export function useGetRecommendTable(dropValue: number) {
    //表格加载
    const [loading, setLoading] = useState(false);
    var [ProDataSource, setProDataSource] = useState([]);
    //获取数据
    var getProDataSource = async () => {
        setLoading(true);
        var res = await pro.pro_showdata({ type: 'isrecommend', flag: dropValue });
        if (res.data.code == 200) {
            res.data.data.forEach((item: any) => {
                item.key = item.proid;
            })
            setProDataSource(res.data.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getProDataSource()
    }, [dropValue])

    return {
        ProDataSource: ProDataSource ? ProDataSource : [],
        loading
    }
}

//秒杀列表SeckillList表格数据
export function useGetSeckillTable(dropValue: number) {
    var [ProDataSource, setProDataSource] = useState([]);
    //表格加载
    const [loading, setLoading] = useState(false);
    //获取数据
    var getProDataSource = async () => {
        setLoading(true);
        var res = await pro.pro_showdata({ type: 'isseckill', flag: dropValue });
        if (res.data.code == 200) {
            res.data.data.forEach((item: any) => {
                item.key = item.proid;
            })
            setProDataSource(res.data.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getProDataSource()
    }, [dropValue])

    return {
        ProDataSource: ProDataSource ? ProDataSource : [],
        loading
    }
}

//轮播图Swiper表格数据
export function useGetSwiperTable(swiperFlag: Boolean) {
    //轮播图管理表单数据源
    let [SwiperDataSource, setSwiperDataSource] = useState([]);
    //表格加载
    const [loading, setLoading] = useState(false);
    var getBanner = async () => {
        setLoading(true);
        var res = await banner.banner_list();
        //每一个轮播图添加key
        if (res.data.code == 200) {
            res.data.data.forEach((item: any) => {
                item.key = item.bannerid;
            })
            setSwiperDataSource(res.data.data)
        }
        setLoading(false);
    }
    useEffect(() => {
        getBanner();
    }, [swiperFlag])

    return {
        SwiperDataSource: SwiperDataSource ? SwiperDataSource : [],
        loading
    }
}

//echarts图一数据
export function useGetEcharts_01() {
    const [echarts_01, setEcharts_01] = useState({});

    var getEcharts = async () => {
        var res = await echarts.kData();
        if (res.data.code == 200) {
            setEcharts_01(res.data.data);
        }
    }

    useEffect(() => {
        getEcharts();
    }, [])

    return {
        echarts_01: Object.keys(echarts_01).length ? echarts_01 : []
    }
}
//echarts图二数据

export function useGetEcharts_02() {
    const [echarts_02, setEcharts_02] = useState({});

    var getEcharts = async () => {
        var res = await echarts.simpleData();
        if (res.data.code == 200) {
            setEcharts_02(res.data.data);
        }
    }

    useEffect(() => {
        getEcharts();
    }, [])

    return {
        echarts_02: Object.keys(echarts_02).length ? echarts_02 : []
    }
}