
import PropTypes from "prop-types";

export const Students = (props) => {
    return (

        <div className="table">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.name}</td>
                    </tr>
                    <tr>    
                    
                        <th>Age</th>
                        <td>{props.age}</td>
                    </tr>  
                    <tr>
                        <th>City</th>
                        <td>{props.city}</td>
                    </tr>
                    
                    <tr>
                        <th>Status</th>
                        <td>{props.isMarried ? "yes" :"No"}</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

    )
}

Students.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    city:PropTypes.string,
    isMarried:PropTypes.bool,
};

Students.defaultProps={
    name:"no-name",
    age:0,
    city:"no-name",
    isMarried:false
}

