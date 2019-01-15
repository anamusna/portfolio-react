import React, { Component } from "react";
import Particles from "react-particles-js";
import assets from "../assets";

class Tech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: assets,
            loading: false
        };
    }

    render() {
        return (
            <section className="tech-stack">
                <h1>My Tech Stack</h1>
                <div className="skillsSection tech-stack-text">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 30,
                                    density: {
                                        enable: true,

                                    }
                                },
                                line_linked: {
                                    enable: false
                                },
                                move: {
                                    speed: 1,
                                    out_mode: "out"
                                },
                                shape: {
                                    type: ["images"],
                                    images: this.state.images.map(img => ({
                                        src: img,
                                        height: 100,
                                        width: 100,
                                        color: "#fff"
                                    }))
                                },
                                color: {
                                    value: "#fff"
                                },
                                size: {
                                    value: 30,
                                    random: false,
                                    anim: {
                                        enable: true,
                                        speed: 4,
                                        size_min: 10,
                                        sync: false
                                    }
                                }
                            },
                            retina_detect: false
                        }}
                    />
                </div>
            </section>

        );
    }
}

export default Tech;
