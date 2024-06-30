import { proxy } from "valtio";

const state = proxy({
    intro : true,
    color : "black",
    isLogoTexture : true,
    isFulltexture : false,
    logoDecal : './threejs.png',
    fullDecal : 'threejs.png'
});

export default state;