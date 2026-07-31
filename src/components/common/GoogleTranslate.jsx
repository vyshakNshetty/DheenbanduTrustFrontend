import { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Avoid re-initializing if this component remounts (e.g. React StrictMode,
    // route changes) while the widget is already set up.
    if (initialized.current) return;

    const existingScript = document.querySelector(
      'script[src*="translate.google.com/translate_a/element.js"]'
    );

    const initWidget = () => {
      console.log("[GoogleTranslate] initWidget called. google.translate available:", !!window.google?.translate?.TranslateElement);
      if (!window.google?.translate?.TranslateElement) {
        console.warn("[GoogleTranslate] Script loaded but TranslateElement not ready.");
        return;
      }
      // Guard against double-init if the element already has content.
      const container = document.getElementById("google_translate_element");
      console.log("[GoogleTranslate] container found:", !!container, "existing children:", container?.childElementCount);
      if (container && container.childElementCount > 0) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,kn,hi,ta,te",
          autoDisplay: false,
        },
        "google_translate_element"
      );
      initialized.current = true;
      console.log("[GoogleTranslate] TranslateElement constructed.");
    };

    // If Google's script is already on the page (e.g. loaded by a previous
    // mount), just init directly instead of injecting it again.
    if (window.google?.translate) {
      console.log("[GoogleTranslate] google.translate already present, initializing directly.");
      initWidget();
      return;
    }

    if (existingScript) {
      console.log("[GoogleTranslate] Script tag already present, waiting for callback.");
      window.googleTranslateElementInit = initWidget;
      return;
    }

    console.log("[GoogleTranslate] Injecting Google Translate script.");
    window.googleTranslateElementInit = initWidget;

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      console.error("[GoogleTranslate] Script FAILED to load — likely blocked by network, ad-blocker, or CSP.");
    };
    script.onload = () => {
      console.log("[GoogleTranslate] Script tag onload fired.");
    };
    document.body.appendChild(script);

    // Note: we deliberately do NOT remove the script or clear
    // googleTranslateElementInit on cleanup — Google Translate mutates the
    // DOM directly, and tearing things down on unmount is what usually
    // triggers the "Failed to execute 'removeChild' on 'Node'" crash in React.
  }, []);

  const changeLanguage = (lang) => {
    console.log(
      "[GoogleTranslate] changeLanguage clicked:",
      lang,
      "| google.translate ready:",
      !!window.google?.translate,
      "| combo exists now:",
      !!document.querySelector(".goog-te-combo")
    );

    const maxAttempts = 33; // ~10 seconds at 300ms
    let attempts = 0;

    const timer = setInterval(() => {
      attempts += 1;
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(timer);
      } else if (attempts >= maxAttempts) {
        clearInterval(timer);
        console.warn(
          "Google Translate dropdown not found — widget may have failed to load."
        );
      }
    }, 300);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "hi", label: "हिन्दी" },
    { code: "ta", label: "தமிழ்" },
    { code: "te", label: "తెలుగు" },
  ];

  return (
    <div>
      {/* Google Translate Widget — visually hidden but NOT display:none.
          The widget measures the container's layout to build its dropdown;
          display:none gives it zero size and it silently fails to render. */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      ></div>

      {/* Custom Buttons */}
      <div className="flex flex-wrap gap-2">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => changeLanguage(code)}
            className="px-3 py-1 rounded-full bg-gray-200 hover:bg-primary-600 hover:text-white"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoogleTranslate;