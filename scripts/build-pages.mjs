import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../pages-dist/", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages-build", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://idroxz777.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Falha ao renderizar a página: ${response.status}`);
}

const html = (await response.text())
  .replaceAll('"/assets/', '"./assets/')
  .replaceAll('"/kid-blanco-instagram.png', '"./kid-blanco-instagram.png')
  .replaceAll('"/favicon.svg', '"./favicon.svg');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });
await writeFile(new URL("index.html", outputDirectory), html);
await writeFile(new URL("404.html", outputDirectory), html);
await writeFile(new URL(".nojekyll", outputDirectory), "");

console.log("Versão do GitHub Pages criada em pages-dist.");
