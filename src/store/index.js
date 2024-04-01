import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#c55cff",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./circuit.png",
});

export default state;
