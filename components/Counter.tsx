import React, {useState, useEffect} from 'react';


//Done with a function
export default function Counter() {
    //Initalize useState
    const [count, setCount] = useState(0);

    //UseEffect take another function as an argument 
    useEffect( () => {
        document.title = `Clicked ${count} times!`
    })
    return (
        <>
         <div>
            Current Count: {count}
        </div>   
        <button onClick={ () => setCount(count + 1) }>
            Increment!
        </button>
        </>
    )

}


//Done with a class 
// const Counter = () => {
//     const [count, setCount] = useState(0);


    
//     return (
//         <>
//         <div>Count: {count}</div>
//         <button onClick={() => setCount(count + 1 )}>Increment!</button>
//         </>
//     )

// }

// export default Counter;

