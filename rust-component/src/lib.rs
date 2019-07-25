use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn boop(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    boop(&format!("Hello, {}!", name));
}
