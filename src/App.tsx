import React, {FC, useRef} from 'react';
import ParamEditor from './ParamEditor';

const params = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
  {
    id: 3,
    name: 'Длинfffа',
    type: 'string',
  },
];

const initialModel = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
  colors: [],
};

const App:FC = () => {
  const editorRef = useRef<ParamEditor>(null)

  const handleClick = () => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      console.log(model);
    }
  };

  return (
      <div>
        <ParamEditor params={params} model={initialModel} ref={editorRef} />
        <button onClick={handleClick}>Получить</button>
      </div>
  );
};

export default App;
