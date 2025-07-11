import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const ReactPopUp = () => (
 <div className="popup-container">
   <Popup
     trigger={<button id="logout-btn" className={isLight ? "logout-light" : "logout-dark"} >Logout</button>}
   >
     <div>
       <p className={`pop-txt ${isLight ? "pop-txt-light" : "pop-txt-dark"}`}>Are you sure you want to logout ?</p>
       <button className={`cancel-btn ${isLight ? "cancel-light" : "cancel-dark"}`}>Cancel</button>
       <buton className={`logout-pop ${isLight ? "logout-pop-light" : "logout-pop-dark"}`}>Logout</buton>
     </div>
   </Popup>
 </div>
)
export default ReactPopUp


