import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import COLOR from "../constant/color";
import { Engine } from "tsparticles-engine";

export default function ParticleCustom() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: COLOR.MAIN_BG,
          },
        },
        fullScreen: {
          zIndex: -100,
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: COLOR.SECOND_COLOR,
          },
          links: {
            color: COLOR.MAIN_COLOR,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
