function Card(props) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center ">
      <div className="card mb-4 box-shadow "  >
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{props.data.tittle}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {props.data.amount} <small className="text-muted">/ mo</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            {
                props.data.details.map((points)=>{
                    return <li>
                        {points.list}
                    </li>

                })
            }
        </ul>
        {
            props.data.buttons.map((btn)=>{
                return <button type="button" className={ btn.effect ? ' btnpack btn btn-outline-primary': ' btnpack btn btn-primary  btn-block'}   >
                    {}
                    {
                        btn.button
                    }
              </button>
            })
        }

         
        </div>
      </div>
    </div>
  );
}
export default Card;
