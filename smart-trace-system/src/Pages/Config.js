  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import { createChatBotMessage } from "react-chatbot-kit";

  import LearningOptions from './LearningOptions';
  import LinkList from './LinkList';

  class Review extends Component {
      constructor(props) {
          super(props);

          this.state = {
              name: '',
              gender: '',
              age: '',
          };
      }

      componentWillMount() {
          const { steps } = this.props;
          const { name, gender, age } = steps;
      }

      render() {
          const { name, gender, age } = this.state;
          return (
              <div style={{ width: '100%' }}>
                  <h3>Summary</h3>
                  <table>
                      <tbody>
                          <tr>
                              <td>Name</td>
                              <td>{name.value}</td>
                          </tr>
                          <tr>
                              <td>Gender</td>
                              <td>{gender.value}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          );
      }
  }

  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
  const config = {
      botName : "Smart Trace Bot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
        widget: "learningOptions",
    }),
    ],

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props}/>,
        },
        {
            widgetName: "InsuranceLinks",
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
            widgetName: "SmartTraceLinks",
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
            widgetName: "OnlineStoreLinks",
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
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "How to report missing items?",
                        url: "/report",
                        id: 1,
                    },
                    {
                        text: "Report Now!",
                        url: "/report",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "EnquiryForm",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'What is your name?',
                        trigger: 2,
                    },
                    {
                        id: 2,
                        user: true,
                        trigger: 3,
                    },
                    {
                        id: 3,
                        text: 'Hi {previousValue}! what is your genger?',
                        trigger: 4,
                    },
                    {
                        id: 4,
                        options: [
                            {value: 'male', label: 'Male', trigger: 5},
                            {value: 'female', label: 'Female', trigger: 5},
                        ],
                    },
                    {
                        id: 5,
                        text: 'How old are you?',
                        trigger: 6,
                    },
                    {
                        id: 6,
                        user: true,
                        trigger: 7,
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'value must be a number';
                            }else if (value < 0) {
                                return 'value must be positive';
                            }else if (value > 120) {
                                return `${value}? Come on`;
                            }

                            return true;
                        },
                    },
                    
                ],
            },
        },
    ],
    
  };
  
  export default config;