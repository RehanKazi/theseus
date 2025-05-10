// Scrape users in voice chat
const getVCUsers = () => {
    const userElements = document.querySelectorAll('[aria-label*="Connected"] [role="button"] > div > div');
    const users = [];
    userElements.forEach(el => {
      const name = el.textContent;
      if (name) users.push(name);
    });
    chrome.runtime.sendMessage({ type: "USER_LIST", users });
  };
  getVCUsers();
  