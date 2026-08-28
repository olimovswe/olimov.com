      
      
      
     document.addEventListener("DOMContentLoaded", () => {
    const moreBtn = document.getElementById("moreBtn");
    const moreDropdown = document.getElementById("moreDropdown");

    // 1. Tugma bosilganda dropdownni ochish yoki yopish
    if (moreBtn && moreDropdown) {
        moreBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Klik hodisasi document'ga o'tib ketmasligi uchun
            moreDropdown.classList.toggle("show");
        });

        // 2. Tashqariga bosilganda dropdownni silliq yopish (Xatosiz uslub)
        document.addEventListener("click", (e) => {
            // Agar bosilgan element dropdown ichida bo'lmasa va tugma bo'lmasa, yopamiz
            if (!moreDropdown.contains(e.target) && e.target !== moreBtn) {
                moreDropdown.classList.remove("show");
            }
            // BU YERDA ASLO e.preventDefault() ISHLATILMASLIGI SHART!
        });
    }
});





        // Aktivits


document.addEventListener("DOMContentLoaded", () => {
    // Kataklar aynan shu konteyner ichiga chiziladi
    const cellsContainer = document.getElementById("cellsContainer");
    
    if (cellsContainer) {
        const totalCells = 35; // Rasmga mosroq tushishi uchun kataklar soni 35 ta qilindi

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement("div");
            cell.classList.add("activity-cell");
            
            // Namuna sifatida ba'zi kunlarni yashil rang darajalariga bo'yash
            if (i === 3 || i === 11 || i === 24) cell.classList.add("low");
            if (i === 7 || i === 18 || i === 31) cell.classList.add("medium");
            if (i === 14 || i === 28) cell.classList.add("high");

            cellsContainer.appendChild(cell);
        }
    }
});


