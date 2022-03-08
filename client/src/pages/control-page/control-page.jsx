import React from 'react';
import { connect } from 'react-redux';
import { Joystick } from 'react-joystick-component';
import Tilt from 'react-parallax-tilt';

class Component extends React.Component {

	constructor(props){
		super(props);
		this.state = {
            angleX : 0,
            angleY : 0
		}
	}

	render() {
		return (
			<React.Fragment>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "20px"
                }}>
                    <Tilt tiltAngleXManual={this.state.angleX} tiltAngleYManual={this.state.angleY} glareEnable={false}>
                        <div style={{ height: '300px', width: '300px', backgroundColor: '#FFD300', borderColor: '#FFFF99'}}>
                            <div>Axis x: {this.state.angleX}°</div>
                            <div>Axis y: {this.state.angleY}°</div>
                        </div>
                    </Tilt>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "20px"
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
                </div>
				
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const ControlPage = Redux;
