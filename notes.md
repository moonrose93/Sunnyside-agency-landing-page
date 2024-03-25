We need to escape using cover images at the body because the all containers then will ned to be moved with positioning. Instead we create a  container and we pass a background image for that container.


-Here the container is created and the background image is passed with a height of 80vh and position center and we added a min height of 600px. so on resizing the window the background image to reach 600px height  .
.banner{
    background-image: url('images/desktop/image-header.jpg');
    height: 80vh;
    min-height: 600px;
    background-position: center;
    background-size: cover;
}
because the parent container is flexed we can pass the flex of 1 to the child containers so they equaly occupy the width of the parent container.
Then if we want the 2 containers left and right to be equal the set the 2 container classes with flex 1 property so the both of the containers to be equal 50% 

.left, .right{
    flex: 1;
}

.left container:

The flex: 1; property is applied to the .left container.
This property assigns a flex grow factor of 1 to the .left container.
As a result, the .left container will grow and occupy all available space along the main axis within its flex container.
In this case, since the .section-one container (parent container of .left and .right) is a flex container with flex-direction: row, the main axis is horizontal.
Therefore, the .left container will expand horizontally to fill the available space within the .section-one container.
.right container:

The .right container also has the flex: 1; property applied to it.
Similar to the .left container, the .right container will also grow and occupy all available space along the main axis within its flex container.
In this case, since the .section-one container (parent container of .left and .right) is a flex container with flex-direction: row, the main axis is horizontal.
Therefore, the .right container will also expand horizontally to fill the available space within the .section-one container.
In summary, the flex: 1; property applied to both .left and .right containers ensures that they equally share and fill the available horizontal space within their flex container (.section-one).


For the image we set :
.right img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

So that the image to occupy the whole width of that container.And the object fit is set to cover so making sure the whole image is inside that container

Also on the containers that we create further we dont set width with max width we just wet width un % to the child container but not  to the parent container ,the parent container is used just so that we can flex the child containers.

The reason the yellow line is not showing on hover might be due to the CSS ::after pseudo-element not being positioned correctly. In your code, you have set the position property to relative, but for a pseudo-element to be positioned relative to its parent element, it should have a position of absolute or fixed.


-By adding position: relative; to the .more element, you make it the positioning context for the pseudo-element. Then, with position: absolute;, you position the pseudo-element relative to the .more element. The bottom property is used to adjust the distance between the .more element and the line. Adjust the left, bottom, and transform properties as needed to fine-tune the positioning.

.more {
    display: inline-block;
    margin-top: 60px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    position: relative; /* Added positioning */
}

.more:hover::after {
    content: "";
    position: absolute; /* Positioned relative to the .more element */
    bottom: -10px; /* Adjusted positioning to place it under the .more element */
    left: 50%; /* Adjusted positioning */
    transform: translateX(-50%); /* Centered the line horizontally */
    height: 6px;
    background-color: yellow;
    width: 20%;
}


Important!!

-So the parent element must be positioned relative so that the pesudo element with podition absolute to stick to the nearest positioned element which in this case isthe element more (positioned with relatoive)!


Keep in mind when creating element with pseudo we must center that element with positioning absolute to the relative element and left 50% transform translateX so that we bring the pseudo element to the center of the position relative element and also we need to set a  width of 100% so that elemet to occuppay the whole width of the parent element.

-Also the parent element need to be set to inline-block.

An inline-block element behaves like an inline element in that it doesn't start on a new line, but it can have width and height like a block-level element. So, the width it occupies depends on its content or explicitly set dimensions.

.more-two:hover::after{
    content: "";
    position: absolute;
    left: 50%;
   transform: translateX(-50%);
   top:10px;
    width: 100%;
    border-radius: 3px;
    height: 6px;
    background-color: rgba(231, 80, 80);
}


Remenber! we escape using positioning for block we never do that never move blocks(divs with positioning)!

left: 50%;
   transform: translateX(-50%);

   Bring to the center of the element 50% of the left and    transform: translateX(-50%);



   Here we added a height of the third section container so that the images from the child containers passed as bacground image in css to be seen clearly with the whole width thats why we needed to pass a height to the third container.

   So next for the images the container five. 

    We also displayed flex the container five and then we set all the images inside containers so that we can contorol them easier because the image can be conformed with a div  and because the main container is flexed we 
    then set the flex: property to 0.25% for the image because 4*25 =100% and we have 4 images inside those 4 divs and every div also will  occupy about 25% from those 100% that needs to occupy .
    So if we have 2 divs and we want them to occupy the whole width of the browser we need to flex the main container and then to apply the flex property of 1 to the 2 divs because 1=50% and we have 2 divs. with the value of 1 are 100% from the viewport width.

    HTML

   <div class="five">
    <div class="five-container-img"><img src="images/desktop/image-gallery-milkbottles.jpg" alt="image-gallery-milkbottles"></div>
    <div class="five-container-img"><img src="images/desktop/image-gallery-orange.jpg" alt="image-gallery-orange"></div>
    <div class="five-container-img"> <img src="images/desktop/image-gallery-cone.jpg" alt="image-gallery-cone"></div>
    <div class="five-container-img"><img src="images/desktop/image-gallery-sugarcubes.jpg" alt="image-gallery-sugarcubes"></div>

   </div>

    CSS


 .five-container-img img{
flex:0.25;
width: 100%;
}

Remember when we use the flex property we pass eather 1 or 0.25% decimal value in procent 1 when we want to make it 50%-50% and decimal when we have more containers that we want to fit the viewport until reach 100%

