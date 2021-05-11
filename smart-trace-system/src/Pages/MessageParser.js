class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      //greeting functions
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("hey")) {
          this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("hi")) {
          this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("hy")) {
          this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("morning")) {
          this.actionProvider.greet()
      }else
      if (lowerCaseMessage.includes("afternoon")) {
            this.actionProvider.greet()
      }else 
      if (lowerCaseMessage.includes("evening")) {
          this.actionProvider.greet()
      }
      //insurance functions 
      if (lowerCaseMessage.includes("insurance")){
          this.actionProvider.insurance()
      }else
      if (lowerCaseMessage.includes("insure")) {
          this.actionProvider.insurance()
      }else
      if (lowerCaseMessage.includes("report")){
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("smart trace system")){
          this.actionProvider.information()
      }else
      if (lowerCaseMessage.includes("register")){
          this.actionProvider.register()
      }
    }
  }
  
  export default MessageParser