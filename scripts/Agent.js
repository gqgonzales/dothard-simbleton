export const AgentHTML = (agent) => {
  return `
        <section class="agent">
            <div class="purchasing__agent">
                <h3>${agent.fullName}</h3>
                <h4>${agent.company}</h4>
                <h4>${agent.telephone}</h4>
            </div>
        </section>
    `;
};

// Maybe I need to rewrite this with my business search in mind.

// export const AgentHTML = (business) => {
//   return `
//           <section class="agent">
//               <div class="purchasing__agent">
//                   <h3>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
//                   <h4>${business.companyName}</h4>
//                   <h4>${business.phoneWork}</h4>
//               </div>
//           </section>
//       `;
// };
