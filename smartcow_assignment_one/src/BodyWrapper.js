import { useState } from 'react';
import './BodyWrapper.scss';
import { BroadCastContext } from './Contexts/BroadCastContext';
import LeftNav from './LeftNav';
import RightSection from './RightSection';

const BodyWrapper = () => {

    //A state varible as a broadcast for the Toggle of the Left Nav
     {/*Here, I have used Context for Broadcasting the toggle variable. Right Section is the child which
    will be using the context and based on the value, Left Nav will be made collapsible or Visible*/}
    const [toggleLeftNav, setToggleLeftNav] = useState(false);
    return (
        <BroadCastContext.Provider value={{toggleLeftNav, setToggleLeftNav}}>
            <div className="body-wrapper">
                {toggleLeftNav &&  <LeftNav></LeftNav>}
                <RightSection></RightSection>
            </div>
        </BroadCastContext.Provider> 
    );
}
 
export default BodyWrapper;