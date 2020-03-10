import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {


   let state = props.dialogsPage; 

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );  
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

      
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


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