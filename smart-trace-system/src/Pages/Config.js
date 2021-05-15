  import React, { Component } from 'react';
  import { createChatBotMessage } from "react-chatbot-kit";

  import LearningOptions from './LearningOptions';
  import LinkList from './LinkList';
  import EnquiryForm from './EnquiryForm';
  import Report from './Report';


  
  const config = {
      botName : "Smart Trace Bot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What can i do for you?", {
        widget: "learningOptions",
    }),
    ],

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props}/>,
        },
        {
            widgetName: "Insurance",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "OutSurance Portable Possessions Insurance",
                        url:
                        "https://www.outsurance.co.za/insurance/",
                        id: 1,
                    },
                    {
                        text: "King Price Insurance Electronic Equipment Insurance",
                        url: 
                        "https://www.kingprice.co.za/business-insurance/electronic-equipment/",
                        id: 2,
                    },
                    {
                        text: "Momentum Electronic Equipment Insurance",
                        url: "https://www.momentumconsult.co.za/wps/portal/momV1/business/products/commercial-short-term-insurance/electronic-equipment",
                        id: 3,
                    },
                    {
                        text: "Genric Insurance",
                        url: "https://www.genric.co.za/gadget-insurance/",
                        id: 4,
                    },
                    {
                        text: "Loom Insurance",
                        url: "https://www.loom.co.za/?referral_source=AdwordsNew&gclid=CjwKCAjw1uiEBhBzEiwAO9B_HbEsSXm7t1hTepui97_Sho5c4Qjjk3e-_hNIlSAdhmNnj0xb3G6q6RoCDwoQAvD_BwE",
                        id: 5,
                    },
                    {
                        text: "hippo.co.za",
                        url: "https://www.hippo.co.za/cellphone-insurance-quote/",
                        id: 6,
                    },
                    {
                        text: "Vodacom device-insurance",
                        url: "https://www.vodacom.co.za/vodacom/services/insurance/device-insurance",
                        id: 7,
                    },
                    {
                        text: "1st for Women",
                        url: "https://www.firstforwomen.co.za/products/portable-possessions-insurance/cellphone-insurance/",
                        id: 8,
                    },
                    {
                        text: "MTN Cell Phone Insurance",
                        url: "https://www.mtn.co.za/Pages/Device-Insurance.aspx",
                        id: 9,
                    },
                  
                ],
            },
        },
        {
            widgetName: "SmartTrace",
            widgetFunc: (props) => <LinkList {...props}/>,
            props: {
                options: [
                    {
                        text: "Introduction to Smart Trace System",
                        url: "/trackNtrace",
                        id: 1,
                    },
                    {
                        text: "How it works",
                        url: "/trackNtrace",
                        id: 2,
                    },
                    {
                        text: "How to register",
                        url: "/trackNtrace",
                        id: 3,
                    },

                ],
            },
        },
        {
            widgetName: "OnlineStore",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "How our online store operates",
                        url: "",
                        id: 1,
                    },
                    {
                        text: "Visit our Online Store",
                        url: "/store",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "Report",
            widgetFunc: (props) => <Report />,
        },
        {
            widgetName: "Shopping",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "To access access your shopping cart click here",
                        url: "/cart",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Admin",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Navigate to the admin side through this widget, go ahead and click",
                        url: "/admin",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "AboutUs",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Wanna know more about us?",
                        url: "/aboutUs",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Services",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "To access our services you have to visit our services page to get more info",
                        url: "/services",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Contacts",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "If you want to contact our team press here!",
                        url: "/",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "EnquiryForm",
            widgetFunc: (props) => <EnquiryForm />,
        },
    ],
    
  };
  
  export default config;