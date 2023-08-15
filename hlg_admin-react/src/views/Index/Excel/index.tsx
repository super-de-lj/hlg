import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Upload, UploadFile } from 'antd';
import { RcFile } from 'antd/es/upload';
import { useRef, useState } from 'react';
import './index.scss';
import * as XLSX from 'xlsx'
import fs from 'file-saver'

const Excel = () => {
    //点击图片显示大图
    const [previewOpen, setPreviewOpen] = useState(false);
    //图片地址
    const [previewImage, setPreviewImage] = useState('');

    //上传图片
    const getBase64 = (file:any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

    var handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
          }
          setPreviewImage(file.url || (file.preview as string));
          setPreviewOpen(true);
    };
    //点击添加图片
    var handleChange = ({fileList}:any)=>{
        setFileList(fileList)
    }
    //关闭大图
    const handleCancel = () => setPreviewOpen(false);
    const [fileList, setFileList] = useState<any>([]);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );

    //下方文件上传,并渲染到页面
    var inputRef:any = useRef('');
    //点击导入
    var handleImport = ()=>inputRef.current.click();

    var handChange = (e:any)=>{
        console.log(e.target.files[0]);
        handleFile(e.target.files[0]);
    }
    var handleFile = (file:any)=>{
        //解析文件后缀
        const types = file.name.split('.')[1]
        const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt'].some((item) => item === types)
        //判断文件后缀是否符合要求
        if (!fileType) {
            console.log('格式错误！请重新选择!');
            return
        }
        // 方式1（官网推荐、如果有报错就使用方式2）：
        file.arrayBuffer().then((ab:any) => {
            const wb = XLSX.read(ab);
            const ws = wb.Sheets[wb.SheetNames[0]];
            var table:any = document.getElementById('TableContainer');
            table.innerHTML = XLSX.utils.sheet_to_html(ws)
        });
    }
    return (
        <div className='excel'>
            <div className="top">
            <Upload
                action=""
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title="图片" footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            </div>
            <div className='bottom'>
                <input type="file" style={{display:'none'}} onChange={handChange} ref={inputRef} accept=".xlsx,.xls"/>
                <Button onClick={handleImport}>导入</Button>
                <Button>导出</Button>
                <div id="TableContainer"></div>
            </div>
        </div>
    );
};

export default Excel;