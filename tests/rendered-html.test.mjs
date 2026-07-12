import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza a landing page da Kid Blanco", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>Kid Blanco \| Descubra seu pedido ideal<\/title>/i);
  assert.match(html, /Demonstração conceitual/);
  assert.match(html, /Sua fome sabe o que quer/);
  assert.match(html, /Assistente Kid Blanco/);
  assert.match(html, /Cardápio completo/);
  assert.match(html, /77 itens cadastrados/);
  assert.match(html, /Pizzas salgadas/);
  assert.match(html, /Frango com Catupiry/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
