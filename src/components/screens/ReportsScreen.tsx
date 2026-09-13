import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../../types';

interface ReportsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
}

export const ReportsScreen: React.FC<ReportsScreenProps> = ({ onNavigate: _onNavigate }) => {
  const [showFullReportModal, setShowFullReportModal] = useState(false);

  return (
    <div className="flex flex-col w-full pb-space-lg gap-space-lg">
      {/* Top Breadcrumb & Page Introduction */}
      <div className="flex flex-col gap-space-xs px-space-xs pt-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            ACADEMIC PROGRESS
          </span>
          <span className="text-outline-variant text-[12px] leading-none">•</span>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
            REPORTS
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
          Emma's learning journey
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant italic">
          Progress worth celebrating.
        </p>
      </div>

      {/* Hero Banner Card (Celebratory Confetti & Overall Rating) */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary-fixed/50 via-secondary-container/40 to-surface-container-low p-space-lg shadow-sm border border-secondary-container/60">
        {/* Confetti / Hundreds & Thousands Sprinkle Motifs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pink sprinkles */}
          <circle cx="18%" cy="22%" fill="#b10e6b" opacity="0.65" r="3.5" />
          <rect
            fill="#b10e6b"
            height="10"
            opacity="0.55"
            rx="2"
            transform="rotate(25 75 15)"
            width="4"
            x="75%"
            y="15%"
          />
          <circle cx="88%" cy="75%" fill="#b10e6b" opacity="0.6" r="3" />
          {/* Teal sprinkles */}
          <circle cx="82%" cy="38%" fill="#006b5f" opacity="0.6" r="4" />
          <polygon
            fill="#006b5f"
            opacity="0.45"
            points="50,15 56,26 44,26"
          />
          <rect
            fill="#006b5f"
            height="3"
            opacity="0.6"
            rx="1.5"
            transform="rotate(-15 12 78)"
            width="9"
            x="12%"
            y="78%"
          />
          {/* Gold sprinkles */}
          <circle cx="34%" cy="85%" fill="#795600" opacity="0.6" r="3" />
          <polygon
            fill="#795600"
            opacity="0.5"
            points="260,30 266,42 254,42"
          />
          <circle cx="65%" cy="60%" fill="#795600" opacity="0.5" r="2.5" />
          <rect
            fill="#795600"
            height="3.5"
            opacity="0.4"
            rx="1.5"
            transform="rotate(40 42 18)"
            width="8"
            x="42%"
            y="18%"
          />
        </svg>

        <div className="relative z-10 flex flex-col gap-space-md">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-1.5 self-start px-space-sm py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
              END OF TERM REPORT · TERM 3, 2025
            </span>
          </div>

          {/* Main Banner Body Split */}
          <div className="flex items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-[62%]">
              <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">
                Emma's learning journey
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                A thoughtful look at all the progress she's made.
              </p>
            </div>

            {/* Metric Block */}
            <div className="flex flex-col items-end text-right">
              <span className="font-display-lg text-display-lg text-on-surface leading-none tracking-tight">
                4.2
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                Overall progress
              </span>

              {/* 5-Star Rating Row (4 Filled Gold, 1 Unfilled Gray) */}
              <div
                aria-label="Rating: 4 out of 5 stars"
                className="flex items-center gap-0.5 mt-1.5"
              >
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-surface-container-highest text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card 1: Learning Snapshot */}
      <section className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-outline-variant/15">
        {/* Header with Tag */}
        <div className="flex items-center justify-between gap-space-sm mb-space-xs">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold">
            LEARNING SNAPSHOT
          </span>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <span className="font-label-sm text-label-sm font-bold">
              This term
            </span>
          </div>
        </div>

        {/* Bold Heading */}
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">
          Confidence is growing
        </h3>

        {/* Subject Rating Rows */}
        <div className="flex flex-col gap-space-md">
          {/* Subject 1: Mathematics */}
          <div className="flex items-center justify-between gap-space-sm py-space-xs border-b border-surface-container-high/50 pb-2">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-body-md text-body-md text-on-surface truncate">
                Mathematics (Fractions & Decimals)
              </span>
            </div>
            {/* 4.5 Stars Rating */}
            <div
              aria-label="4.5 out of 5 stars"
              className="flex items-center gap-0.5 shrink-0"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
          </div>

          {/* Subject 2: English & Creative Writing */}
          <div className="flex items-center justify-between gap-space-sm py-space-xs border-b border-surface-container-high/50 pb-2">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="font-body-md text-body-md text-on-surface truncate">
                English & Creative Writing
              </span>
            </div>
            {/* 4 Stars Rating */}
            <div
              aria-label="4 out of 5 stars"
              className="flex items-center gap-0.5 shrink-0"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-surface-container-highest text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
          </div>

          {/* Subject 3: Reading Comprehension */}
          <div className="flex items-center justify-between gap-space-sm py-space-xs border-b border-surface-container-high/50 pb-2">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
              <span className="font-body-md text-body-md text-on-surface truncate">
                Reading Comprehension
              </span>
            </div>
            {/* 5 Stars Rating */}
            <div
              aria-label="5 out of 5 stars"
              className="flex items-center gap-0.5 shrink-0"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
          </div>

          {/* Subject 4: Mental Arithmetic Speed */}
          <div className="flex items-center justify-between gap-space-sm py-space-xs">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-body-md text-body-md text-on-surface truncate">
                Mental Arithmetic Speed
              </span>
            </div>
            {/* 4 Stars Rating */}
            <div
              aria-label="4 out of 5 stars"
              className="flex items-center gap-0.5 shrink-0"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-surface-container-highest text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setShowFullReportModal(true)}
          className="mt-space-lg w-full flex items-center justify-center gap-space-xs py-3.5 px-space-md rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors active:scale-[0.98] cursor-pointer"
          type="button"
        >
          <span className="font-label-lg text-label-lg">View full report</span>
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </section>

      {/* Card 2: Tutor Recommendation */}
      <section className="relative overflow-hidden flex flex-col rounded-xl bg-tertiary-fixed/30 p-space-lg shadow-sm border border-tertiary-fixed-dim/30">
        {/* Header Sparkle & Label */}
        <div className="flex items-center gap-space-xs mb-space-sm">
          <span
            className="material-symbols-outlined text-tertiary text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
          <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
            TUTOR RECOMMENDATION
          </span>
        </div>

        {/* Recommendation Quote */}
        <blockquote className="font-headline-sm text-headline-sm text-on-surface italic font-normal leading-snug mb-space-lg">
          “Continue weekly Mathematics and English sessions. Emma is ready for
          the next challenge and showing great intuition with equivalent
          fractions.”
        </blockquote>

        {/* Tutor Profile Row */}
        <div className="flex items-center gap-space-sm pt-space-xs">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md font-bold shadow-xs">
            JT
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface">
              Jessica Taylor
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Emma's tutor · Studio 1
            </span>
          </div>
        </div>
      </section>

      {/* Full Report Modal */}
      {showFullReportModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-3xl p-6 w-full max-w-md shadow-2xl border border-outline-variant/30 animate-in fade-in slide-in-from-bottom-6 duration-200">
            <div className="flex justify-between items-start pb-3 border-b border-surface-container">
              <div>
                <h3 className="font-headline-sm text-on-surface">
                  Comprehensive Diagnostic Breakdown
                </h3>
                <p className="font-body-sm text-on-surface-variant mt-0.5">
                  Term 3, 2025 · Emma Johnson
                </p>
              </div>
              <button
                onClick={() => setShowFullReportModal(false)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="py-4 space-y-3 font-body-sm text-on-surface-variant text-sm">
              <p>
                <strong className="text-on-surface font-label-md">Fractions Mastery:</strong> Emma has demonstrated strong conceptual understanding of numerator-denominator relationships and fraction simplification with concrete manipulatives.
              </p>
              <p>
                <strong className="text-on-surface font-label-md">Creative Writing:</strong> High vocabulary diversity and improved paragraph transitions in weekly journals.
              </p>
              <p>
                <strong className="text-on-surface font-label-md">Next Milestones:</strong> Introducing mixed numerals and improper fractions in Term 4.
              </p>
            </div>
            <button
              onClick={() => setShowFullReportModal(false)}
              className="w-full py-3 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
