function Navbar(){
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow d-flex justify-content-between">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav className="my-2 my-md-0 mr-md-3 navlist  ">
        <a href="#" className="p-2 text-dark text-decoration-none " >Features</a>
        <a href="#" className="p-2 text-dark text-decoration-none" >Enterprise</a>
        <a href="#" className="p-2 text-dark text-decoration-none" >Support</a>
        <a href="#" className="p-2 text-dark text-decoration-none" >Pricing</a>
        <button type="button" className="btn btn-outline-primary">Sign up</button>
      </nav>
    </div>

    )
}
export default Navbar;