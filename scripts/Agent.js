export const AgentHTML = (agent) => {
  return `
        <section class="agent">
            <div class="purchasing__agent">
                <h2>${agent.nameFirst} ${agent.nameLast}</h2>
            </div>
        </section>
    `;
};
