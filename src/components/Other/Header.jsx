import React,{useState} from "react";

const Header = (props) => {
  // const [username, setUsername] = useState('');

  // if (!data) {
  //   setUsername("Admin")
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOut = ()=>{
    localStorage.setItem("loggedInUser","")
    console.log(props.changeUser);
    props.changeUser("")
    // window.location.reload()
  }

  return (
    <div className="flex text-white items-end justify-between">
      <h1 className="text-2xl font-medium">
        hyyy!!! <br /><span className="text-4xl font-semibold" >{props.data?.firstName ? props.data.firstName : "root@kai"}🙌</span>
      </h1>
        <button onClick={logOut} className="bg-red-600 text-lg text-white px-5 py-2 rounded-2xl font-medium">Log out</button>
    </div>
  );
};

export default Header;
