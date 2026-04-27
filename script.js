const competitors = [
    {
    name:"Nooria",
    booksTitle :["Deep work","Atomic Habit","Clean Code"],
    totalPages:[250,150,400],
    pagesRead:[200,50,10]
},
{
    name:"Amina",
    booksTitle :["Deep work","Atomic Habit","Clean Code"],
    totalPages:[250,150,400],
    pagesRead:[200,50,10]
},
{
    name:"Salma",
    booksTitle :["Deep work","Atomic Habit","Clean Code"],
    totalPages:[250,150,400],
    pagesRead:[200,50,10]
}
]
for(let i= 0; i < competitors.length;i++ ){
    const person = competitors[i];
    console.log("Competitors:",person.name);
    console.log("Books:", person.booksTitle);
    console.log("Total Pages:",person.totalPages);
    console.log("Read Pages:", person.pagesRead)
}
