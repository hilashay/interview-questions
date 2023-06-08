// Q1: Explain what a callback function is and provide a simple example

// קולבק פנקשין זו פונקציה שמקבלת פוקנציה אחרת כארגומנט ויכולה לקרוא לפונקציה זו מגוף הפונקציה שלה

const callBackFunc = (callBack) => {
  const x = callBack();
  return x;
};

const sayHello = (name = "Register") => {
  console.log(`Hello ${name}`);
};

console.log(callBackFunc(sayHello));
