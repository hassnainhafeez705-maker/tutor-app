import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../../types';

interface PaymentsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
}

export const PaymentsScreen: React.FC<PaymentsScreenProps> = ({ onNavigate }) => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    setTimeout(() => {
      setDownloadState('done');
      setTimeout(() => {
        setDownloadState('idle');
      }, 2500);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full pb-6 gap-space-md">
      {/* Header Context Area */}
      <div className="flex flex-col pt-space-xs">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
          Account & Billing
        </span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
          Payments
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-xs">
          Simple, clear and all in one place.
        </p>
      </div>

      {/* Highlight Banner Card: Soft Warm Amber Glow (Pending Verification) */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-tertiary-fixed via-tertiary-fixed/70 to-surface-container-low shadow-sm p-space-lg flex flex-col gap-space-md border border-tertiary-fixed-dim/40">
        {/* Subtle playful sprinkles background accent */}
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-tertiary-container/10 pointer-events-none blur-xl" />
        <div className="absolute top-2 right-12 w-2 h-2 rounded-full bg-primary/20 pointer-events-none" />
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 rounded-full bg-secondary/30 pointer-events-none" />

        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
                Current Term
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
              Payment Pending Verification
            </h2>
          </div>
          <div className="flex flex-col items-end shrink-0 text-right">
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
              Pending
            </span>
            <div className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
              $1,188
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              AUD · Term 3, 2025
            </span>
          </div>
        </div>

        {/* Feedback / Verification Note Box */}
        <div className="flex items-center gap-space-sm bg-surface-container-lowest/80 backdrop-blur-sm rounded-DEFAULT p-space-sm text-on-tertiary-fixed-variant shadow-xs">
          <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">
            hourglass_top
          </span>
          <p className="font-body-sm text-body-sm leading-tight text-on-surface-variant">
            Thank you, Sarah! We have received your proof of payment and are
            matching it with our bank transfer.
          </p>
        </div>
      </div>

      {/* Primary Invoice Card */}
      <div className="w-full bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md border border-outline-variant/15">
        {/* Invoice Meta Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-outline text-[18px]">
              receipt_long
            </span>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Invoice #FF-2025-031
            </span>
          </div>
          <div className="flex items-center gap-1 bg-tertiary-fixed/60 text-tertiary-container px-space-sm py-1 rounded-full">
            <span className="material-symbols-outlined text-[14px]">
              schedule
            </span>
            <span className="font-label-sm text-label-sm font-bold">
              Pending
            </span>
          </div>
        </div>

        {/* Title & Student Association */}
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            Term 3 Tutoring
          </h3>
          <div className="flex items-center gap-space-xs text-on-surface-variant mt-1">
            <span className="font-body-sm text-body-sm">Sarah Johnson</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="font-body-sm text-body-sm font-medium text-primary">
              Emma Johnson (Year 4)
            </span>
          </div>
        </div>

        {/* Visual Divider */}
        <div className="w-full h-px bg-surface-container-high" />

        {/* Itemized List */}
        <div className="flex flex-col gap-space-md">
          {/* Item 1 */}
          <div className="flex items-start justify-between gap-space-sm">
            <div className="flex flex-col min-w-0 flex-1 pr-space-xs">
              <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                10 Week Tutoring (Fractions & Math Foundations)
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Weekly 60-min 1:1 tailored sessions
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0 text-right">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                $1,000
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold mt-0.5">
                Pending
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start justify-between gap-space-sm">
            <div className="flex flex-col min-w-0 flex-1 pr-space-xs">
              <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                Studio Registration & Materials
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Physical printables & manipulative kits
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0 text-right">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                $30
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold mt-0.5">
                Pending
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start justify-between gap-space-sm">
            <div className="flex flex-col min-w-0 flex-1 pr-space-xs">
              <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                Comprehensive Progress & Diagnostic Report
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Mid-term assessment & curriculum map
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0 text-right">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                $50
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold mt-0.5">
                Pending
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start justify-between gap-space-sm">
            <div className="flex flex-col min-w-0 flex-1 pr-space-xs">
              <span className="font-body-md text-body-md text-on-surface font-medium leading-snug">
                Term 3 Activity Journal & Math Toolkit
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Custom workbooks & Fairybread badges
              </span>
            </div>
            <div className="flex flex-col items-end shrink-0 text-right">
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                $108
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold mt-0.5">
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Visual Divider */}
        <div className="w-full h-px bg-surface-container-high" />

        {/* Total Summary Row */}
        <div className="flex items-center justify-between py-space-xs">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Total Due
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Inclusive of GST
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
              $1,188
            </span>
            <span className="font-label-md text-label-md text-outline">AUD</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-space-sm pt-space-xs">
          <button
            id="downloadBtn"
            onClick={handleDownload}
            disabled={downloadState === 'downloading'}
            className="w-full min-h-[48px] px-space-lg rounded-full bg-primary-fixed text-primary hover:bg-primary hover:text-on-primary active:scale-[0.98] transition-all flex items-center justify-center gap-space-sm shadow-sm font-label-lg text-label-lg cursor-pointer"
            type="button"
          >
            {downloadState === 'downloading' ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">
                  progress_activity
                </span>
                <span>Preparing PDF...</span>
              </>
            ) : downloadState === 'done' ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check</span>
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                <span>Download Invoice PDF</span>
              </>
            )}
          </button>

          {/* Spec Requirement: Element (xpath: //button[@id='helpBtn']) → Messages (push transition) */}
          <button
            id="helpBtn"
            onClick={() => onNavigate('messages', 'push')}
            className="w-full py-space-xs text-center font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1 cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              contact_support
            </span>
            <span>Questions about this invoice? Chat with Support</span>
          </button>
        </div>
      </div>

      {/* Recent Payment History Teaser Card */}
      <div className="w-full bg-surface-container-low rounded-lg p-space-md flex items-center justify-between border border-outline-variant/10">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined text-[20px]">
              check_circle
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Term 2, 2025 Paid
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Receipt #FF-2025-020 · $1,188
            </span>
          </div>
        </div>
        <button
          aria-label="View previous receipts"
          onClick={() => {
            alert('Receipt #FF-2025-020: Paid in full on 15 June 2025. Receipt details downloaded.');
          }}
          className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};
