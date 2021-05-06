export const AgentHTML = (agent) => {
  return `
        <section class="agent">
            <div class="purchasing__agent">
                <h3>${agent.nameFirst} ${agent.nameLast}</h3>
            </div>
        </section>
    `;
};
