class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }

    insurance() {
        const insuranceMessage = this.createChatBotMessage(
            "Try these:",
            {
                widget: "InsuranceLinks",
            }
        );
        this.updateChatbotState(insuranceMessage)
        
    };

    report() {
        const reportMessage = this.createChatBotMessage(
            "To report any lost/stolen items check this information:",
            {
                widget: "Report",
            }
        );
        this.updateChatbotState(reportMessage)
    }

    informartion() {
        const informationMessage = this.createChatBotMessage("Smart Trace System is a ......")
        this.updateChatbotState(informationMessage)
    }

    register() {
        const registerMessage = this.createChatBotMessage("If you are looking forward to register your account, head over to the side panel to access the profile function and for registering your products head over to the admin function to get items registered :)")
        this.updateChatbotState(registerMessage)
    }

    handleSmartTraceList = () => {
        const message = this.createChatBotMessage(
            "Great, check out the following :",
            {
                widget: "SmartTraceLinks",
            }
        );
        this.updateChatbotState(message);
    };

    handleReportList = () => {
        const message = this.createChatBotMessage(
            "Great, check out how below:",
            {
                widget: "Report",
            }
        );
        this.updateChatbotState(message);
    };
  
    handleInsuranceList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, here is a list of different insurance companies/plans to consider from:",
        {
          widget: "InsuranceLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleOnlineStoreList = () => {
        const message = this.createChatBotMessage(
            "Great!",
            {
                widget: "OnlineStoreLinks",
            }
        );
        this.updateChatbotState(message);
    };

    handleEnquireForm = () => {
        const message = this.createChatBotMessage(
            "Ok cool, you can go on:",
            {
                widget: "EnquiryForm",
            }
        );
        this.updateChatbotState(message);
    };

  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;