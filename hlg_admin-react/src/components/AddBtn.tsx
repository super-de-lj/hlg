import {Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

interface propsType{
    title:string,
    onClick?:Function
}

const AddBtn = (props:propsType) => {
    var {onClick} = props;
    //暴露一个点击事件
    var handleClick = ()=> onClick && onClick()
    return (
        <Button type="primary" style={{marginBottom:20}} onClick={()=>{handleClick()}}>
            <span>{props.title}</span><PlusOutlined />
        </Button>
    );
};

export default AddBtn;