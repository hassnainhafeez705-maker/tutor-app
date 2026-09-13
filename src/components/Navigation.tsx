import React from 'react';
import { ScreenId, TransitionType } from '../types';

interface NavigationProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    {
      id: 'overview' as ScreenId,
      path: 'overview',
      label: 'Overview',
      icon: 'grid_view',
    },
    {
      id: 'my-children' as ScreenId,
      path: 'my-children',
      label: 'Children',
      icon: 'group',
    },
    {
      id: 'bookings' as ScreenId,
      path: 'bookings',
      label: 'Bookings',
      icon: 'calendar_month',
    },
    {
      id: 'payments' as ScreenId,
      path: 'payments',
      label: 'Payments',
      icon: 'credit_card',
    },
    {
      id: 'messages' as ScreenId,
      path: 'messages',
      label: 'Messages',
      icon: 'chat_bubble',
      hasBadge: true,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.04)] border-t border-[#f0eded]"
      data-active-classes="text-primary font-bold"
    >
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-space-xs">
        {navItems.map((item) => {
          // In reports screen, overview or current item is highlighted
          const isActive = currentScreen === item.id || (currentScreen === 'reports' && item.id === 'overview');
          return (
            <a
              key={item.path}
              data-path={item.path}
              href={`#${item.path}`}
              aria-current={isActive ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id, 'none');
              }}
              className={`flex flex-col items-center justify-center gap-space-xs min-w-[56px] min-h-[44px] transition-colors ${
                isActive
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
                {item.hasBadge && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
