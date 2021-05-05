import { getBusinesses } from "./database.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".businesses");

const BusinessList = () => {
  const businessArray = getBusinesses();
  contentTarget.innerHTML = "<h1>Active Businesses</h1>";

  businessArray.forEach((business) => {
    contentTarget.innerHTML += Business(business);
  });
};
