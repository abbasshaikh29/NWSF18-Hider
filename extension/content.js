(function () {
  "use strict";

  let keywords = [
    "adult",
    "explicit",
    "Modi",
    "modi",
    "Racists",
    "Racist",
    "bro",
    "NSFW",
  ];

  function hideTweets() {
    const tweets = document.querySelectorAll('article[data-testid="tweet"]');
    tweets.forEach((tweet) => {
      const tweetText = tweet.innerText.toLowerCase();
      if (
        keywords.some((keyword) => tweetText.includes(keyword.toLowerCase()))
      ) {
        tweet.innerHTML = "";
        const message = document.createElement("div");
        message.textContent = "Focus on your goals";
        message.style.fontSize = "16px";
        message.style.color = "#ff0000";
        message.style.fontWeight = "bold";
        tweet.appendChild(message);
      }
    });
  }

  function addNewKeyword() {
    const newKeyword = prompt(
      "Enter a new keyword to filter (or leave empty to cancel):"
    );
    if (newKeyword && newKeyword.trim()) {
      keywords.push(newKeyword.trim().toLowerCase());
      alert(`Keyword "${newKeyword}" added successfully!`);
      hideTweets();
    }
  }

  function createAddKeywordButton() {
    const button = document.createElement("button");
    button.textContent = "Add New Keyword";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", addNewKeyword);
    document.body.appendChild(button);
  }

  hideTweets();
  createAddKeywordButton();

  const observer = new MutationObserver(() => {
    hideTweets();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
