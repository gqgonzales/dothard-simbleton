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

  const findNYbusiness = () => {
    const filteredItems = businesses.filter(newYorkBusiness);
    return filteredItems;
  };

  contentTarget.innerHTML = "<h1>NY Businesses</h1>";

  findNYbusiness.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
