import React from 'react';
import './Menu.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen : false
		};
	}

	handleMenuClick() {
		this.setState({ menuOpen: !this.state.menuOpen });
	}

	handleLinkClick() {
		this.setState({ menuOpen: false });
	}
	render() {
		const menu = [ 'About', 'Projects', 'Tech', 'Contact' ];
		const menuItems = menu.map((val, index) => {
			return (
				/* console.log('thats the index [0]', index, val), */
				<MenuItem key={index} delay={`${index * 0.1}s`} onClick={() => this.props.changeMenu(val)}>
					{val}
				</MenuItem>
			);
		});

		return (
			<div className="Navbar">
				<div className="navContainer">
					<MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color="white" />
					<div className="logo" onClick={() => this.props.changeMenu(this.props.menuBar[0].endPoint)}>
						<a href="http://ansumanadarboe.com/">Ansumana Darboe</a>
					</div>
				</div>
				<Menu open={this.state.menuOpen}>
					{menuItems}
					<div className="social">
						{this.props.socialMedia.map((social, index) => (
							<a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
								<i className={social.faIcon} />{' '}
							</a>
						))}
					</div>
				</Menu>
			</div>
		);
	}
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover : false
		};
	}

	/* 	handleHover() {
		this.setState({ hover: !this.state.hover });
	} */

	render() {
		const styles = {
			container : {
				background     : 'white',
				opacity        : 0,
				animation      : '1s appear forwards',
				animationDelay : this.props.delay
			},
			menuItem  : {
				/* fontFamily     : `'Open Sans', sans-serif`,*/
				fontSize       : '1rem',
				padding        : '1rem 0',
				margin         : '0 5vw',
				cursor         : 'pointer',
				color          : 'black',
				transition     : 'color 0.2s ease-in-out',
				animation      : '0.5s slideIn forwards',
				animationDelay : this.props.delay
			},
			line      : {
				width          : '80vw',
				height         : '1px',
				background     : 'gray',
				margin         : '0 auto',
				animation      : '0.5s shrink forwards',
				animationDelay : this.props.delay
			}
		};
		return (
			<div style={styles.container}>
				<div
					style={styles.menuItem}
					/* 		onMouseEnter={() => {
						this.handleHover();
					}}
					onMouseLeave={() => {
						this.handleHover();
					}} */
					onClick={this.props.onClick}
				>
					{this.props.children}
				</div>
				{/* <div style={styles.line} /> */}
			</div>
		);
	}
}

/* Menu.jsx */
class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open : this.props.open ? this.props.open : false
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	render() {
		const styles = {
			container : {
				position      : 'absolute',
				background    : 'rgb(242, 242, 242, 0.5)',

				top           : '10vh',
				left          : 0,

				height        : this.state.open ? '100vh' : 0,
				width         : this.state.open ? '100vw' : 0,

				display       : 'flex',
				flexDirection : 'column',
				/* 	border        : '1px solid red', */
				/* 	opacity       : 0.5, */
				/* 	color         : '#fafafa', */
				transition    : 'height 0.3s ease',
				zIndex        : 22
			},
			menuList  : {
				background : 'white'

				/* border     : '1px solid green' */
				/* 	width      : '30vw', */
				/* height     : this.state.open ? '40vh' : 0 */
			}
		};
		return (
			<div style={styles.container}>
				{this.state.open ? <div style={styles.menuList}>{this.props.children}</div> : null}
			</div>
		);
	}
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open  : this.props.open ? this.props.open : false,
			color : this.props.color ? this.props.color : 'black'
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	closeMenu = () => {
		if (this.props.width < 766) {
			this.handleClick();
		}
	};
	closeMenu() {
		this.setState({ open: !this.state.open });
	}

	render() {
		const styles = {
			container  : {
				/* opacity        : 0.5, */
				position       : 'absolute',
				right          : '5vw',
				top            : '2vh',
				/* 	background     : 'black', */
				height         : '35px',
				width          : '30px',
				display        : 'flex',
				flexDirection  : 'column',
				justifyContent : 'center',
				alignItems     : 'center',
				cursor         : 'pointer',
				padding        : '2px',
				zIndex         : 9999
			},
			line       : {
				height     : '2px',
				width      : '20px',
				background : 'black',
				transition : 'all 0.2s ease'
			},
			lineTop    : {
				transform       : this.state.open ? 'rotate(45deg)' : 'none',
				transformOrigin : 'top left',
				marginBottom    : '5px'
			},
			lineMiddle : {
				opacity   : this.state.open ? 0 : 1,
				transform : this.state.open ? 'translateX(-16px)' : 'none'
			},
			lineBottom : {
				transform       : this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
				transformOrigin : 'top left',
				marginTop       : '5px'
			}
		};
		return (
			<div
				style={styles.container}
				onClick={
					this.props.onClick ? (
						this.props.onClick
					) : (
						() => {
							this.closeMenu();
						}
					)
				}
			>
				<div style={{ ...styles.line, ...styles.lineTop }} />
				<div style={{ ...styles.line, ...styles.lineMiddle }} />
				<div style={{ ...styles.line, ...styles.lineBottom }} />
			</div>
		);
	}
}

export default Header;
