import React from "react";

class UserInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props);

        this.state={
            UserInfo:
            {
                name: "Dummy",
                location: "Default",
            },
        };
        console.log(this.props.name);
    }

    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/akshaymarch?");
        const json=await data.json();

        this.setState({
            UserInfo: json,
        });
    }   

    // componentDidUpdate()
    // {
    //     console.log(update)
    // }

    // componentWillUnmount()
    // {
    //     console.log(unmount)
    // }

    render()
    {
        // const {name,location}=this.props;
        // const {count,count2}=this.state;

        const {name,location, avtar_img} =this.state.UserInfo;
        return(
            //<div className="user-card">
            //     <h1>Count: {count} </h1>
            //     <h1>Count2: {count2}</h1>
            //     <button
            //     onClick={()=>{
            //         this.setState({
            //             count: this.state.count+1,
            //             count2: this.state.count2 + 2, 
            //         })
            //     }}>
            //         Count Increase
            //     </button>
            <div className="user-card">
                <img src={avtar_img} />
            <h1> Name: {name} </h1>
            <h2> Location : {location}</h2>
            <h2> Contact Us :  @foodieesworld.com</h2>
            
            </div>
        )
    }
}

export default UserInfo;