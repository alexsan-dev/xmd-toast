<div align="center">
  <h1>XMATERIAL-DESIGN TOAST 🍞</h1>
  <p>Throw little toast on bottom of the page with fixed text and action buttons</p>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <img src="https://badge.fury.io/js/xmd-toast.svg">
</div>

### Install ⚙️
``` 
npm i xmd-toast
```

### Using 💻
```javascript
import toast from "xmd-toast";

// HERE IS THE MAGIC!
toast({ text:"Helo World" })

// BETTER TOAST
toast({
  text:"Alert text",
  actionText: "Ok",
  fixed:false,
  time:5000,
  action:() => console.log("Message from action"),
  onHide:() => console.log("Hide toast"),
})

// TRY SHOW TOAST AFTER TOAST
toast({
  text:"Show toast",
  actionText: "Throw",
  action:() => {
    toast({text: "New toast"})
  }
})
```

### TypeScript Compatible 😀
#### Options:

| Property   | Type     | Default   | Description                                |
| ---------- | -------- | --------- | ------------------------------------------ |
| Text       | String   | "Alert"   | The main text of the toast                 | 
| actionText | String   | "Confirm" | The text of the action button              | 
| onHide     | Function | undefined | Call when the toast left the screen        | 
| action     | Function | undefined | Call on action button click                | 
| fixed      | Boolean  | false     | True: Toast never hide / False: Toast Hide | 
| time       | Number   | 5000      | The lifetime of toast                      | 