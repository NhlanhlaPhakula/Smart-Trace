class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    }

    enquiry() {
        const enquiries = this.createChatBotMessage(
            "Use the Enquiry form above to direct your queries to the relevant party");
        this.updateChatbotState(enquiries)
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
            "Buying and selling items via our system you gotta be registered with us first. If you interested in buying items from our store, just follow the link below:",
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
            "To report any lost/stolen items fill out the form and send it:",
            {
                widget: "Report",
            }
        );
        this.updateChatbotState(reportMessage)
    };

    stolen() {
        const stolenReport = this.createChatBotMessage(
            "Stolen item properties",
            {
                widget: "Stolen",
            }
        );
        this.updateChatbotState(stolenReport);
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

    track() {
        const trace = this.createChatBotMessage(
            "Nice, here's what we got for you:",
            {
                widget: "Tracking",
            }
        );
        this.updateChatbotState(trace);
    };

    profile() {
        const profile = this.createChatBotMessage(
            "Here is your profile",
            {
                widget: "Profile",
            }
        );
        this.updateChatbotState(profile);
    };
    
    secure() {
        const security = this.createChatBotMessage(
            "Great, here you go:",
            {
                widget: "Security",
            }
        );
        this.updateChatbotState(security);
    };

    notifications() {
        const messages = this.createChatBotMessage(
            "Here are your latest updates",
            {
                widget: "Notifications",
            }
        );
        this.updateChatbotState(messages);
    };

    insuranceFinder() {
        const insuranceFind = this.createChatBotMessage(
            "Here:",
            {
                widget: "Insurance-Finder",
            }
        );
        this.updateChatbotState(insuranceFind);
    };

    backgroundCheck() {
        const backgroundFind = this.createChatBotMessage(
            "This is what i've found",
            {
                widget: "Background",
            }
        );
        this.updateChatbotState(backgroundFind);
    };

    checker() {
        const Checker = this.createChatBotMessage(
            "here:",
            {
                widget: "Checker",
            }
        );
        this.updateChatbotState(Checker);
    };

    information() {
        const informationMessage = this.createChatBotMessage("Smart Trace System is a ......")
        this.updateChatbotState(informationMessage)
    }

    nothing() {
        const nothingMessage = this.createChatBotMessage("Could'nt get that, try again please")
        this.updateChatbotState(nothingMessage)
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

    handleBackground = () => {
        const message = this.createChatBotMessage(
            "Sure, here are various options:",
            {
                widget: "Background",
            }
        );
        this.updateChatbotState(message);
    };

    handleAnalytics = () => {
        const message = this.createChatBotMessage(
            "This is the intelligence derived from all stolen/lost possessions:",
            {
                widget: "Analytics",
            }
        );
        this.updateChatbotState(message);
    };

    handleInsuranceFinder = () => {
        const message = this.createChatBotMessage(
            "Sure?!",
            {
                widget: "Insurance-Finder",
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