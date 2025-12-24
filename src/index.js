import "./styles.css";
import "./bryan.css"
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";
import arooo from "./odin2.png";

console.log(greeting);

console.log("wuuuiiii")


   
const image = document.createElement("img");
image.src = odinImage;
// image.display = "block"
   
document.body.appendChild(image);

const image2 = document.createElement("img");
image2.src = arooo;
// image2.display = "block"
   
document.body.appendChild(image2);