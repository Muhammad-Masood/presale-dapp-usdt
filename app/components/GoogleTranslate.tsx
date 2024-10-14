"use client";
import Script from "next/script";
import React from "react";

const languages = [
  { label: "Bengali", value: "bn", src: "https://flagcdn.com/h60/bd.png" },
  { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "Greek", value: "el", src: "https://flagcdn.com/h60/gr.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  { label: "Finnish", value: "fi", src: "https://flagcdn.com/h60/fi.png" },
  { label: "Filipino", value: "fil", src: "https://flagcdn.com/h60/ph.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "Hindi", value: "hi", src: "https://flagcdn.com/h60/in.png" },
  { label: "Hungarian", value: "hu", src: "https://flagcdn.com/h60/hu.png" },
  { label: "Indonesian", value: "id", src: "https://flagcdn.com/h60/id.png" },
  { label: "Italian", value: "it", src: "https://flagcdn.com/h60/it.png" },
  { label: "Japanese", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
  { label: "Korean", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
  { label: "Dutch", value: "nl", src: "https://flagcdn.com/h60/nl.png" },
  { label: "Polish", value: "pl", src: "https://flagcdn.com/h60/pl.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/pt.png" },
  { label: "Romanian", value: "ro", src: "https://flagcdn.com/h60/ro.png" },
  { label: "Russian", value: "ru", src: "https://flagcdn.com/h60/ru.png" },
  { label: "Swedish", value: "sv", src: "https://flagcdn.com/h60/se.png" },
  { label: "Tamil", value: "ta", src: "https://flagcdn.com/h60/in.png" }, // Tamil doesn't have a distinct flag, using India's flag
  { label: "Turkish", value: "tr", src: "https://flagcdn.com/h60/tr.png" },
  { label: "Vietnamese", value: "vi", src: "https://flagcdn.com/h60/vn.png" },
  {
    label: "Chinese (Simplified)",
    value: "zh-CN",
    src: "https://flagcdn.com/h60/cn.png",
  },
  {
    label: "Chinese (Traditional)",
    value: "zh-TW",
    src: "https://flagcdn.com/h60/tw.png",
  },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new (window as any).google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

export function GoogleTranslate({
  prefLangCookie,
}: {
  prefLangCookie: string;
}) {
  const [langCookie, setLangCookie] = React.useState(
    decodeURIComponent(prefLangCookie)
  );

  React.useEffect(() => {
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (value: string) => {
    const lang = "/en/" + value;
    setLangCookie(lang);
    const element = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    element.value = value;
    element.dispatchEvent(new Event("change"));
  };

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

function LanguageSelector({ onChange, value }) {
  const langCookie = value.split("/")[2];
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      value={langCookie}
      className="bg-black"
    >
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}
