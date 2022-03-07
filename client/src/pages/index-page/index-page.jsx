import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Input, Form, Modal } from "antd";

class Component extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			createAccountModalVisibility: false,
			loginUsername: "",
			loginPassword: "",
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		}
	}

	render() {
		return (
			<React.Fragment>
				<Modal
					centered
					// title="Sign Up"
					visible={this.state.createAccountModalVisibility}
					onCancel={() => {
						this.setState({
						createAccountModalVisibility: false,
						firstName: "",
						lastName: "",
						email: "",
						username: "",
						password: "",
						});
					}}
					footer={[]}
					>
					<img style={{
							height: "80px"
						}} 
							src={process.env.PUBLIC_URL+ "/img/mislabLogo.png"} 
							alt="logo"/>
					<div style={{fontSize: "2.2em", paddingBottom: "15px", fontFamily: "Roboto, sans-serif"}}>New Account</div>
					<div style={{ color: "black", opacity: 1 }}>
						<span style={{ color: "rgb(255, 77, 79)" }}>{"* "}</span>
						First Name
					</div>
					<Input
						value={this.state.firstName}
						onChange={(e) => {
						this.setState({ firstName: e.target.value });
						}}
					/>

					<div style={{ color: "black", opacity: 1, paddingTop: "11.75px" }}>
						<span style={{ color: "rgb(255, 77, 79)" }}>{"* "}</span>
						Last Name
					</div>
					<Input
						value={this.state.lastName}
						onChange={(e) => {
						this.setState({ lastName: e.target.value });
						}}
					/>

					<div style={{ color: "black", opacity: 1, paddingTop: "11.75px" }}>
						<span style={{ color: "rgb(255, 77, 79)" }}>{"* "}</span>
						Username
					</div>
					<Input
						value={this.state.username}
						onChange={(e) => {
						this.setState({ username: e.target.value });
						}}
					/>

					<div style={{ color: "black", opacity: 1, paddingTop: "11.75px" }}>
						<span style={{ color: "rgb(255, 77, 79)" }}>{"* "}</span>
						Password
					</div>
					<Input.Password
						style={{
						marginBottom: "11.75px",
						}}
						value={this.state.password}
						onChange={(e) => {
						this.setState({ password: e.target.value });
						}}
					/>
					<Button
						style={{width: "100%", marginTop: "10px"}}
						key="submit"
						variant="success" 
						onClick={() => {
							
						}}>
						Register
					</Button>
				</Modal>			
				<div style={
					{	
						minHeight: "100vh",
						margin: 0,
						width: "100vw", 
						backgroundImage: `url(${process.env.PUBLIC_URL + '/img/wallpaper.jpg'})`, 
						backgroundSize: "cover", 
						backgroundRepeat: "no-repeat",
						fontFamily: "Roboto, sans-serif"
					}
				}>
					<div style={{
						height: "100vh",
						width: "100vw",
						backgroundColor: "black",
						position: "fixed",
						opacity: "0.45"
					}}/>
					<div style={{
						position: "absolute",
						padding: "40px",
						width: "30%",
						minWidth: "350px",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						borderRadius: "24px",
						backgroundColor: "black",
						opacity: "0.8"
					}}>
						<div style={{
							textAlign: "center",
							marginBottom: "20px",
							color: "white"
						}}>
							<img style={{
								height: "80px"
							}} 
								src={process.env.PUBLIC_URL+ "/img/mislabLogo.png"} 
								alt="logo"/>
								<div style={{fontSize: "2em"}}>Welcome Back!</div>
								<div style={{margin: "10px", fontWeight: 50, fontSize: "1em"}}>Enter your credintials to login</div>
						</div>
						<Form size={"large"} name="basic">
							<Form.Item
								name="username"
								rules={[
								{ required: true, message: "Please input your username!" },
								]}
							>
								<Input
									placeholder="username"
									value={this.state.loginUsername}
									onChange={(e) => {
										this.setState({ loginUsername: e.target.value });
									}}
								/>
							</Form.Item>

							<Form.Item
								name="password"
								rules={[
								{ required: true, message: "Please input your password!" },
								]}
							>
								<Input.Password
									placeholder="password"
									value={this.state.loginPassword}
									onChange={(e) => {
										this.setState({ loginPassword: e.target.value });
									}}
								/>
							</Form.Item>
							</Form>
							<div style={{padding: "10px"}}>
							<Button 
								variant="success" style={{width: "100%"}}
								>
								Login
							</Button>
						</div>
						<div style={{padding: "10px"}}>
							<a 
								onClick={()=>{
									this.setState({createAccountModalVisibility: true})
								}}
								href="#" 
								style={{color: "#888888", fontSize: "0.9em"}}>
								Create new Account
							</a>
						</div> 
					</div>
				</div>
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const IndexPage = Redux;
