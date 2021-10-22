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
                        url: "/trackNtrace",
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
            widgetName: "Stolen",
            widgetFunc: (props) => <LinkList {...props}/>,
            props: {
                options: [
                    {
                        text: "Block stolen item",
                        url: "/",
                        id: 1,
                    },
                    {
                        text: "Unblock stolen item",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "Track stolen item",
                        url: "/",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "Shopping",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Shopping cart",
                        url: "/cart",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Notifications",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Latest updates",
                        url: "/myNotifications",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Checker",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Background checker",
                        url: "/serialSearch",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Updates",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Update my products",
                        url: "/adminProducts",
                        id: 1,
                    },
                    {
                        text: "Update my user account",
                        url: "/profile",
                        id: 2,
                    },
                    {
                        text: "Read your latest updates",
                        url: "/myNotifications",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "Tracking",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Info on our tracking",
                        url: "/trackNtrace",
                        id: 1,
                    },
                    {
                        text: "Track stolen goods",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "Register your items for track and trace",
                        url: "/admin",
                        id: 3,
                    },
                    {
                        text: "Search by Category",
                        url: "/OnlineStore",
                        id: 4,
                    },
                    {
                        text: "Search by user input",
                        url: "/OnlineStore"
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
                        text: "Admin handler",
                        url: "/admin",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "Security",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Information on securing electronic devices",
                        url: "/trackNtrace",
                        id: 1,
                    },
                    {
                        text: "Secure electronic device now",
                        url: "/admin",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "Profile",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "My Profile",
                        url: "/userProfile",
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
                        text: "Our Services",
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
                        text: "Contact Us",
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
        {
            widgetName: "Background",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Serial Number Search",
                        url: "/serialSearch",
                        id: 1,
                    },
                    {
                        text: "Scan Image",
                        url: "/scanner",
                        id: 2,
                    },
                    {
                        text: "Search by Image",
                        url: "/imagetotext",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "Analytics",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Here is what i found:",
                        url: "/intelligence",
                        id: 1,
                    },
                ]
            }
        },
        {
            widgetName: "Insurance-Finder",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Find your perfect insurance now",
                        url: "/insuranceQ",
                        id: 1,
                    },
                ]
            }
        }
    ],
    
  };
  
  export default config;