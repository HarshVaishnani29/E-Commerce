import React, { Component, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import Css from '../DEMO/Demo.css'
import Demo1 from './Demo1';

// --**-- Life Cycle Of Components --**-- // 

// --**-- Phase Of Component Cycle --**-- // 

//1) Mounting - Birth of your component
//2) Updating - Growth of your component
//3) Unmounting - Death of your component 

// --**-- Mounting Methods Class based --**-- //

//1) Constructor 
//2) staic getDerivedStateFromProps
//3) render
//4)componentDidMount

// --**-- Mounting Methods Function based --**-- // 
//1) UseState  Hook
//2) UseEffect Hook

// --**-- Mounting Methods Class based in details with examples--**-- //

//1 ) Example Of Constructor 
// class Demo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={hello:"Hello Toh Kese He Aap Log"};
        
//     }
//   render() {
//     return (
//       <>
//         <h1>Hello, {this.state.hello}</h1>
//         <button>Click Me! </button>
//       </>
//     )
//   }
// }
  
//2) Example of static getDerivedStateFromProps
// class Demo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={message:"Khama Ghani"}
//         this.state={messageg:"Kem No Chaylo"}
//     }
//     static getDeriviedStateFromProps(props,state){
//         return(
//             {messageg:props.msg}
//         )
//     }
//     render(){
//         return(
//             <>
//             <h1>Surties People Says : {this.state.messageg}</h1>
//             </>
//         )
//     }
// }

//3) Example of render method 
// class Demo extends React.Component{
//     render(){
//         return(
//             <h1>Hello Guys</h1>
//         )
//     }
// }

//4) Example of componentDidMount
// class Demo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { hi: "Kasa Kay" };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ hi: "Kasa kay" });
//         }, 1000);
//           alert("Kasa Kay")
//         // console.log("Clicked");
//     }
    
//     render() {
//       return (
//         <Button className='btn-primary text-white text-center' onClick={this.componentDidMount}>Marathi People Says:</Button>
//       );
//     }
//   }
  
// --**-- Mounting Methods Function() based in details with examples --**-- //

//1) Example Of UseState Hook
// function Demo() {
//     const [food,setFood]=useState("Manchurian")

//     return(
//         <h1 >My Faviourte Food Is : {food}</h1>
//     )
// }

//2) Example of UseEffect Hook 
// function Demo() {
//     const [stop,setStop]=useState(0);

//     useEffect(()=>{
//         setTimeout(() => {
//             setStop((stop) => stop + 1 );
//         }, 2000);
//     })
//     return(
//         <div className='text-center d-block'>
        
//         <h1 className='text-center '>
//             I've Rendered 
//             <h1 className='bg-primary text-white fs-1'>
//             {stop}
//             </h1>
//             Times
//         </h1>
//         </div>
//     )
// }

// --**-- Starting Updating Methods class based in details with examples --**-- //
//1) getDerivedStateFromProps
//2) shouldComponentUpdate
//3) render
//4) getSnapshotBeforeUpdate
//5) componentDidUpdate   


//1) Example of getDerivedStateFromProps
// class Demo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoriteanimal: "Cat"};
//     }
//     static getDerivedStateFromProps(props, state) {
//       return {favoritefanimal: props.favfoo };
//     }
//     changefoo = () => {
//       this.setState({favoriteanimal: "Dog"});
//     }
//     render() {
//       return (
//         <div className='text-center'>
//         <h1>My Favorite Animal is {this.state.favoriteanimal}</h1>
//         <Button className='bg-dark border-none text-center' onClick={this.changefoo}>Change Animal</Button>
//         </div>
//       );
//     }
//   }


//2) Example of shouldComponentUpdate
// class Demo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={favoriteCar:"B M W"}
//     }
//     shouldComponentUpdate(){
//         return false; // Defalut is true 
//     }
//     changeCar=()=>{
//         this.setState({favoriteCar:"Supra"})
//     }
//     render(){
//         return(
//             <div className='text-center'>
//             <h1>My Favrioute : {this.state.favoriteCar}</h1>
//             <Button onClick={this.changeCar}>Change The Car By Clicking This Button</Button>
//             </div>
//         )
//     }
// }

//3) Example of render
// class Demo extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={favouriteCar:"B M W"}
//     }
//     changeCar=()=>{
//         this.setState({favouriteCar:"S U P R A"})
//     }
//     changeCars=()=>{
//         this.setState({favouriteCar:"B M W"})
//     }
    
//     render(){
//         return(
//             <div className='text-center'>
//                 <h1>
//                 My Favrioute Car : {this.state.favouriteCar}
//                 </h1>
//                 <Button className='bg-danger' onClick={this.changeCars}>
//                 B M W
//                 </Button>
//                 <Button onClick={this.changeCar}>
//                 SUPRA
//                 </Button>   
//             </div>
//         )
//     }
// }


//4 Example of getSnapshotBeforeUpdate
// class Demo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoriteCar: "B M W"};
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({favoriteCar: "S U P R A"})
//       }, 1000)
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//       document.getElementById("div1").innerHTML =
//       "Before the update, the favorite car is " + prevState.favoriteCar;
//     }
//     componentDidUpdate() {
//       document.getElementById("div2").innerHTML =
//       "The updated favorite car is " + this.state.favoriteCar;
//     }
//     render() {
//       return (
//         <div className='text-center'>
//           <h1>My Favorite Color is {this.state.favoriteCar}</h1>
//           <div id="div1"></div>
//           <div id="div2"></div>
//         </div>
//       );
//     }
// }

//5) Example of componentDidUpdate 
// class Demo extends React.Component {
//         constructor(props) {
//           super(props);
//           this.state = {favoriteCar:"B M W"};
//         }
//         componentDidMount() {
//           setTimeout(() => {
//             this.setState({favoriteCar: "S U P R A"})
//           }, 1000)
//         }
//         componentDidUpdate() {
//           document.getElementById("Car").innerHTML =
//           "The updated favorite Car is " + this.state.favoriteCar;
//         }
//         render() {
//           return (
//             <div>
//             <h1>My Favorite Color is {this.state.favoriteCar}</h1>
//             <div id="Car"></div>
//             </div>
//           );
//         }
// }

// --**-- Ending Updating Methods class based in details with examples --**-- //

// --**-- Starting Updating Methods Function based in details with examples --**-- //


// function Demo() {
// 	const [counter, setCounter] = useState(0);

// 	const handleIncrease = () => {
// 		setCounter((prev) => prev + 1);
// 	};

// 	const handleDecrease = () => {
// 		setCounter((prev) => prev - 1);
// 	};

// 	console.log('Click');

// 	return (
// 		<div className='text-center'>
// 			 {counter}
// 			<Button onClick={handleIncrease}>
// 				Increase
// 			</Button>
// 			<Button className='bg-danger' onClick={handleDecrease}>
// 				Decrease
// 			</Button>
// 		</div>
// 	);
// }

// class Demo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={displayBio:false};
//         this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//     }
//     toggleDisplayBio() {
//         this.setState({displayBio: !this.state.displayBio});
//     }
//     render(){
//         const onboard =this.state.displayBio ?(
//             <div>
//                 <h2>Hello World</h2>
//             </div>
//         ):null;
//         return(
//             <div>
//                 <h1>
//                     Welcome to sarvadhi
//                 </h1>
//                 {onboard}
//             </div>
//         )
//     }
// }
// class Demo extends React.Component {  
//     constructor() {  
//          super();        
//          this.state = { displayBio: false };  
//          console.log('Component this', this);  
//          this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
//          }  
//          toggleDisplayBio(){  
//              this.setState({displayBio: !this.state.displayBio});  
//              }  
//          render() {  
//              return (  
//                  <div>  
//                      <h1>Welcome to !!</h1>  
//                      {  
//                          this.state.displayBio ? (   
//                              <div>  
//                                  <p><h4>Sarvadhi Solutions .pvt ltd</h4></p>  
//                                  <button onClick={this.toggleDisplayBio}> Show Less </button>  
//                            </div>  
//                              ) : (  
//                                  <div>  
//                                      <button onClick={this.toggleDisplayBio}> Read More </button>  
//                                  </div>  
//                              )  
//                      }  
//                 </div>  
//            )  
//        }  
//    } 

// function Demo({name}) {
//     const [carName,setCarName] = useState(name);
//     return (
//         <div className='text-center'>
//             <h1>Hi Enter Your Car Name</h1>
//         <input type="text" name="name" id="name" className='col-2 text-center' placeholder='Enter Your Car Name' onChange={(e)=> setCarName(e.target.value)}/>
//             <p> Your Car Name is :{carName} </p>
//         </div>
//     ) 
// }

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";

function Demo() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="home">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="Shop">Shopping</Link>
          <Link to="Cart">Cart</Link>
        </div>
      ),
    },
    {
      path: "home",
      element: <div>Homies</div>,
    }
    ,{
      path: "about",
      element: <div>About</div>,
    }
    ,{
      path: "Shop",
      element: <div>Shopping</div>,
    },
    {
      path: "cart",
      element: <div>Empty Cart</div>,
    }
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}
export default Demo; 