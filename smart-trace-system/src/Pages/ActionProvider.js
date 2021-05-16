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
                widget: "Insurance",
            }
        );
        this.updateChatbotState(insuranceMessage)
        
    };

    buy() {
        const buyItems = this.createChatBotMessage(
            "Cool, to buy and sell items via our system you gotta be registered with us first. If you interested in buying items from our store, just follow the link below:",
            {
                widget: "OnlineStore"
            }
        );
        this.updateChatbotState(buyItems)
    };

    sell() {
        const sellItems = this.createChatBotMessage(
            "Great, selling items via our portal is easy! Visit the admin page to get more information on how its done",
            {
                widget: "SmartTrace",
            }
        );
        this.updateChatbotState(sellItems)
    };

    report() {
        const reportMessage = this.createChatBotMessage(
            "To report any lost/stolen items check this information:",
            {
                widget: "Report",
            }
        );
        this.updateChatbotState(reportMessage)
    };

    shopping() {
        const shoppingCart = this.createChatBotMessage(
            "Here is your shopping cart",
            {
                widget: "Shopping",
            }
        );
        this.updateChatbotState(shoppingCart);
    };

    services() {
        const serviceS = this.createChatBotMessage(
            "Open it here",
            {
                widget: "Services",
            }
        );
        this.updateChatbotState(serviceS);
    };

    admin() {
        const administration = this.createChatBotMessage(
            "Great",
            {
                widget: "Admin",
            }
        );
        this.updateChatbotState(administration);
    };

    about() {
        const aboutUs = this.createChatBotMessage(
            "Nice",
            {
                widget: "AboutUs",
            }
        );
        this.updateChatbotState(aboutUs);
    };

    contacts() {
        const contactUs = this.createChatBotMessage(
            "Great, here",
            {
                widget: "Contacts",
            }
        );
        this.updateChatbotState(contactUs);
    };

    update() {
        const updates = this.createChatBotMessage(
            "Don't sweat it, here we go:",
            {
                widget: "Updates",
            }
        );
        this.updateChatbotState(updates);
    };

    informartion() {
        const informationMessage = this.createChatBotMessage("Smart Trace System is a ......")
        this.updateChatbotState(informationMessage)
    }

    register() {
        const registerMessage = this.createChatBotMessage("If you are looking forward to register your account, head over to the side panel to access the profile function and for registering your products head over to the admin function to get items registered :)")
        this.updateChatbotState(registerMessage)
    }

    remove() {
        const removeItems = this.createChatBotMessage("To delete products from the database you need to explore the admin page by accessing the navigation bar at the top left of the screen.")
        this.updateChatbotState(removeItems)
    }

    handleSmartTraceList = () => {
        const message = this.createChatBotMessage(
            "Great, check out the following :",
            {
                widget: "SmartTrace",
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
          widget: "Insurance",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleOnlineStoreList = () => {
        const message = this.createChatBotMessage(
            "Great!",
            {
                widget: "OnlineStore",
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