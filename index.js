document.addEventListener("DOMContentLoaded", () => {
  // LMA Console Signature With Website
  function printLMASignature() {
    console.log(`
    /*****************************************
     *                                       *
     *              Made by LMA              *
     *  https://www.the-robinson-agency.com/ *
     *                                       *
     *****************************************/
    `);
  }
  printLMASignature();

  // Auto Update Current Year Text (Vanilla JS)
  function setLMACurrentYear() {
    const year = new Date().getFullYear();

    document.querySelectorAll(".year-today").forEach((el) => {
      el.textContent = year;
    });
  }
  setLMACurrentYear();
});
