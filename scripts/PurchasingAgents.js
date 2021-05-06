/* 
Use .map() to create an array of purchasing agents for companies that purchase from D&S.
Then iterate the array and display each one in element in your HTML file that has a class of agents.
*/

import { getBusinesses } from "./database.js";
import { AgentHTML } from "./Agent.js";

let contentTarget = document.querySelector(".agents");

let businesses = getBusinesses();

export const purchasingAgents = () => {
  const agentList = businesses.map((business) => {
    return {
      fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
      company: business.companyName,
      telephone: business.phoneWork,
    };
  });
  contentTarget.innerHTML = "<h1>Purchasing Agents</h1>";
  agentList.forEach((agent) => (contentTarget.innerHTML += AgentHTML(agent)));
};
