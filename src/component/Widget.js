import React from 'react'
import './Widget.css'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Widget() {
    return (
        <div className='widget' >
            <div className="search">
         
            <SearchOutlinedIcon/>
            <input placeholder='Search Twitter' />
            </div>
            <div className="trend">
                <div className="trend__head">
                    <h2>Trends for you</h2>
                    <SettingsOutlinedIcon/>
                </div>
     
                <div className="trend1">
                    <div className="trend__left">
                  <small>Trending in Thailand</small>  
                    <p>#Redvelvet</p>
                  <small>80.8k Tweets</small>  
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>

                <div className="trend1">
                    <div className="trend__left">
                  <small>Trending in Thailand</small>  
                    <p>#IZ*ONE</p>
                  <small>75k Tweets</small>  
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>

                <div className="trend1">
                    <div className="trend__left">
                  <small>Trending in Thailand</small>  
                    <p>#Twice</p>
                  <small>70.2k Tweets</small>  
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>

                <div className="trend1">
                    <div className="trend__left">
                  <small>Trending in Thailand</small>  
                    <p>#itzy</p>
                  <small>40.7k Tweets</small>  
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>

                <div className="trend1">
                    <div className="trend__left">
                  <small>Trending in Thailand</small>  
                    <p>#OHMYGIRL</p>
                  <small>20.6k Tweets</small>  
                    </div>
                    <MoreHorizOutlinedIcon/>
                </div>
              

                <div className="trend__footer">
                    <p>Show more</p>
                </div>

            </div>
        </div>
    )
}

export default Widget
