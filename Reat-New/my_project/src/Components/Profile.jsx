
import PropTypes from "prop-types";

export const Profile = (props) => {
    return (
        props.data.map(props => {
            return (


                <>
                    <div className="contain">
                        <div className="profile">
                            <button className="online">{props.online ? "Online" : 'Offline'}</button>

                            <div className="img">
                                <img className="image" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <h3>{props.name}</h3>
                            <h3>{props.city}</h3>
                            <p>{props.description}</p>
                            <div className="social">
                                <button className="btn1">Message</button>
                                <button className="btn2">Following</button>
                            </div>

                            <h4>Skills</h4>
                            <ul>
                                {props.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </>
            )
        })
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    online: PropTypes.bool,
    profile: PropTypes.string,

};


const UserData = [
 
    {
        name: "Nancy",
        city: "San Francisco",
        description: "Senior software developer",
        skills: ["C", "C++", "Java", "Python", "C# .NET", "MySQL", "MangoDB"],
        online: true,
        profile: "images/3.jpg",
    },
    {
        name: "Robert",
        city: "California",
        description: "Full Stack web Developer",
        skills: [
            "Vlogging",
            "Web development",
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Angular",
        ],
        online: false,
        profile: "images/2.jpg",
    },
    {
        name: "Robert",
        city: "California",
        description: "Full Stack web Developer",
        skills: [
            "Vlogging",
            "Web development",
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Angular",
        ],
        online: true,
        profile: "images/2.jpg",
    },
  
  
  ]

  export default UserData;



