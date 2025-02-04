import ProjectEntryModel from "../models/ProjectEntryModel";

const posts: ProjectEntryModel[] = [
  {
    title: "batchler.me",
    description: "The site you're on right now! Made with Next.js.",
    startDate: new Date(2025, 1, 4),
    endDate: new Date(2025, 1, 4),
    url: "https://github.com/trithagoras/batchler.me"
  },
  {
    title: "sudokurse",
    description: "Sudoku presented in the terminal via NCurses. Made with C++.",
    startDate: new Date(2024, 5, 22),
    endDate: new Date(2024, 5, 26),
    url: "https://github.com/trithagoras/sudokurse"
  },
  {
    title: "schemON",
    description: "Schema Object Notation - a parser created in Haskell.",
    startDate: new Date(2024, 9, 16),
    endDate: new Date(2024, 11, 3),
    url: "https://github.com/trithagoras/SchemON"
  },
  {
    title: "gig",
    description: "A simple CLI offline gitignore creator based on well-known templates.",
    startDate: new Date(2024, 8, 25),
    endDate: new Date(2024, 8, 25),
    url: "https://github.com/trithagoras/gig"
  },
  {
    title: "eventqueue",
    description: "A stupid easy file-descriptor multiplexer for c++.",
    startDate: new Date(2022, 4, 16),
    endDate: new Date(2022, 4, 21),
    url: "https://github.com/trithagoras/eventqueue"
  },
  {
    title: "MoonlapseMUD",
    description: "An open source multi-user dungeon made with Python designed to play directly in your terminal.",
    startDate: new Date(2019, 11, 14),
    endDate: new Date(2022, 3, 1),
    url: "https://github.com/trithagoras/MoonlapseMUD"
  },
  {
    title: "MMO.NET",
    description: "An MMO server framework inspired by ASP.NET",
    startDate: new Date(2024, 0, 26),
    url: "https://github.com/trithagoras/MmoNet"
  },
];

export default posts;
