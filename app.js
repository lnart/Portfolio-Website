const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controls'); //Parent container
const sectBtn = document.querySelectorAll('.control') //Actual Button
const allSections = document.querySelector('.main-content') // Body


//Buttton click active class
function PageTransitions(){
    //Loops through the toolbar
    for(let i = 0; i < sectBtn.length; i++){
        //listens for clickevent
        sectBtn[i].addEventListener('click', function() {
            //sets variable to element with active-btn selector
            let currentBtn = document.querySelectorAll('.active-btn')
            // replaces classname of variable with empty class
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            // adds class active-btn to the element the user clicked on 
            this.className += ' active-btn'
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) => {
        //sets variable to id of the clicked element
        const id = e.target.dataset.id;
        if(id){
            //remove active from all buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //adds class active to the clicked button 
            e.target.classList.add('active')
            
            //hides sections the user dont want to see
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            //selects element where user clicked on
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions()
