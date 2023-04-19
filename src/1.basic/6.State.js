import {useState} from 'react'       //use를쓰는 것들을 hook이라한다

export default function Main() {
    const [count, setCount] = useState(0) // 구조분해 할당

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
}