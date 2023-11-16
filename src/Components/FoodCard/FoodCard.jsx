import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, image, price, recipe} =item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const handleAddToCart =food => {
       if (user && user.email){
        // send cart item to database
       }
       else{
        Swal.fire({
            title: "You are not Logged In !",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
            //  send the user to the login page
            navigate('/login')
            }
          });
       }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-slate-800  text-white absolute right-2 mt-4 mr-4 px-4 text-lg rounded-xl hover:bg-gradient-to-r from-indigo-500">${price}</p>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                    onClick={() => handleAddToCart(item)}
                     className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;