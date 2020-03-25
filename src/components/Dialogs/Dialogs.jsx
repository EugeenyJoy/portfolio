import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {


   let state = props.dialogsPage; 

    let dialogsElements = state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/> );  
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

   

      
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    { dialogsElements }

                </div>
                <div className={s.messages}>
                    <div>{ messagesElements } </div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                         value={newMessageBody} placeholder="Enter you message" ></textarea>
                        <div>
                            <button onClick={onSendMessageClick} >Send</button>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default Dialogs;