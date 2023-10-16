function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  (function() {
    console.log("This is an IIFE");
  })();

  function outer(greeting) {
    const msg = "It's a fine day to learn";
  
    return function inner(name, lang = "Python") {
      return function() {
        return `${greeting}, ${name}! ${msg} ${lang}`;
      };
    };
  }
  
  const wrapAdjective = function(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  console.log(saturdayFun()); 
  console.log(mondayWork());   
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  