import React from 'react';
import { connect } from 'react-redux';
import { Joystick, JoystickShape } from 'react-joystick-component';
import Tilt from 'react-parallax-tilt';

class Component extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            angleX : 0,
            angleY : 0,
            movement: "NONE"
		}
	}

	render() {
		return (
			<React.Fragment>
                <div style={{backgroundColor: "#01303f", width: "100vw", height: "100vh"}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: "70px",
                    }}>
                        <div style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            backgroundColor: "white"
                        }}>
                            <Tilt tiltAngleXManual={this.state.angleX} tiltAngleYManual={this.state.angleY} glareEnable={false}>
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center"
                                }}>
                                    <img
                                        style={{height: "180px", paddingTop: "10px"}} 
                                        src={process.env.PUBLIC_URL + '/img/racket.png'}/>
                                </div>
                            </Tilt>
                        </div> 
                        <div style={{color: "white", fontSize: "20px", textAlign: "center", margin: "30px"}}>
                            <span>Axis x: {this.state.angleX.toFixed(0)}°, </span>
                            <span>Axis y: {this.state.angleY.toFixed(0)}°</span>
                            <div>
                                Movement: <b style={{color: "#89d6fb"}}>{this.state.movement}</b>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        position: "fixed",
                        bottom: "50px",
                        display: "flex",
                        flexDirection: "row",
                        width: "100vw",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "100px"
                    }}>
                        <div style={{
                            width: "50%", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            flexDirection: "column"
                            }}>
                            <Joystick 
                                baseShape={JoystickShape.Square} 
                                stickShape={JoystickShape.Square} 
                                size={100} 
                                sticky={false} 
                                baseColor={"#d4f0fc"} 
                                stickColor={"#89d6fb"}
                                move={(stick)=>{
                                    this.setState({movement: stick.direction})
                                }}
                                stop={()=>{
                                    this.setState({movement: "NONE"})
                                }}
                                />
                            <div style={{fontSize: "20px", color: "#d4f0fc", marginTop: "10px"}}>
                                Position
                            </div>
                        </div>
                        <div style={{
                            width: "50%", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            flexDirection: "column"
                            }}>
                            <Joystick 
                                size={100} 
                                sticky={true} 
                                baseColor={"#FFFF99"} 
                                stickColor={"#FFD300"}
                                move = {(stick)=>{
                                    this.setState({
                                        angleX: stick.y,
                                        angleY: stick.x
                                    })
                                    
                                }}/>
                            <div style={{fontSize: "20px", color: "#FFFF99", marginTop: "10px"}}>
                                Angle
                            </div>
                        </div>
                    </div>
                </div>
               
				
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const ControlPage = Redux;
