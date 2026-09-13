import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../../types';

interface OverviewScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onBookAssessment?: () => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onNavigate,
  onBookAssessment,
}) => {
  const [selectedChild, setSelectedChild] = useState<'emma' | 'oliver' | 'sophie'>('emma');

  return (
    <div className="flex flex-col w-full pb-6 space-y-4">
      {/* Child Selector Pills */}
      <div
        className="flex items-center gap-space-sm overflow-x-auto py-1 -mx-gutter px-gutter no-scrollbar"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {/* Emma */}
        <button
          onClick={() => setSelectedChild('emma')}
          className={`child-pill flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm flex-shrink-0 transition-transform active:scale-95 cursor-pointer ${
            selectedChild === 'emma'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low'
          }`}
        >
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
              selectedChild === 'emma'
                ? 'bg-surface-container-lowest text-primary'
                : 'bg-surface-container-high text-on-surface-variant'
            }`}
          >
            EJ
          </span>
          <span className="font-label-md text-label-md">Emma</span>
        </button>

        {/* Oliver */}
        <button
          onClick={() => setSelectedChild('oliver')}
          className={`child-pill flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm flex-shrink-0 transition-transform active:scale-95 cursor-pointer ${
            selectedChild === 'oliver'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low'
          }`}
        >
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
              selectedChild === 'oliver'
                ? 'bg-surface-container-lowest text-primary'
                : 'bg-surface-container-high text-on-surface-variant'
            }`}
          >
            OW
          </span>
          <span className="font-label-md text-label-md">Oliver</span>
        </button>

        {/* Sophie */}
        <button
          onClick={() => setSelectedChild('sophie')}
          className={`child-pill flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm flex-shrink-0 transition-transform active:scale-95 cursor-pointer ${
            selectedChild === 'sophie'
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low'
          }`}
        >
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
              selectedChild === 'sophie'
                ? 'bg-surface-container-lowest text-primary'
                : 'bg-surface-container-high text-on-surface-variant'
            }`}
          >
            SB
          </span>
          <span className="font-label-md text-label-md">Sophie</span>
        </button>
      </div>

      {/* Hero Banner Card */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-fixed via-surface-container-low to-tertiary-fixed p-margin-md shadow-sm border border-outline-variant/20">
        {/* Confetti / Sprinkle Micro-accents (Pure Inline SVG) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        >
          <circle cx="15%" cy="20%" fill="#b10e6b" r="3.5" />
          <polygon
            fill="#006b5f"
            points="42,12 48,22 36,22"
            transform="rotate(25 42 16)"
          />
          <circle cx="78%" cy="18%" fill="#795600" r="4" />
          <polygon
            fill="#b10e6b"
            points="120,80 128,92 112,92"
            transform="rotate(-15 120 86)"
          />
          <circle cx="88%" cy="75%" fill="#006b5f" r="3" />
          <circle cx="35%" cy="85%" fill="#795600" r="2.5" />
          <rect
            fill="#b10e6b"
            height="5"
            rx="1.5"
            transform="rotate(45)"
            width="5"
            x="60%"
            y="60%"
          />
        </svg>

        <div className="relative z-10 flex flex-col space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex flex-col pr-2">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Your Family Dashboard
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight mt-1">
                A little progress<br />
                <span className="italic font-normal">goes a long way.</span>
              </h2>
            </div>
            {/* Decorative Star + Milestone Pip */}
            <div className="relative flex-shrink-0 mt-1">
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed-dim shadow-md flex items-center justify-center text-on-tertiary">
                <span
                  className="material-symbols-outlined text-[30px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  hotel_class
                </span>
              </div>
              <div className="absolute -bottom-2 -left-3 bg-surface-container-lowest text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap font-bold">
                +12% this term
              </div>
            </div>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant max-w-[85%]">
            {selectedChild === 'emma'
              ? 'Emma has been showing up and shining this week.'
              : selectedChild === 'oliver'
              ? 'Oliver is mastering algebraic foundations.'
              : 'Sophie is having fun with phonics and numbers.'}
          </p>

          <div className="pt-1">
            {/* Element (xpath: //a[contains(., "View Emma's progress")]) → Reports — Learning Journey (push transition) */}
            <a
              href="#reports"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('reports', 'push');
              }}
              className="inline-flex items-center gap-space-xs px-4 py-2.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm font-label-md text-label-md hover:bg-surface transition-colors active:scale-95 cursor-pointer"
            >
              <span>View Emma's progress</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Child Rhythm Card */}
      <div className="rounded-xl bg-surface-container-lowest p-margin-md shadow-sm flex flex-col space-y-4 border border-outline-variant/10">
        {/* Header with Stage Chip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
              {selectedChild === 'emma'
                ? 'Emma · Year 4'
                : selectedChild === 'oliver'
                ? 'Oliver · Year 6'
                : 'Sophie · Year 2'}
            </span>
          </div>
          <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm">
            <span className="material-symbols-outlined text-[16px] font-bold">
              check
            </span>
          </div>
        </div>

        {/* Summary Content with Circular Ring */}
        <div className="flex items-center justify-between gap-space-md">
          <div className="flex flex-col">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {selectedChild === 'emma'
                ? 'Emma is doing great!'
                : selectedChild === 'oliver'
                ? 'Oliver is on track!'
                : 'Sophie is flying ahead!'}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              1 session remaining this week
            </p>
          </div>

          {/* Circular Progress Ring (74%) */}
          <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                fill="transparent"
                r="26"
                stroke="#f0eded"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                fill="transparent"
                r="26"
                stroke="url(#progressGrad)"
                strokeDasharray="163.36"
                strokeDashoffset="42.47"
                strokeLinecap="round"
                strokeWidth="6"
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b10e6b" />
                  <stop offset="100%" stopColor="#006b5f" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-headline-sm text-headline-sm text-primary font-bold">
              74%
            </span>
          </div>
        </div>

        {/* Attendance Meter */}
        <div className="bg-surface-container-low rounded-lg p-3.5 space-y-2">
          <div className="flex justify-between items-center font-label-md text-label-md">
            <span className="text-on-surface">Weekly rhythm</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              3 of 4 sessions attended
            </span>
          </div>
          {/* Progress Bar Track */}
          <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: '75%' }}
            />
          </div>
        </div>

        {/* Booking Link */}
        {/* Element (xpath: //a[contains(., 'View bookings')]) → My Bookings (push transition) */}
        <div className="pt-0.5 flex justify-end">
          <a
            href="#bookings"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('bookings', 'push');
            }}
            className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline active:opacity-80 cursor-pointer"
          >
            <span>View bookings</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Quick Actions Bento Grid */}
      <div className="rounded-xl bg-surface-container-lowest p-margin-md shadow-sm space-y-3 border border-outline-variant/10">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
            Quick Actions
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
            What would you like to do?
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Action 1: Book assessment */}
          <button
            onClick={() => onBookAssessment?.()}
            className="flex flex-col text-left p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all active:scale-98 shadow-sm cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-2.5">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                assignment_turned_in
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface leading-snug">
              Book assessment
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Diagnostic review
            </span>
          </button>

          {/* Action 2: Book a class */}
          {/* Element (xpath: //button[contains(., 'Book a class')]) → My Bookings (push transition) */}
          <button
            onClick={() => onNavigate('bookings', 'push')}
            className="flex flex-col text-left p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all active:scale-98 shadow-sm cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-2.5">
              <span className="material-symbols-outlined text-[20px]">
                add_circle
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface leading-snug">
              Book a class
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Fractions & literacy
            </span>
          </button>

          {/* Action 3: View reports */}
          {/* Element (xpath: //button[contains(., 'View reports')]) → Reports — Learning Journey (push transition) */}
          <button
            onClick={() => onNavigate('reports', 'push')}
            className="flex flex-col text-left p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all active:scale-98 shadow-sm cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface mb-2.5">
              <span className="material-symbols-outlined text-[20px]">
                insights
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface leading-snug">
              View reports
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Tutor reflections
            </span>
          </button>

          {/* Action 4: Make payment */}
          {/* Element (xpath: //button[contains(., 'Make payment')]) → Payments (push transition) */}
          <button
            onClick={() => onNavigate('payments', 'push')}
            className="flex flex-col text-left p-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all active:scale-98 shadow-sm cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant mb-2.5">
              <span className="material-symbols-outlined text-[20px]">
                account_balance_wallet
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface leading-snug">
              Make payment
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Invoices & auto-pay
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
