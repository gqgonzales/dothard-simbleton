import { getBusinesses } from "./database.js";
import { singleBusiness } from "./Business.js";

const contentTarget = document.querySelector(".businesses");

export const BusinessList = () => {
  const businessArray = getBusinesses();
  contentTarget.innerHTML += "<h1>Active Businesses</h1>";

  businessArray.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
