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

// How about an agent search?
// Find purchasing agents by first name

const agentsFirstNameArticle = document.querySelector(".foundAgents");

document
  .querySelector("#agentFirstNameSearch")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      const agentSearch = businesses.find((business) =>
        business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
      );

      const foundAgentObject = singleAgentObject(agentSearch);

      agentsFirstNameArticle.innerHTML = AgentHTML(foundAgentObject);
    }
  });

//Let's try setting a new foundAgent object equal to the return value in 16 - 19

let singleAgentObject = (business) => {
  return {
    fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
    company: business.companyName,
    telephone: business.phoneWork,
  };
};
