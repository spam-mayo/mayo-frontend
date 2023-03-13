import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [convertedText, setConvertedText] = useState('내용을 입력하세요');
  const onChange = (el: string) => {
    setConvertedText(el);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={convertedText}
        onChange={onChange}
        style={{ minHeight: '500px', backgroundColor: 'white' }}
      />
    </div>
  );
};

export default Editor;
