import React, {Component} from "react";
import Chatbot from "react-simple-chatbot";

class SimpleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputUser : [],
        }
    }

    render() {
        return (
            
                <Chatbot 
                userDelay='600'
                botDelay='500'
                cache
                headerTitle='Chat with Chatty bot'
                enableMobileAutoFocus
                steps={[
                    {
                        id:'intro', 
                        message:'Hi I am Chatty bot . How can I help you ? ', 
                        trigger:'intro-user1',
                       },
                       {
                        id: 'intro-user1',
                        user: true,
                        trigger: 'loop',
                       },
                       {
                           id: 'loop',
                           message: '{previousValue}',
                           trigger: 'intro-user1'
                       },
                ]}
                />
            
        );
    }
}

export default SimpleForm;