#!/bin/zsh

set -e

PROJECT_DIR="${0:A:h}"
CODEX_NODE="/Applications/Codex.app/Contents/Resources/cua_node/bin/node"
NPM_CLI="/Applications/Codex.app/Contents/Resources/cua_node/lib/node_modules/npm/bin/npm-cli.js"
RUNTIME_DIR="/private/tmp/kid-blanco-bin"

if [[ ! -x "$CODEX_NODE" ]]; then
  echo "Não foi possível encontrar o ambiente do Codex."
  read "?Pressione Enter para fechar."
  exit 1
fi

mkdir -p "$RUNTIME_DIR"
cp "$CODEX_NODE" "$RUNTIME_DIR/node"
codesign --force --sign - "$RUNTIME_DIR/node" >/dev/null 2>&1

cd "$PROJECT_DIR"

cleanup() {
  [[ -n "$SITE_PID" ]] && kill "$SITE_PID" 2>/dev/null || true
  [[ -n "$PROXY_PID" ]] && kill "$PROXY_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

env PATH="$RUNTIME_DIR:/usr/bin:/bin:/usr/sbin:/sbin" \
  "$RUNTIME_DIR/node" "$NPM_CLI" run dev -- --port 4173 &
SITE_PID=$!

sleep 4

"$RUNTIME_DIR/node" -e '
  const http = require("http");
  const server = http.createServer((request, response) => {
    const upstream = http.request({
      hostname: "127.0.0.1",
      port: 4173,
      path: request.url,
      method: request.method,
      headers: request.headers,
    }, (result) => {
      response.writeHead(result.statusCode, result.headers);
      result.pipe(response);
    });
    upstream.on("error", () => {
      response.writeHead(502);
      response.end("Aguarde alguns segundos e atualize a pagina.");
    });
    request.pipe(upstream);
  });
  server.listen(4174, "0.0.0.0");
' &
PROXY_PID=$!

LOCAL_IP=$(ifconfig | awk '/inet / && $2 != "127.0.0.1" { print $2; exit }')

open "http://localhost:4173"
echo ""
echo "Demonstração Kid Blanco iniciada."
echo "No computador: http://localhost:4173"
echo "No celular, usando o mesmo Wi-Fi: http://${LOCAL_IP}:4174"
echo ""
echo "Mantenha esta janela aberta durante a apresentação."
echo "Pressione Control + C para encerrar."

wait "$PROXY_PID"
