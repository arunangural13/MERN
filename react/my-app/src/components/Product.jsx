export default function product(props){
    return (
        <>
        <h1>Product{props.pno} </h1>
        <h3> Product name is {props.pname} and price of product is {props.price}</h3>
        </>
    )
}