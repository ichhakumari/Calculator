export const Button =({val,classname,fn})=>{
    const clicked=()=>{
        console.log("clicked")
        fn(val);
    }
    return(<button onClick={clicked} className={classname} >{val}</button>)
}