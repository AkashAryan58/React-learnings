function ToDo(){
    return (
         <div className="row">
          <div className="col-4">
            <input type="text" placeholder="enter the task"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
    )
}
export default ToDo;