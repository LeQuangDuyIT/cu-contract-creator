import { useState } from 'react';
import './App.css';
import InputSpace from './components/InputSpace/InputSpace';
import { initialDocDatas } from './utils/constants';

function App() {
    const [docDatas, setDocDatas] = useState(initialDocDatas);

    const handleAddDocDatas = (datasType, datasValue) => {
        const newDocDatas = { ...docDatas, [datasType]: datasValue };
        setDocDatas(newDocDatas);
    };

    return (
        <div className="App">
            <InputSpace handleAddDocDatas={handleAddDocDatas} />
        </div>
    );
}

export default App;
