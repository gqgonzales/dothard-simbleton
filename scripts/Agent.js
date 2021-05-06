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
