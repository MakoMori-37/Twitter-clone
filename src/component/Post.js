import React from 'react'
import './Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';



function Post({disim, disname, disacc, capt, postim}) {
    return (
        <div className='post__con' >
            <div className="post__left">
                <img src={disim} alt='' />
            </div>
            <div className="post__right">
                <div className="post__h">
                    <div className="disname">

                <strong>{disname}</strong>
                <small>{disacc} · 2h</small>
                    </div>
                <MoreHorizIcon/>
                </div>
                <div className="cap">
                 <p>{capt}</p>
                </div>
                <div className="post_im">
                <img src={postim} alt='' />
                </div>
            <div className="post__icon">
                <ModeCommentOutlinedIcon/>
            <RepeatOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <GetAppOutlinedIcon/>
            </div>
            
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Post
