/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenId, TransitionType } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { OverviewScreen } from './components/screens/OverviewScreen';
import { ChildrenScreen } from './components/screens/ChildrenScreen';
import { BookingsScreen } from './components/screens/BookingsScreen';
import { PaymentsScreen } from './components/screens/PaymentsScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { ReportsScreen } from './components/screens/ReportsScreen';
import { BookClassModal, AddChildModal } from './components/Modals';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('overview');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAddChildModalOpen, setIsAddChildModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleNavigate = (targetScreen: ScreenId, transition: TransitionType = 'none') => {
    setTransitionType(transition);
    setCurrentScreen(targetScreen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'overview':
        return (
          <OverviewScreen
            onNavigate={handleNavigate}
            onBookAssessment={() => setIsBookModalOpen(true)}
          />
        );
      case 'my-children':
        return (
          <ChildrenScreen
            onNavigate={handleNavigate}
            onAddChild={() => setIsAddChildModalOpen(true)}
          />
        );
      case 'bookings':
        return (
          <BookingsScreen
            onNavigate={handleNavigate}
            onBookClass={() => setIsBookModalOpen(true)}
          />
        );
      case 'payments':
        return <PaymentsScreen onNavigate={handleNavigate} />;
      case 'messages':
        return <MessagesScreen onNavigate={handleNavigate} />;
      case 'reports':
        return <ReportsScreen onNavigate={handleNavigate} />;
      default:
        return (
          <OverviewScreen
            onNavigate={handleNavigate}
            onBookAssessment={() => setIsBookModalOpen(true)}
          />
        );
    }
  };

  const variants = {
    push: {
      initial: { opacity: 0, x: 28 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -28 },
      transition: { duration: 0.22, ease: 'easeOut' },
    },
    none: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 },
      transition: { duration: 0 },
    },
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex flex-col min-h-screen">
      {/* Top Header */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface px-gutter max-w-md mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={variants[transitionType].initial}
            animate={variants[transitionType].animate}
            exit={variants[transitionType].exit}
            transition={variants[transitionType].transition}
            className="w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <Navigation currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Modals & Feedback */}
      <BookClassModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSuccess={(bookingTitle) => {
          showToast(`Booked: ${bookingTitle}`);
          handleNavigate('bookings', 'push');
        }}
      />

      <AddChildModal
        isOpen={isAddChildModalOpen}
        onClose={() => setIsAddChildModalOpen(false)}
        onAdd={(name) => {
          showToast(`Added profile for ${name}`);
        }}
      />

      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg font-label-md text-xs flex items-center gap-2 border border-outline-variant/30 animate-in fade-in slide-in-from-top-3">
          <span className="material-symbols-outlined text-[18px] text-secondary-container">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

