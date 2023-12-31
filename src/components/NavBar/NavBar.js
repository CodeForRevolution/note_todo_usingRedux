
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavBar(){
    return(
      <>
             <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="/">Utility Apps</a> */}
    <Link className="navbar-brand" >Utility Apps</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="todo">To Do</a> */}
          <Link  class="nav-link active" to={'todo'}>Todo</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="notes">Note</a> */}
          <Link  class="nav-link active" to={'notes'}>Note</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    <div className="bodyMain">
<Outlet>

</Outlet>
    </div>
      </>
 

    );
}

export default NavBar;