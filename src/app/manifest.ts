import type { MetadataRoute } from "next";


export default function manifest():
MetadataRoute.Manifest {


return {

name:
"Sharad Pal Portfolio",


short_name:
"Sharad",


description:
"Full Stack AI Developer Portfolio",


start_url:
"/",


display:
"standalone",


background_color:
"#050505",


theme_color:
"#ff6b00",


icons:[

{

src:"/favicon.ico",

sizes:"any",

type:"image/x-icon",

},

],

};

}