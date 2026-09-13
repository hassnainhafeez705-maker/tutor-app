import React, { useState } from 'react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const getScreenTitle = (screen: ScreenId) => {
    switch (screen) {
      case 'overview':
        return 'Overview';
      case 'my-children':
        return 'My Children';
      case 'bookings':
        return 'Bookings';
      case 'payments':
        return 'Payments';
      case 'messages':
        return 'Messages';
      case 'reports':
        return 'Overview'; // As in the prototype header
      default:
        return 'Overview';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/90 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#f0eded]">
      <div className="max-w-md mx-auto h-16 px-gutter flex items-center justify-between">
        {/* Brand & Page Info */}
        <div
          className="flex items-center gap-space-sm cursor-pointer select-none"
          onClick={() => onNavigate('overview')}
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs shadow-sm">
            <span className="material-symbols-outlined text-[20px]">cake</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Parent Portal
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              {getScreenTitle(currentScreen)}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-space-sm relative">
          <button
            aria-label="Notifications"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-surface animate-pulse"></span>
          </button>

          <button
            aria-label="Parent Profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-label-md text-on-primary font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            SJ
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-14 w-80 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/30 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <span className="font-headline-sm text-[16px] text-on-surface">
                  Notifications
                </span>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">
                  2 New
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <div
                  className="p-2.5 rounded-xl bg-primary-fixed/20 hover:bg-primary-fixed/30 cursor-pointer transition-colors"
                  onClick={() => {
                    setShowNotifications(false);
                    onNavigate('messages');
                  }}
                >
                  <p className="font-label-md text-xs text-primary font-bold">
                    Diagnostic Review Tomorrow
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                    Emma's session at Studio 1 is scheduled for 3:30 PM.
                  </p>
                </div>
                <div
                  className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors"
                  onClick={() => {
                    setShowNotifications(false);
                    onNavigate('reports');
                  }}
                >
                  <p className="font-label-md text-xs text-on-surface font-bold">
                    End of Term Report Published
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                    Emma scored 4.2 in overall progress for Term 3.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-14 w-64 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/30 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center gap-3 pb-3 border-b border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                  SJ
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-on-surface font-bold">
                    Sarah Johnson
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">
                    Parent Account
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <button
                  onClick={() => {
                    setShowProfile(false);
                    onNavigate('my-children');
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-surface-container-low font-body-sm text-xs text-on-surface transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  Manage Children (3)
                </button>
                <button
                  onClick={() => {
                    setShowProfile(false);
                    onNavigate('payments');
                  }}
                  className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-surface-container-low font-body-sm text-xs text-on-surface transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  Billing & Invoices
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
