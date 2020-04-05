import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return( 
    <div >

        <div>
          <img src="https://blog.triad.sk/wp-content/uploads/2018/02/instagram.png" />
        </div>
        <div className={s.discriptionBlock}>
          <img src={props.profile.photos.large} alt=""/>
          <img src="https://1.bp.blogspot.com/-MFhk5fNFnKQ/XPEKYf6KkvI/AAAAAAAAAd0/Qvjz_Hk4O80lsmq47ozvI9yZ5yaaC1ykgCLcBGAs/s640/Reasons%2BWhy%2BKittens%2BAre%2BAggressive1.png" width="500"/>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>

       </div>
    );
}

export default ProfileInfo;