import React, { Component } from 'react';
import App from './App';
import Particles from "react-particles-js";


class Router extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="particles">
                    <Particles
                        params={{
                            particles: {
                                line_linked: {
                                    enable: true,
                                    distance: 300,
                                    color: '#ffffff',
                                    opacity: 0.4,
                                    width: 1,

                                },
                                color: {
                                    value: "#000000"
                                },
                                number: {

                                    value: 30,
                                    density: {
                                        enable: true,
                                        value_area: 800
                                    }
                                },
                                shape: {
                                    type: 'circle',
                                    stroke: {
                                        width: 5,
                                        color: '#ff6347'
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                move: {
                                    enable: true,
                                    speed: 6,
                                    direction: 'none',
                                    random: false,
                                    straight: false,
                                    out_mode: 'out',
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                },


                                interactivity: {
                                    detect_on: 'particles',
                                    events: {

                                        resize: true
                                    },
                                    modes: {
                                        grab: {
                                            distance: 140,
                                            line_linked: {
                                                opacity: 1
                                            }
                                        },
                                        bubble: {
                                            distance: 400,
                                            size: 100,
                                            duration: 2,
                                            opacity: 8,
                                            speed: 3
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4
                                        },
                                        push: {
                                            particles_nb: 4
                                        },
                                        remove: {
                                            particles_nb: 2
                                        }
                                    }
                                },
                                retina_detect: true

                            }
                        }
                        }
                        style={{
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    />
                </div>

                <App />

            </React.Fragment>


        );
    }
}



export default Router;
