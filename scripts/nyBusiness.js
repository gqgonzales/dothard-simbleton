import { getBusinesses } from "./database.js";
import { singleBusiness } from "./Business.js";

let contentTarget = document.querySelector(".businessList--newYork");
contentTarget.innerHTML = "<h1>NY Businesses</h1>";

let businesses = getBusinesses();

export const newYorkBusinessList = () => {
  const newYorkBusiness = (business) => {
    if (business.addressStateCode === "NY") {
      return true;
    }
    return false;
  };

  const foundNYbusinesses = () => {
    const filteredItems = businesses.filter(newYorkBusiness);
    return filteredItems;
  };

  const nyBusinesses = foundNYbusinesses();

  nyBusinesses.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
