import React from 'react'
import './SidebarFooter.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function SidebarFooter() {
    return (
        <div className='sfooter' >
          <div className="dfooter">
         <img src='https://i.pinimg.com/originals/d7/08/4f/d7084f4f5f75fd8c59976cb9e1d879fb.jpg'  alt=''/>
              <div >
              <h4>renebebe</h4>
              <p>@smirene</p>

              </div>
          </div>
          <ArrowDropDownIcon fontSize={'large'} />
        </div>
    )
}

export default SidebarFooter
