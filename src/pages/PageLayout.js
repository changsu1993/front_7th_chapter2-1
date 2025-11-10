import { Header, Footer } from "../components/index.js";

export const PageLayout = () => {
  return /* html */ `
    <div class="min-h-screen bg-gray-50">
      ${Header()}
      ${Footer()}
    </div>
  `;
};
