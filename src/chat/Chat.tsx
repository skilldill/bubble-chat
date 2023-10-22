import { useState } from 'react';
import styles from './Chat.module.css';
import { Message } from './Message';


export const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleInputMessage = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setCurrentMessage(value);
    }

    const handleSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();

        if (currentMessage.length > 0) {
            setMessages((prevMessages) => [...prevMessages, currentMessage]);
            setCurrentMessage('');
        }
    }

    const handleChangeBackground = (event: React.FormEvent<HTMLInputElement>) => {
        document.body.style.backgroundColor = event.currentTarget.value;
    }

    return (
        <div className={styles.chat}>
            <div className={styles.messagesContainer}>
                {messages.map((message, i) => 
                    <Message 
                        key={i} 
                        value={message} 
                        hidable 
                        hideTime={6} 
                    />
                )}
                {currentMessage.length > 0 
                    ? <Message value={currentMessage} /> 
                    : <div style={{ height: 46 }} />
                }
            </div>

            <div className={styles.chatControls}>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" value={currentMessage} onInput={handleInputMessage}/>
                </form>
                <input type="color" onChange={handleChangeBackground} />
            </div>
        </div>
    )
}
