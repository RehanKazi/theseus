chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "USER_LIST") {
      const select = document.getElementById("userSelect");
      msg.users.forEach(user => {
        const opt = document.createElement("option");
        opt.value = user;
        opt.innerText = user;
        select.appendChild(opt);
      });
    }
  });
  
  document.getElementById("speakBtn").addEventListener("click", () => {
    const user = document.getElementById("userSelect").value;
    const msg = document.getElementById("messageInput").value;
    fetch("http://localhost:5000/speak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, msg })
    });
  });
  