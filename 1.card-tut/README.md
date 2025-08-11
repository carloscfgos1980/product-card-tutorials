
# 11/08/2025

Description:
 React app with CSS styling. Display 3 products cards  adjusting to different view ports (responsieve designs). While hoveer the image it makes then a bit bigger and lighter 

 # CSS:
 - import fonts
 - universal settings
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
- display grid
- box shadow: 
1 value to x axis
2 value 7 y axis
3 value the size of the blur value
4 value the outseltof the shadow box
* if <inset> property is used then the sahow come inside the box creating a very nice effect

- padding short hand:
4 values, top-right-bottom-left
If there are 43 values the the last it gets no left padding

- margin and center the image:
margin: 10px auto 25px;

- position: using <before> to create a sphere

- transition
- nth-child

- media query
    display: grid;
    grid-template-columns: repeat(3, 1fr);

* the way is used media query is oppositive of the ay I learned, since the starting view port is a cell (small size). i this case is set to bigger screen and then adjust it:

@media screen and (max-width:800px) {
    .mainContainer {
        grid-template-columns: repeat(2, 1fr);
        padding: 5rem 3rem
    }
}

@media screen and (max-width:500px) {
    .mainContainer {
        grid-template-columns: repeat(1, 1fr);
        padding: 5rem 3rem
    }
    .card .desc{
        width: 90%;
    }
}