So if we want to resize the images in this case with the flex property we must set them in containers in case the flex property to work.

and then we target the container name and the img.because we want the both of them to be targeted and resized.
So with this we resize both the container and the image.


At the end at the footer we created the footer div and we set the icons as XML svg first we passed them at the notpad and we copied the code to our htm document the with css we styled the color of the logo because now we can change it bacause we have tthe path of our svg element to the fill property so in css we pass the class for the svg then path and inside properties we pass the fill property and we change the color.

.logo-footer path{
    fill: rgb(58, 121, 86);
}

   <div class="footer">
    <svg class="logo-footer" width="124" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z" fill="#FFF" fill-rule="nonzero"/></svg>
    <div class="menu-footer">
        <p>About</p>
            <p>Services</p>
            <p> Projects</p>
    </div>
    <div class="social-media-icons">
        <svg class="fb" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" fill="#2C7566" fill-rule="nonzero"/></svg>
        <svg class="instagram" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill="#2C7566" fill-rule="nonzero"/></svg>
        <svg class="twitter" width="20" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" fill="#2C7566" fill-rule="nonzero"/></svg>       
        <svg class="pinterest" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" fill="#2C7566" fill-rule="nonzero"/></svg>
    </div>
    
   </div>

Wrap up . We need to escape using positioning for blocks if they can be flexed the flex property will do the job for resizing
using blocks with the cackground image is suitable adding margin and padding to small elements for small moves.
when passing images to blocks as bacground image we must keep in mind that we need to give height to the main container so that the child containers to occupy that width

we never pass height to the child containers just to the parent so then the image passed to the child container will ocupy the height passed to the parent container , because child containers are consistent inside the parent container.

Here is child container with an image . also added background size to cover and background positioning for that image.


.left-third{
    background-image: url('images/desktop/image-graphic-design.jpg');
    background-size: cover;
    background-position: top center;
    display: flex;
    justify-content: center;
    text-align: center;
   
    
}


Same for the hover of the elements we used the class the path the pseudo hover and fill to change the color of the icons:

.fb path:hover,
.instagram path:hover,
.twitter path:hover,
.pinterest path:hover{
    fill: white;
}


When we give width to the child containers we do that in procents.

-Mobile version:

For the mobile version :

If the max width of the viewport is 480px the containers needs to be 420px or lower depending what we want to achive.Also the image needs to be rsized same as the width of the copntainers so that it will match their width    .top img{
    width: 420px;
   }


- So for the mobile version we just set width of the containers same width for all containers . If we use the max wid of 480px for the viewport then we set width of the containers to 420px.



- Same for the photography and design blocks as the desktop version, where we used the background image fo the block with the height.

This is for the mobile:

   .section-photography{
    background-image: url("images/mobile/image-photography.jpg");
    height: 80vh;
    background-size: cover;
    width: 420px;
 
   
   }

This is the desktop:


.section-three{
    display: flex;
    height: 100%;
    min-height: 800px;
}

   .left-third{
    background-image: url('images/desktop/image-graphic-design.jpg');
    background-size: cover;
    background-position: top center;
    display: flex;
    justify-content: center;
    text-align: center;
   
    
}

We can see that on the desktop version we set a height of the parent block to 800 with that the childs blocks will take the same height.

And for the mobile we set the height directly to 80vh to the block no need for the parent block.









So we dont use positioning to arrange containers they will be aligned in our html as we write them :)

In here we must set position absolute for non consistent all the time elements like the menu for the mobile so that will appear only on click so its not a big deal if we take it from the workflow and style it but for the webpage elements themselfs we need to escape using any positioning.

.menu-mobile{
    width: 360px;
   display: flex;
   justify-content: center;

    position: absolute;
    left: 30px;
    background-color: white;
    height: 300px;
    top: 130px;

}

.menu-box{
 height: 300px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 300px;
 background-color: yellow;
}

.about,
.services,
.projects{
    margin-bottom: 30px;
    font-size: 1.2rem;
    
}

.contact{
    padding: 15px 35px;
    border: none;
    border-radius: 30px;
}

Also for container images we had to add height to the main container so that the child conteiners occupy the whole width of the parent container. we set the height to500px.

REMEMBER!

Adding height to parent containers prevent white space between containers!

.container-images{
   height: 500px;
    width: 420px;
   
}


Also for fixing desorted images and svgs we set aspect ratio 3/2 and object fit contain:

.logo-header{
    aspect-ratio: 3/2;
    object-fit: contain;
}




-In our javascript code we wanted on click on the burger icon the menu conteiner to be displayed so we get the elements from the DOM in our javascript. then we atteched event listener on our hamburger icon and on click on the hamburger icon if menu container is displayed none as it is in our css then to be displayed too block. 
Also we get the other elements with ids like the about, service, and contact and we attached another event listener to the document itself so when we click on the document the event to target the about menu services and other element if the event doesnt target those elements then the menu to be hidden displayed none .

If the click event from the document doent target the desired element then the menu to be hidden.


const hamburgerIcon = document.getElementById("icon-hamburger")
const mobileMenu = document.getElementById("menu-mobile")
const about = document.getElementById("about");
const services = document.getElementById("services");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");


hamburgerIcon.addEventListener('click', ()=>{
    if(mobileMenu.style.display = "none"){
        mobileMenu.style.display = "block";
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== hamburgerIcon && event.target !== mobileMenu && event.target !== about  && event.target !== services  && event.target !== projects  && event.target !== contact) {
        mobileMenu.style.display = "none";
    }
});