import PropTypes from "prop-types";
export const Foods = () => {
    const pizza = PizzaData;
    const pizzaCount = pizza.length;
    return (
        <>
            <div className="head">
                <h1 className="name">----FAST REACT PIZZA CO.----</h1>

                <h3 className="title">OUR MENU</h3>
                <p className="desc">Authentic Italian<span className="count">{pizzaCount}</span> Create dishes to choose from.
                    All from our stone oven, all organic, all delicious.
                </p>
            </div>
        </>
    )
}


export const Time = () => {
    const currentTime = new Date().getHours();
    const open = 7
    const close = 22;
  

    // if (currentTime >= open && currentTime <= close) {
    //     // return alert('open')
    // }
    if(close <= currentTime){
        alert('Please Come back at after' + open + ':00')
    }
 

    return (

        <>
        <div className="footer">
            <p className="footer1">We are open from {open}:00 to {close}:00 Come Visit us order online</p>
            <button className="button">Order</button>
            </div>
        </>
    )

}

// function closed(){
  
//     const currentTime = new Date().getHours();
//     const open = 10;
//     const close = 22;

//     if(close <= currentTime){
//         alert('Please Come back at after' + open + ':00')
//     }
// }






export const Pizza = (props) => {
    return (
        props.pizzaa.map((props,i) => {
            return (
                <>
                    <div className="container" key={i}>
                        <div className="dish">
                            <img src={props.photoName}></img>
                          
                            <div className="content">
                                <h3>{props.name}</h3>
                                <p>{props.ingredients}</p>
                                <h4>{props.soldOut ? "soldout":props.price}</h4>
                               <h5> </h5>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    )
}

Pizza.propTypes = {
    name: PropTypes.string,
    ingredients: PropTypes.string,
    price: PropTypes.string,
   soldOut:PropTypes.bool



}

const PizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "https://img.freepik.com/free-photo/freshness-gourmet-rustic-wooden-table-generated-by-ai_188544-151499.jpg?t=st=1707939353~exp=1707942953~hmac=f1dd1294b6dfec9f81ae4f5492060aac293652f309e6e948877b81d4833a6ef6&w=900",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873874.jpg?t=st=1707982742~exp=1707986342~hmac=91e6fb474bf8177f9a268b1feefa3270afa8152b445270b24fbbdce746a223f6&w=900",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=900&t=st=1707976801~exp=1707977401~hmac=1fcea9ab4fb8205d33663f43cfc7fa59c11e107f4450b36a6018ef044b77835d",
        soldOut:true,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873874.jpg?t=st=1707981629~exp=1707985229~hmac=1a508944b7c89adba455ff540952dafacac2eb4f96581ac192a8720e86283bda&w=900",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "https://img.freepik.com/premium-photo/slice-fried-hot-italian-pizza-with-sticky-cheese-salami_526992-2175.jpg?w=740",
        soldOut: false,
    },
   
];



export default PizzaData;