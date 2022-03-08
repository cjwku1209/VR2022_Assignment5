import React from 'react';
import { connect } from 'react-redux';
import { Joystick } from 'react-joystick-component';

class Component extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            angleX : 0,
            angelY : 0
		}
	}

	render() {
		return (
			<React.Fragment>
                {/* <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Tilt tiltAngleXManual={this.state.angleX} tiltAngleYManual={this.state.angelY} glareEnable={true}>
                    
                    </Tilt>
                </div> */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Joystick 
                    size={100} 
                    sticky={true} 
                    baseColor={"#FFFF99"} 
                    stickColor={"#FFD300"}
                    move = {(stick)=>{
                        console.log(stick.x)
                        console.log(stick.y)
                        this.setState({
                            angleX: stick.x,
                            angleY: stick.y
                        })
                        
                    }}/>
                </div>
				
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const ControlPage = Redux;
