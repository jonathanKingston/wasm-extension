function boop(hey) {
  console.log(hey);
}
async function run() {
  let glob = await wasm_bindgen("pkg/rust_component_bg.wasm");
  glob.greet("person");                                                                                                                                                                
//  let glob = wasm_bindgen.greet("person");                                                                                                                                                                
}
run();

