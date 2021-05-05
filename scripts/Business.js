export const singleBusiness = (business) => {
  return `
        <section class="business">
            <h2 class="business__name">${business.companyName}</h2>
            <div class="business__address__full">
                ${business.addressFullStreet}
                ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                -----------------------------------------------------------------------------------
            </div>
        </section>
    `;
};
