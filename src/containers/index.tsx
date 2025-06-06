import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { ContainerWrapper } from "./styles";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Greeting } from "../components/Greeting/Greeting";
import WorkExperience from "../components/Experience/Experience";
import { experiences } from "../utilities/constants";
import { Project } from "../components/Project/Project";
import { Contact } from "../components/Contact/Contact";
import { tsParticleOptions } from "../utilities/ts-particles-options";

export function Main() {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  const options: ISourceOptions = useMemo(() => ({ ...tsParticleOptions }), []);

  if (init) {
    return (
      <ContainerWrapper>
        <Particles
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={options}
        />
        <Greeting />
        <WorkExperience experiences={experiences} />
        <Project />
        <Contact />
      </ContainerWrapper>
    );
  }

  return <>Hello</>;
}
