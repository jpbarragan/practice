window.addEventListener('load', function() {  

    // TODO: Take a look at native global objects, window and document
    
    const intro = document.getElementById('intro');
  
    // Always available because it comes from browser's current version of the document
    console.log(intro.innerHTML);
    console.log(intro.style.fontSize);
  
    // Not available yet because JS can't read the CSS file - it can only read inline
    console.log(intro.style.color);
    
    // TODO: Change the values of the text, color, and font size
    intro.innerHTML = "Ready to go!";
    intro.style.color = "green";
    intro.style.fontSize = "20pt";
    intro.style.fontFamily = "Arial";

    // TODO: Make the text bold and italicized as well
    title.style.fontWeight = "bold";
    title.style.color = "red";
    title.style.fontStyle = "italic";
  
    // TODO: Log the intro element to see the inline styling added
    console.log(intro);
    console.log(title);
  
    // TODO: Log all five properties to see their values
    function logProperties(holder) {
        console.log(holder.innerHTML);
        console.log(holder.style.color);
        console.log(holder.style.fontSize);
    }

    logProperties(title);

    // TODO: add event listener for button clicking
    const button = document.getElementById("button");
    
    button.addEventListener("click", () => {
        console.log("I clicked the button");
    })

    // TODO: add event listener for hoovering mouse over title
    const buttonHovering = document.getElementById("button");

    buttonHovering.addEventListener("mouseover", () => {
        console.log("I hoovered over the button");
    })

  });