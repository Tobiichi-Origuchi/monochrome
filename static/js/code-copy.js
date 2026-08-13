(() => {
  "use strict";

  const root = document.documentElement;
  const copyLabel = root.dataset.copyLabel || "Copy";
  const copiedLabel = root.dataset.copiedLabel || "Copied";
  const failedLabel = root.dataset.copyFailedLabel || "Copy failed";

  const fallbackCopy = (text) => {
    const source = document.createElement("textarea");
    source.value = text;
    source.className = "copy-source";
    source.setAttribute("readonly", "");
    document.body.append(source);
    source.select();
    const copied = document.execCommand("copy");
    source.remove();

    if (!copied) {
      throw new Error("The browser rejected the copy command.");
    }
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    fallbackCopy(text);
  };

  document.querySelectorAll(".prose pre").forEach((pre) => {
    const code = pre.querySelector(":scope > code");

    if (!code) {
      return;
    }

    let host = pre.closest(".code-block");

    if (!host) {
      host = document.createElement("div");
      host.className = "code-copy-shell";
      pre.before(host);
      host.append(pre);

      if (!code.dataset.lang) {
        host.classList.add("code-copy-host--plain");
      }
    }

    host.classList.add("code-copy-host");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy-button";
    button.textContent = copyLabel;
    button.setAttribute("aria-label", copyLabel);
    button.setAttribute("aria-live", "polite");

    button.addEventListener("click", async () => {
      try {
        await copyText(code.textContent);
        button.textContent = copiedLabel;
        button.setAttribute("aria-label", copiedLabel);
      } catch (_error) {
        button.textContent = failedLabel;
        button.setAttribute("aria-label", failedLabel);
      }

      window.setTimeout(() => {
        button.textContent = copyLabel;
        button.setAttribute("aria-label", copyLabel);
      }, 1800);
    });

    host.append(button);
  });
})();
