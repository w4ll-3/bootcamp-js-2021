const paragraphs = document.getElementsByTagName("p");
console.log("parrafos en el documento: ", paragraphs.length);

if (paragraphs.length > 0) {
    const paragraph = paragraphs[0];
    paragraph.innerText = "Bienvenidos al bootcamp"; //cambio de texto elemento p
}

if (paragraphs.length > 1) {
    const paragraph = paragraphs[1];
    paragraph.innerText = "parrafos en el documento: " + paragraphs.length
}
