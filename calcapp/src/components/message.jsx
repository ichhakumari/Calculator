export const Message=({msg,classname,value=""})=>{
    const myclassName= `${classname} text-center`;
    return(<h2 className={myclassName}>{msg} {value}</h2>);
}