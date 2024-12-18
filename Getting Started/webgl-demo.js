/*
    BE AWARE. I am British. I spell like a sane person. I use the word COLOUR in my comments. Deal with it 😉
*/

main();

function main() {
    const canvas = document.querySelector("#gl-canvas"); // Get the canvas
    const gl = canvas.getContext("webgl"); // Initialise the GL context

    // Only continue if WebGL is avialable and working
    if (gl === null) 
    {
        alert("Unable to initialise GL. our browser or machine may not support it.")
        return; // And be sad
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set the clear colour to black and make it fully opaque
    gl.clear(gl.COLOR_BUFFER_BIT); // Clear the colour buffer wth the specified colour
}