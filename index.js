document.addEventListener("DOMContentLoaded", () => {
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
  function setLMACurrentYear() {
    const year = new Date().getFullYear();

    document.querySelectorAll(".year-today").forEach((el) => {
      el.textContent = year;
    });
  }
  
  printLMASignature();
  setLMACurrentYear();
});
