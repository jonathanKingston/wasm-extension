# Wasm extension

Just a basic web extension for an issue https://github.com/rustwasm/wasm-bindgen/issues/1653

Get it running:
```
npm install
npm run build
web-ext run -f firefox-binary
```

Expected console output (about:debugging open extension inspector):
```
Hello, person!
```
