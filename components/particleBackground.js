import Particles from "react-particles-js";
const ParticleBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.09,
          },
          move: {
            random: true,
            speed: 0.2,
          },
          size: {
            value: 1.25,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.18,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
export default ParticleBackground;
