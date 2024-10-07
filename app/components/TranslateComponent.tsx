"use client";
import { MutableRefObject, useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef: MutableRefObject<any> = useRef(null);
  const isInitialized = useRef(false); // Track initialization

  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (
        (window as any).google &&
        (window as any).google.translate &&
        !isInitialized.current
      ) {
        isInitialized.current = true; // Set to true after initialization
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "bn,ar,en,de,el,es,fi,fil,fr,hi,hu,id,it,ja,ko,nl,pl,pt,ro,ru,sv,ta,tr,vi,zh-CN,zh-TW",
            layout: (window as any).google.translate.TranslateElement
              .InlineLayout.VERTICAL,
          },
          googleTranslateRef.current
        );
      }
    };

    if (!(window as any).google) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      document.body.appendChild(script);
      (window as any).loadGoogleTranslate = loadGoogleTranslate;
    } else {
      loadGoogleTranslate();
    }

    return () => {
      // Clean up if needed
      if (googleTranslateRef.current) {
        googleTranslateRef.current.innerHTML = ""; // Clear the ref element
      }
    };
  }, []);

  return <div ref={googleTranslateRef}></div>;
};

export default TranslateComponent;
