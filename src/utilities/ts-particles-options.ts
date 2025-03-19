import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import mongodbIcon from "../assets/mongodb.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import awsIcon from "../assets/aws.svg";
import redisIcon from "../assets/redis.svg";
import dockerIcon from "../assets/docker.svg";
import { ISourceOptions } from "@tsparticles/engine";

export const tsParticleOptions: ISourceOptions = {
  autoPlay: true,
  backgroundMask: {
    composite: "destination-out",
    cover: {
      opacity: 1,
      color: {
        value: "",
      },
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 10,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      particle: {
        replaceCursor: false,
        pauseOnStop: false,
        stopDelay: 0,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#ffffff",
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
      },
    },
    effect: {
      close: true,
      fill: true,
      options: {},
      type: [],
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: "delete",
        value: 0,
      },
      value: 70,
    },
    opacity: {
      value: 0.2,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {
        image: [
          {
            name: "htmlIcon",
            src: htmlIcon,
          },
          {
            name: "reactIcon",
            src: reactIcon,
          },
          { name: "nodeIcon", src: nodeIcon },
          { name: "jsIcon", src: jsIcon },
          { name: "typescriptIcon", src: typescriptIcon },
          { name: "mongodbIcon", src: mongodbIcon },
          { name: "mysqlIcon", src: mysqlIcon },
          { name: "redisIcon", src: redisIcon },
          { name: "sassIcon", src: sassIcon },
          { name: "awsIcon", src: awsIcon },
          { name: "dockerIcon", src: dockerIcon },
          { name: "postgresqlIcon", src: postgresqlIcon },
        ],
      },
      type: "image",
    },
    size: {
      value: 10,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      value: 0,
      opacityRate: 0.5,
      sizeRate: 0.5,
      velocityRate: 1,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        rate: {
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    tilt: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 0.5,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    life: {
      count: 0,
      delay: {
        value: 0,
        sync: false,
      },
      duration: {
        value: 0,
        sync: false,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 5,
        decay: 0,
        sync: false,
      },
      direction: "random",
      path: false,
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  key: "images",
  name: "Images",
  preload: [
    {
      src: htmlIcon,
      gif: false,
      height: 20,
      name: "htmlIcon",
      width: 20,
    },
    {
      src: nodeIcon,
      gif: false,
      height: 20,
      name: "nodeIcon",
      width: 20,
    },
    {
      src: jsIcon,
      gif: false,
      height: 20,
      name: "jsIcon",
      width: 20,
    },
    {
      src: typescriptIcon,
      gif: false,
      height: 20,
      name: "typescriptIcon",
      width: 20,
    },
    {
      src: postgresqlIcon,
      gif: false,
      height: 20,
      name: "postgresqlIcon",
      width: 20,
    },
    {
      src: mongodbIcon,
      gif: false,
      height: 20,
      name: "mongodbIcon",
      width: 20,
    },
    {
      src: sassIcon,
      gif: false,
      height: 20,
      name: "sassIcon",
      width: 20,
    },
    {
      src: reactIcon,
      gif: false,
      height: 20,
      name: "reactIcon",
      width: 20,
    },
    {
      src: cssIcon,
      gif: false,
      height: 20,
      name: "cssIcon",
      width: 20,
    },
    {
      src: mysqlIcon,
      gif: false,
      height: 20,
      name: "mysqlIcon",
      width: 20,
    },
    {
      src: redisIcon,
      gif: false,
      height: 20,
      name: "redisIcon",
      width: 20,
    },
    {
      src: awsIcon,
      gif: false,
      height: 20,
      name: "awsIcon",
      width: 20,
    },
    {
      src: dockerIcon,
      gif: false,
      height: 20,
      name: "dockerIcon",
      width: 20,
    },
  ],
  motion: {
    disable: false,
    reduce: {
      factor: 2,
      value: true,
    },
  },
};
