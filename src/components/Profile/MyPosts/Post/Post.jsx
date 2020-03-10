import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return( 


       <div className={s.item}>
          <img src="https://mtdata.ru/u8/photo0CB7/20245370226-0/original.jpg" />
             {props.message}
             <div>
               <span>like</span> {props.likesCount}
             </div>
      </div>

    );
}

export default Post;