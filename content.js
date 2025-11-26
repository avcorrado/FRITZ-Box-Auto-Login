(function () {
  let observer;

  function tryLogin() {
    const loginError = document.querySelector("#uiLoginError");
    if (loginError && !loginError.classList.contains("hide")) {
      console.log("[AutoLogin] Login failed. Stopping retries.");
      observer && observer.disconnect();
      return;
    }

    const username = document.querySelector("#uiViewUser");
    const password = document.querySelector("#uiPassInput");
    const loginBtn = document.querySelector("#submitLoginBtn");

    if (username && password && loginBtn) {
      if (username.value.trim() !== "" && password.value.trim() !== "") {
        console.log("[AutoLogin] Username & password filled, clicking login...");
        loginBtn.click();
      }
    }
  }

  const interval = setInterval(() => {
    tryLogin();
    if (document.querySelector("#submitLoginBtn")) clearInterval(interval);
  }, 50);

  observer = new MutationObserver(tryLogin);
  observer.observe(document.body, { childList: true, subtree: true });
})();