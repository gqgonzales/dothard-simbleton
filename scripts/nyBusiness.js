import { getBusinesses } from "./database.js";
// import { singleNewYorkBusiness } from "./singleNYbusiness.js";

// const contentTarget = document.querySelector("#businessList--newYork");

let businesses = getBusinesses();

const newYorkBusiness = (business) => {
  if (business.addressStateCode === "NY") {
    return true;
  }
  return false;
};

export const newYorkBusinessList = () => {
  const filteredItems = businesses.filter(newYorkBusiness);
  return filteredItems;
};

// contentTarget.innerHTML = "<h1>NY Businesses</h1>";

//   contentTarget.innerHTML += singleNewYorkBusiness(business);
