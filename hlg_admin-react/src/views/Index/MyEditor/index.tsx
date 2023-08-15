import './index.scss';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'antd';

const MyEditor = () => {
    const editorRef:any = useRef(null);
    const getEdit = () => {
      console.log(editorRef.current.getContent());
    };
    return (
      <>
        <Editor
          ref={editorRef}
          apiKey='r2xyytapaxixslkdfnbuiy27p3tqs1jj8cd0io0u378wz6kj'
          onInit={(evt,editor) => editorRef.current = editor}
          // 默认值
          initialValue="<p>请在编辑器输入内容</p>"
          //配置
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
          }}
        />
        <Button onClick={getEdit} type="primary" className='btn'>获取编辑器内容</Button>
      </>
    );
};

export default MyEditor;