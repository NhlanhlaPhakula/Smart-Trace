class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("insurance")){
          this.actionProvider.insurance()
      }else
      if (lowerCaseMessage.includes("report")){
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("smart trace system")){
          this.actionProvider.report()
      }
    }
  }
  
  export default MessageParser