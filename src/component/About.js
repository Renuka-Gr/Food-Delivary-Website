import UserInfo from "./User";

const About=()=>
{
    return(
    <div className="aboutus">
            <h1>About</h1>
            <h2>This is namaste React </h2>
            <UserInfo name={"Renuka (Class based Component"} location={"Pune"}/>
    </div>
    );
}

export default About;