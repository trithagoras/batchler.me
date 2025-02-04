import PostModel from "../models/postModel";

const posts: PostModel[] = [
  {
    id: "avr-programming-macos",
    title: "AVR programming on MacOS",
    date: new Date(2021, 5, 4),
  },
  {
    id: "compile-and-link-raylib-windows",
    title:
      "[Windows] Compiling and adding raylib to Visual Studio 2022 project",
    date: new Date(2022, 11, 22),
  },
  {
    id: "game-of-life",
    title:
      "Conway's Game of Life using SFML in C++ with multidimensional discrete convolutions",
    date: new Date(2023, 6, 24),
  },
];

export default posts;
