// Learn behind the seen of React

const mainContainer = document.querySelector('#root')
const reactElement = {
    type :'a' ,//type of element like ancer tag or div or p
    props : {
        href :'https://google.com' ,
        target :'_blank'
    } ,
    Children : 'Click me to visit google'
}

function customrender(reactElement , Container) {
   /*
    const domElement =document .createElement(reactElement.type)
    domElement .innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    Container.appendChild(domElement)
    */

// Uper ke code me problem ye hai ki hume har bar setAttribute krna per raha so we use Loop
   const domElement = document.createElement(reactElement.type)
   console.log(domElement.innerHTML = reactElement.Children);
   
   for (const props in reactElement.props) {
     // we can also ignore this code line
     if( props === "Children") continue; //If props key becomes children then continue

     domElement.setAttribute(props ,reactElement.props[props]) //pass setValue and key value
   }

   Container .appendChild(domElement)

}

customrender (reactElement ,mainContainer)
