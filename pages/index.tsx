import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "components/Header"
import Hero from "components/Hero"
import Service from "components/Service"
import Tokenomics from "components/Tokenomics"
import Contract from "components/Contract"
import Partners from "components/Partners"
import Roadmap from "components/Roadmap"
import Team from "components/Team"
import Footer from "components/Footer"
import Particles from "react-tsparticles"

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>Quizdrop</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/images/quizdrop.png" />
            </Head>
            <Particles
                style={{ position: 'fixed', top: 0, left: 0, height: '100%'}}
                id="tsparticles"
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 500,
                            },
                            value: 30
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Header />
            <Hero />
            <Contract />
            <Service />
            <Tokenomics />
            <Partners />
            <Roadmap />
            <Team />
            <Footer />
        </>
    )
}

export default Home
