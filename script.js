// competitors-data
const competitors = [
  {
    name: "Amina",
    booksTitle: ["Deep work", "Atomic Habits", "Clean code"],
    totalPages: [250, 300, 464],
    pagesRead: [250, 100, 200],
  },
  {
    name: "Salma",
    booksTitle: ["The Alchemist", "Atomic Habits", "Rich Dad Poor Dad"],
    totalPages: [208, 300, 464],
    pagesRead: [180, 150, 100],
  },
  {
    name: "Mina",
    booksTitle: [
      "Think and Grow Rich",
      "The 7 Habits of Highly Effective People",
      "Clean code",
    ],
    totalPages: [320, 381, 464],
    pagesRead: [300, 280, 300],
  },
  {
    name: "Tamana",
    booksTitle: ["Start With Why", "The Psychology of Money", "Zero to One"],
    totalPages: [256, 256, 224],
    pagesRead: [220, 120, 160],
  },
];

for(let i = 0 ; i < competitors.length ; i++){
    let competitor = competitors[i];
    const {name,booksTitle,totalPages,pagesRead} = competitor;
    console.log("================================");
    console.log("Competitor Name:",name);
    console.log("Books:",booksTitle);
    console.log("Total Pages:", totalPages);
    console.log("Pages read:",pagesRead);
    for(let j = 0; j< booksTitle.length ; j++){
       let progress = calculateProgress(
        pagesRead[j],totalPages[j]
       );
       console.log("Books:",booksTitle);
    console.log(`Progress: ${progress.toFixed(2)} %`);
}
    }
function calculateProgress(pagesRead,totalPages){
  let result = (pagesRead / totalPages ) * 100;
  return result;
}
calculateProgress();