import { getBusinesses } from "./database.js";
import { singleNewYorkBusiness } from "./singleNYbusiness.js";

const contentTarget = document.querySelector("#businessList--newYork");

let businesses = getBusinesses();

const newYorkBusiness = (business) => {
  if (business.addressStateCode === "NY") {
    return true;
  }
  return false;
};

export const newYorkBusinesses = () => {
  const filteredItems = businesses.filter(newYorkBusiness);
  return filteredItems;
};

export const NYbusinessList = () => {
  contentTarget.innerHTML = "<h1>NY Businesses</h1>";

  businesses.forEach((business) => {
    contentTarget.innerHTML += singleNewYorkBusiness(business);
  });
};
