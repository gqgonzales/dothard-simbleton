import { getBusinesses } from "./database.js";
import { singleBusiness } from "./Business.js";

let contentTarget = document.querySelector(".businessList--newYork");

let businesses = getBusinesses();

export const NYbusinessList = () => {
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

  const newNewYorkObject = foundNYbusinesses();

  contentTarget.innerHTML = "<h1>NY Businesses</h1>";

  newNewYorkObject.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
