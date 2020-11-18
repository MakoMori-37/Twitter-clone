import React from "react";
import "./Feed.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PublicIcon from "@material-ui/icons/Public";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feedhome">
        <h2>Home</h2>
        <HelpOutlineIcon />
      </div>
      <div className="feed__inpu">
        <div className="display">
          <img
            src="https://i.pinimg.com/originals/d7/08/4f/d7084f4f5f75fd8c59976cb9e1d879fb.jpg"
            alt=""
          />
        </div>
        <div className="finput">
          <input
            className="inputfeed"
            type="text"
            placeholder="What happenning?"
          />
          <div className="privacy">
            <PublicIcon />
            <small>Everyone can reply</small>
          </div>
        <div className="under"></div>
          <div className="action">
            <div className="action__icon">
              <ImageOutlinedIcon />
              <GifOutlinedIcon />
              <EqualizerOutlinedIcon />
              <SentimentSatisfiedOutlinedIcon />
              <EventOutlinedIcon />
            </div>
            <button>Tweet</button>
          </div>
        </div>
      </div>

      <Post
      disim='https://www.brighttv.co.th/wp-content/uploads/2020/10/joy-redvelvet-hateful-comments%E0%B8%9B%E0%B8%81.png'
      disname='Park joy'
      disacc='@imyourjoy'
      capt='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et reiciendis facilis dolor illo voluptate, a dolores esse consequatur provident autem.'
      postim='https://pbs.twimg.com/media/EMMh80CUcAAFje0?format=jpg&name=large'     
      />
      <Post
      disim='https://www.allkpop.com/upload/2020/02/content/211211/1582305073-7bc2c6b932507b40907285ba9cd501e6.jpg'
      disname='SEULGI'
      disacc='@kangseulgi'
      capt='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam dolor quidem distinctio cupiditate fugit ad enim quisquam sapiente, fugiat minus non, voluptatem to tam beatae voluptas, quibusdam sint iste obcaecati!'
      postim='https://dbkpop.com/wp-content/uploads/2019/12/Red_Velvet_Re_Ve_Festival_Finale_Studio_Seulgi_3.jpg'
      />

      <Post
      disim='https://img.koreatimes.co.kr/upload/newsV2/images/201912/3ce8e106b3ea4e2da90c3ea812a2ae1d.jpg/dims/resize/740/optimize'
      disname='Wendy'
      disacc='@today_is_wendy'
      capt='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      postim='https://lh3.googleusercontent.com/c_5Uptfy-ita6mH8s3OmKWIjDlhx14vyp8f6NFKAVFxoAU1x-i6vgVPndsjEGHY1AXBtPPcJ5rMICcsWd8wNKLzDlszSiXTASg=w1600-rj'
      />




    </div>
  );
}

export default Feed;
