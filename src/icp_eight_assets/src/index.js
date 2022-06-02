import { icp_eight } from "../../declarations/icp_eight";

import './main.css';

async function main() {
  const current = await icp_eight.getProposal();

  document.getElementById("greeting").innerText = `Last Proposal: ` + current;
}
main()

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await icp_eight.proposeNew(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
