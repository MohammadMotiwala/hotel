import { useState } from "react";

const Todo = () => {
    const [value, setValue] = useState();
    const [valueList, setValueList] = useState([]);

    const inputValue = (e) => {
        setValue(e.target.value);
    }
    const addValue = () => {
        setValueList([...valueList, { id: valueList.length, name: value }]);
        setValue('');
    }
    const Remove = (rId) => {
        let removeId = valueList.filter(({id, name})=>{
            return id != rId;
        });
        setValueList(removeId);
    }
    const Edit = (userValue) => {   
        let editText = valueList.map(({id, name})=>{
            return name == userValue;
        });   
        setValue(userValue);
    }


    return (
        <>
            <h1>Todo</h1>
            <input type={"text"} onChange={inputValue} value={value || Edit && ''} />&nbsp;
            <button onClick={addValue}>Add</button>
            <ul>
                {
                    valueList.map(({ id, name }, index) => {
                        return <li key={id}>
                            {index + 1}. {name} &nbsp;&nbsp;
                            <button onClick={() => { Remove(id) }}>Remove</button><br /><br />
                            <button onClick={() => { Edit(name) }}>Edit</button><br /><br />
                        </li>
                    })
                }
            </ul>

        </>
    );
}
export default Todo;