/* 
Use .map() to create an array of purchasing agents for companies that purchase from D&S.
Then iterate the array and display each one in element in your HTML file that has a class of agents.
*/

import { getBusinesses } from "./database.js";

let contentTarget = document.querySelector(".agents");

let businesses = getBusinesses();

export const agentsNames = () => {
  const justAgents = businesses.map((agent) => {
    return agent.purchasingAgent;
  });

  return justAgents;
};
