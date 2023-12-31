import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaAd, FaSearch, FaEnvelope, FaUtensils, FaList,  FaUsers, FaBook } from "react-icons/fa";
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();
    // TODO :get isAdmin value from the database

    const isAdmin = true;
    return (
        <div className="flex">
            {/* DASHBOARD SIDEBAR */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/bookings'>
                                <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/users'>
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        user Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/booking'>
                                        <FaCalendar></FaCalendar>
                                        My Booking</NavLink>
                                </li>

                            </>
                    }
                    {/* shared navlinks */}
                    {/* DIVIDER AREA */}
                    <div className="divider divider-success"></div>
                    <li>

                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to='/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* DASHBOARD CONTENT */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;