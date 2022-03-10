// import index dan store
import { index, store } from "./controller.mjs";

function main() {
  const user = {
    name: "Hidayah",
    age: 20
  }

  index();
  store(user);
}

main();