const { useState } = require("react")

const Counter = () => {
    const [count, setCount] = useState(0);
    const Increase = () => {
        if (count < 10) {
            setCount(count + 1);
        }
        else {
            document.querySelector('.res').innerHTML = '10 is last destination';
        }
    }
    const Decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            document.querySelector('.res').innerHTML = '0 is last destination';
        }
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Increase}>+</button>&nbsp;
            <button onClick={Decrease}>-</button><br />
            <h2 className="res"></h2>
        </>
    );
}
export default Counter;