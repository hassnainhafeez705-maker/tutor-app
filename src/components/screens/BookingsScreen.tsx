import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../../types';
import { initialBookings } from '../../data';

interface BookingsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onBookClass?: () => void;
}

export const BookingsScreen: React.FC<BookingsScreenProps> = ({
  onNavigate,
  onBookClass,
}) => {
  const [bookings] = useState(initialBookings);
  const [selectedBookingForManage, setSelectedBookingForManage] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full pb-6">
      {/* Header & Context Area */}
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
            SCHEDULE
          </span>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
            TERM 4
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
          My bookings
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant italic">
          Your upcoming sessions, all in one place.
        </p>
      </div>

      {/* Weekly Section Heading & CTA Row */}
      <div className="flex items-end justify-between mb-space-md gap-space-sm">
        <div className="flex flex-col">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Your week, sorted
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            One less thing to keep in your head.
          </p>
        </div>
        <button
          onClick={() => onBookClass?.()}
          className="shrink-0 bg-primary active:scale-95 transition-all text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-full shadow-md hover:bg-primary-container flex items-center gap-1.5 cursor-pointer"
          type="button"
        >
          <span>Book another class</span>
          <span className="material-symbols-outlined text-[16px]">add</span>
        </button>
      </div>

      {/* Stacked List of Booking Cards */}
      <div className="flex flex-col gap-space-md mb-space-lg">
        {bookings.map((booking) => {
          const isMath = booking.subjectType === 'math';
          return (
            <div
              key={booking.id}
              className="relative bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_-4px_rgba(78,54,42,0.06)] overflow-hidden transition-all hover:shadow-[0_8px_24px_-4px_rgba(236,72,153,0.12)] border border-outline-variant/15"
            >
              {/* Colored Left Accent Bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  isMath ? 'bg-primary' : 'bg-secondary'
                }`}
              />
              <div className="p-space-md pl-5 flex flex-col gap-3">
                {/* Top Row: Date & Status */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Tactile Date Block */}
                    <div className="flex flex-col items-center justify-center bg-surface-container-low px-2.5 py-1.5 rounded-lg min-w-[46px] text-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider">
                        {booking.day}
                      </span>
                      <span
                        className={`font-headline-md text-headline-md leading-none my-0.5 ${
                          isMath ? 'text-primary' : 'text-secondary'
                        }`}
                      >
                        {booking.date}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider">
                        {booking.month}
                      </span>
                    </div>

                    {/* Subject & Session Title */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isMath ? 'bg-primary' : 'bg-secondary'
                          }`}
                        />
                        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                          {booking.subject}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
                        {booking.title}
                      </h3>
                    </div>
                  </div>

                  {/* Mint Badge */}
                  <div className="inline-flex items-center gap-1 bg-secondary-container/40 text-on-secondary-container px-2.5 py-1 rounded-full shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    <span className="font-label-sm text-label-sm font-bold">
                      {booking.status}
                    </span>
                  </div>
                </div>

                {/* Details Row (Time & Room) */}
                <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 bg-surface-container-low/60 p-2.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isMath ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      schedule
                    </span>
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isMath ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      person
                    </span>
                    <span>
                      {booking.tutor} · {booking.studio}
                    </span>
                  </div>
                </div>

                {/* Card Footer / Actions */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isMath ? 'bg-tertiary-fixed-dim' : 'bg-secondary'
                      }`}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {booking.note}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setSelectedBookingForManage(
                        selectedBookingForManage === booking.id ? null : booking.id
                      )
                    }
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container transition-colors cursor-pointer"
                  >
                    <span>Manage booking</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>

                {/* Inline management popover */}
                {selectedBookingForManage === booking.id && (
                  <div className="mt-2 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 flex items-center justify-between text-xs animate-in fade-in">
                    <span className="text-on-surface-variant">
                      Need to reschedule or add session notes?
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onNavigate('messages', 'push');
                        }}
                        className="px-3 py-1 rounded-full bg-primary text-on-primary font-bold hover:bg-primary-container transition-colors cursor-pointer"
                      >
                        Message Tutor
                      </button>
                      <button
                        onClick={() => setSelectedBookingForManage(null)}
                        className="text-outline hover:text-on-surface px-1"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Banner: Cancellation Policy */}
      <div className="bg-secondary-container/30 rounded-xl p-space-md flex gap-space-sm items-start shadow-sm border border-secondary-container/50">
        <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-0.5 text-on-secondary-container shadow-sm">
          <span className="material-symbols-outlined text-[20px]">
            schedule
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
            CANCELLATION POLICY
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Need to reschedule? You can cancel or move any session up to 24 hours in
            advance with zero penalty fees directly through the app.
          </p>
        </div>
      </div>
    </div>
  );
};
