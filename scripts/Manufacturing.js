import { getBusinesses } from "./database.js";
import { singleBusiness } from "./Business.js";

let contentTarget = document.querySelector(".businessList--manufacturing");

let businesses = getBusinesses();

export const manufacturingBusinessList = () => {
  const manufacturingBusiness = (business) => {
    if (business.companyIndustry === "Manufacturing") {
      return true;
    }
    return false;
  };

  const foundManufacturing = () => {
    const filteredItems = businesses.filter(manufacturingBusiness);
    return filteredItems;
  };

  contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>";

  //   Why do I have to set foundManufacturing() equal to a new object?
  // I can't explain lines 27 – down.
  const manufacturingBusinesses = foundManufacturing();

  manufacturingBusinesses.forEach((business) => {
    contentTarget.innerHTML += singleBusiness(business);
  });
};
