import { getBusinesses } from "./database.js";
import { singleBusiness } from "./Business.js";

const contentTarget = document.querySelector(".businesses");

const businesses = getBusinesses();

export const BusinessList = () => {
  contentTarget.innerHTML = "<h1>Active Businesses</h1>";

  businesses.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
