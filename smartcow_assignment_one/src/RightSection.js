import { useContext,useEffect,useState } from 'react';
import { BroadCastContext } from './Contexts/BroadCastContext';
import './RightSection.scss';

{/*This is the right section component of the App. This components is divided into small functional 
components.*/}


{/*This method genertes a random color and pass that to the 'color' state.*/}
const _generateRandomColor = () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return ("#"+randomColor);
}

{/*This functional component is used for rendering the Input field on the UI.*/}
const Input = ({inputChangeDetector})=>{
    return(
        <input type="text" onChange={(e)=>inputChangeDetector(e)}></input>
    )
}

{/*This functional component renders the Cards based on the length. 
I am using inline styling for generating random colors for every third Card.
I have used 'Object Destructuring' for receiving the Props here.*/}
const Card = ({inputString, color})=>{ 
    console.log(color);
    return  inputString.map((data,i)=>(
        <div className="box" key={i} style={(i+1)%3===0 ? {backgroundColor: color[i]}: {} }><p>{data}</p></div>
    ))
}

{/*This functional Component is acring as a driver Component for this RightSection. It renders the Input Component and the Card Component defined above.*/}
const RightSection = () => {
    const [color,setColor] = useState([]);
    const navBtn = [
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'  fill='white'  viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z'/%3E%3Cpath d='M219.2,116.8l-22.56,22.56L313.44,256L196.8,372.8l22.56,22.56l127.84-128c6.204-6.241,6.204-16.319,0-22.56L219.2,116.8 z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A",
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'  fill='white'  viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z'/%3E%3Cpath d='M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667 c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582 C322.083,156.087,322.083,142.58,313.752,134.248z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A"
    ]

    const {toggleLeftNav,setToggleLeftNav} = useContext(BroadCastContext);
    const [inputString, setInputString] = useState([]);

    {/*This function is binded to the Input component as Prop, which will take the target's value and save that in the 'inputString' state.*/}
    const inputChangeDetector = (e)=>{
         let string = e.target.value;
         setInputString(string.split(''));
         color.push(_generateRandomColor());
         setColor(color);    
    }

    return ( 
        <div className="right-section-wrapper">
            <img onClick={()=> setToggleLeftNav(!toggleLeftNav)} alt="NA" src={toggleLeftNav===true ? navBtn[1]: navBtn[0]}></img>
            <div className="input-box-wrapper">
                {/*Functional Component defined above for this*/}
                <Input inputChangeDetector={inputChangeDetector}></Input>
                <div className="box-wrapper">
                    {/*Functional Component defined above for this*/}
                    <Card inputString={inputString} color={color} ></Card>
                </div>
            </div>
        </div>
     );
}
 
export default RightSection;
