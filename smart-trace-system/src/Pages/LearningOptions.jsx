import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "InsuranceLinks",
      handler: props.actionProvider.handleInsuranceList,
      id: 1,
    },
    { text: "SmartTraceLinks", 
      handler: props.actionProvider.handleSmartTraceList, 
      id: 2 ,
    },
    { text: "OnlineStoreLinks",
      handler: props.actionProvider.handleOnlineStoreList,
      id: 3,
    },
    { text: "EnquiryForm", 
      handler: props.actionProvider.handleEnquireForm, 
      id: 4,
    },
    { text: "Report", 
      handler: props.actionProvider.handleReportList, 
      id: 5 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;