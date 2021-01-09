import Particles from "react-particles-js";
const ParticleBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 3,
              size_min: 0.2,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1.5,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 300,
              duration: 3,
            },
          },
        },
      }}
    />
  );
};
export default ParticleBackground;
