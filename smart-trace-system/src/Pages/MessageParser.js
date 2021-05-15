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
      //reporting stolen items
      if (lowerCaseMessage.includes("report")){
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("stolen")){
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("lost")) {
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("theft")) {
          this.actionProvider.report()
      }else
      if (lowerCaseMessage.includes("smart trace system")){
          this.actionProvider.information()
      }else
      if (lowerCaseMessage.includes("register")){
          this.actionProvider.register()
      }else
      if (lowerCaseMessage.includes("sell")) {
          this.actionProvider.sell()
      }else
      if (lowerCaseMessage.includes("buy")) {
          this.actionProvider.buy()
      }else
      //shopping cart 
      if (lowerCaseMessage.includes("shopping")) {
          this.actionProvider.shopping()
      }else
      if (lowerCaseMessage.includes("cart")) {
        this.actionProvider.shopping()
      }else
      //contacts
      if (lowerCaseMessage.includes("contact")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("message")){
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("email")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("text")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("chat")) {
          this.actionProvider.contacts()
      }else 
      if (lowerCaseMessage.includes("get hold")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("communicate")) {
          this.actionProvider.contacts()
      }else 
      if (lowerCaseMessage.includes("talk")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("call")) {
          this.actionProvider.contacts()
      }else
      if (lowerCaseMessage.includes("service")) {
          this.actionProvider.services()
      }else 
      //administration page
      if (lowerCaseMessage.includes("admin")) {
          this.actionProvider.admin()
      }else
      //about us page
      if (lowerCaseMessage.includes("about")) {
          this.actionProvider.about()
      }
    }
  }
  
  export default MessageParser