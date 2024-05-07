export const Expense = () => {
    return (
        <>
            <div className="member">
                <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <div className="contents">
                <h4>Clark</h4>
                <p>You have clark</p>
                </div>
                <button>Close</button>
            </div>

            <div className="bill">
                <div className="set">
                    <h5>Bill Value</h5>
                    <input type="text"></input>
                </div>

                <div className="set">
                    <h5>Your Expense</h5>
                    <input type="text"></input>
                </div>

                <div className="set">
                    <h5>Clarks Expense</h5>
                    <input type="text"></input>
                </div>

                <div className="set">
                    <h5>Your Expense</h5>
                  <select name="you">
                  <option>You</option>
                  <option>Clark</option>
                  </select>
                </div>

                <button>Split Bill</button>
                
                

            </div>
        </>
    )
}