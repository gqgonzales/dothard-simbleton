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

// Now let's add some search funcitonality.

const companySearchResultArticle = document.querySelector(".foundCompanies");

document
  .querySelector("#companySearch")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      const foundBusiness = businesses.find((business) =>
        business.companyName.includes(keyPressEvent.target.value)
      );

      companySearchResultArticle.innerHTML = singleBusiness(foundBusiness);
    }
  });
