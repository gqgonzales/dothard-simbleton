// const mainContainer = document.querySelector("#container");

// const renderAllHTML = () => {
//   mainContainer.innerHTML = dothardSimbleton();
// };

// renderAllHTML();

import { BusinessList } from "./BusinessList.js";
import { newYorkBusinessList } from "./nyBusiness.js";
import { manufacturingBusinessList } from "./Manufacturing.js";

BusinessList();
newYorkBusinessList();
manufacturingBusinessList();
