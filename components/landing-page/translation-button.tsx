"use client";
import Script from "next/script";
import React from "react";
import Cookies from "js-cookie";
import Select from "react-select";

const languages = [
  { label: "English", value: "en", flag: "https://flagcdn.com/w20/gb.png" },
  { label: "French", value: "fr", flag: "https://flagcdn.com/w20/fr.png" },
  { label: "Spanish", value: "es", flag: "https://flagcdn.com/w20/es.png" },
  { label: "German", value: "de", flag: "https://flagcdn.com/w20/de.png" },
  { label: "Italian", value: "it", flag: "https://flagcdn.com/w20/it.png" },
  { label: "Portuguese", value: "pt", flag: "https://flagcdn.com/w20/pt.png" },
  { label: "Dutch", value: "nl", flag: "https://flagcdn.com/w20/nl.png" },
  { label: "Russian", value: "ru", flag: "https://flagcdn.com/w20/ru.png" },
  {
    label: "Chinese (Simplified)",
    value: "zh-CN",
    flag: "https://flagcdn.com/w20/cn.png",
  },
  { label: "Japanese", value: "ja", flag: "https://flagcdn.com/w20/jp.png" },
  { label: "Korean", value: "ko", flag: "https://flagcdn.com/w20/kr.png" },
  { label: "Arabic", value: "ar", flag: "https://flagcdn.com/w20/sa.png" },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  // @ts-ignore
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}

export function GoogleTranslate() {
  const [langCookie, setLangCookie] = React.useState(
    Cookies.get("prefLangCookie") || "/en/en"
  );

  React.useEffect(() => {
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (selectedOption) => {
    const lang = "/en/" + selectedOption.value;
    setLangCookie(lang);
    Cookies.set("prefLangCookie", lang, { expires: 7 }); // Expires in 7 days

    const element = document.querySelector(".goog-te-combo");
    if (element) {
      //   @ts-ignore
      element.value = selectedOption.value;
      element.dispatchEvent(new Event("change"));
    }
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
  const langCookie = value.split("/")[2]; // Extracting the language code

  // Custom styles for react-select dropdown
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "black",
      color: "white",
      width: "120px", // Set the desired width here,
      border: "none", // Optional: remove border for a cleaner look
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "gray" : "black",
      color: "white",
      "&:hover": {
        backgroundColor: "gray",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "black",
      zIndex: 1000, // Ensure zIndex is a number
    }),
    indicatorSeparator: () => ({
      display: "none", // Hide the indicator separator
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: "none", // Hide the dropdown indicator (arrow)
    }),
  };

  return (
    <Select
      options={languages}
      className="notranslate"
    //   @ts-ignore
      getOptionLabel={(lang) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={lang.flag}
            alt={lang.label}
            style={{ width: "20px", marginRight: "8px" }}
          />
          {lang.label}
        </div>
      )}
      
      onChange={onChange}
      value={languages.find((lang) => lang.value === langCookie)}
      styles={customStyles} // Apply custom styles for black background
    />
  );
}
