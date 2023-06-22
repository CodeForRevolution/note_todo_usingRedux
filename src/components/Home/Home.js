import { Link } from "react-router-dom";
import "./Home.css";

function Home(){

    return(
        <div className="home-container">
            <Link className="btn btn-warning link" to={'todo'}>Todo App</Link>
         <Link className="btn btn-warning link" to={'notes'}>Note keeper</Link>
        </div>
    )
}

export default Home;