import {useCallback, useState, memo ,useMemo} from 'react'



function Axios() {
    const [count,setCount] = useState("");
    
    const increment = useCallback (() => {
        setCount(Math.floor(Math.random() * 100));
    },[])

    
    
    return (
        <>
        Count:{count}
        <br/>
        <Increment  increment ={increment} />
        <br/>
        <Square count={count} />
    
        </> 
    );
}
const Square =(props) => {
    const [number,setNumber] = useState(0);
const onNumberChanged =(event) => {
        setNumber(event.target.value);
    }
    const calculate = useMemo(() => {
        if(number && number > 0) {
            const time = new Date().getTime ();
            let value = 0;
            while(value <3) {
                value =((new Date().getTime()) - time)/1000;
            }
            return number * number;
            
        }
        else {
            return " poda komali nayee";
        }
    },[number])
    return (
        <>
        {props.count} square of <input onChange ={onNumberChanged} value={number}/> is{calculate}
        </>
    )
}
const Increment = memo((props) => {
    console.log('increment rendered');
    return (
        <button onClick = {props.increment}>Increment</button>
    )
})


export default Axios
