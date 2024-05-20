const Buttons =({setCount}) => {
const handleCountDecrease =() =>{
    setCount((currentvalue) => currentvalue !==0 ? currentvalue - 1:0 ); 
};
const handleCountIncrease =() =>{
   setCount((currentvalue) => currentvalue + 1 ); 
};
    return(
        <div>
            <button onClick={handleCountDecrease}>Decrease</button>
            <button onClick={handleCountIncrease}>Increase</button>
        </div>
    )
}

export default Buttons;