import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return( 
    <div >

        <div>
          <img src="https://blog.triad.sk/wp-content/uploads/2018/02/instagram.png" />
        </div>
        <div className={s.discriptionBlock}>
          <img src="https://1.bp.blogspot.com/-MFhk5fNFnKQ/XPEKYf6KkvI/AAAAAAAAAd0/Qvjz_Hk4O80lsmq47ozvI9yZ5yaaC1ykgCLcBGAs/s640/Reasons%2BWhy%2BKittens%2BAre%2BAggressive1.png" width="100"/>
            ava + discription
        </div>

       </div>
    );
}

export default ProfileInfo;