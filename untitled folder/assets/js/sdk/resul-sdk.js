document.addEventListener("DOMContentLoaded", () => {
    console.log("Resul  :: ",window.location.pathname)
    let ele = document.querySelectorAll("script[src$=sdk]");
    if (ele.length) {
      ele.forEach((item) => {
        item.remove();
      });
    }
    let script = document.createElement("script");
    script.setAttribute("defer", "defer");
    script.setAttribute("fcm_service_path", "firebase-messaging-sw.js");
    script.src =
      "https://sdk.nxgusa.io/handlers/a68031bf194847528d7ac75484ab1780.sdk" ;
 
    document.head.appendChild(script);
  });
 