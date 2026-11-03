
"use client";

import { useState } from "react";
import Link from "next/link";

type Language = "es" | "en";

const cvFiles: Record<Language, string> = {
    es: "/documents/cv-es.pdf",
    en: "/documents/cv-en.pdf",
};

export default function CVPage() {
    const [language, setLanguage] = useState<Language>("es");

    const currentCV = cvFiles[language];

    return (
        <main className="cv-page">
            <div className="cv-container">
                <Link href="/" className="cv-back-link">
                    ← Back to portfolio
                </Link>

                <header className="cv-header">
                    <span className="eyebrow">CURRICULUM VITAE</span>
                    <h1>
                        Angela <span className="text-gradient">Garcia</span>
                    </h1>
                    <p className="muted">Web Developer</p>
                </header>

                <div className="cv-toolbar">
                    <div className="cv-language">
                        <span className="cv-toolbar-label">Language</span>

                        <div className="cv-language-options">
                            <button
                                type="button"
                                className={language === "es" ? "active" : ""}
                                onClick={() => setLanguage("es")}
                                aria-pressed={language === "es"}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                className={language === "en" ? "active" : ""}
                                onClick={() => setLanguage("en")}
                                aria-pressed={language === "en"}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    <div className="cv-downloads">
                        <a
                            href={currentCV}
                            download
                            className="cv-download"
                        >
                            Download my CV ↗
                        </a>

                        <span className="cv-download-divider" aria-hidden="true">|</span>

                        <a
                            href="/documents/europass.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-download"
                        >
                            Download Europass CV ↗
                        </a>
                    </div>

                </div>


                <div className="cv-document">
                    <iframe
                        key={currentCV}
                        src={currentCV}
                        title={`Angela Garcia CV (${language.toUpperCase()})`}
                        className="cv-iframe"
                    />
                </div>
            </div>
        </main>
    );
}
