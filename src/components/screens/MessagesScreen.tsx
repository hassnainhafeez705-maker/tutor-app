import React, { useState } from 'react';
import { ScreenId, TransitionType, ChatMessage } from '../../types';
import { initialMessages } from '../../data';

interface MessagesScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
}

export const MessagesScreen: React.FC<MessagesScreenProps> = ({ onNavigate: _onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'thread'>('inbox');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [activeChatTitle, setActiveChatTitle] = useState('Fairybread & Fractions');
  const [activeChatSubtitle, setActiveChatSubtitle] = useState('Typically replies within a day');

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'parent',
      text: inputMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');

    // Simulate friendly tutor reply
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: `msg-reply-${Date.now()}`,
        sender: 'tutor',
        text: 'Thanks for letting us know! We look forward to seeing Emma.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg pb-6">
      {/* Header Section */}
      <div className="flex flex-col gap-space-xs pt-1">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
          Communication
        </span>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
          Messages
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant italic">
          A little inbox for all the important things.
        </p>
      </div>

      {/* View Switcher Toggle */}
      <div className="flex p-1 bg-surface-container rounded-full gap-1 shadow-sm">
        <button
          id="tab-inbox"
          onClick={() => setActiveTab('inbox')}
          className={`flex-1 py-2 px-4 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'inbox'
              ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">inbox</span>
          Inbox (3)
        </button>
        <button
          id="tab-thread"
          onClick={() => setActiveTab('thread')}
          className={`flex-1 py-2 px-4 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'thread'
              ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          Active Chat
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
        </button>
      </div>

      {/* SECTION 1: INBOX LIST VIEW */}
      {activeTab === 'inbox' && (
        <section
          id="view-inbox"
          className="flex flex-col gap-space-md transition-opacity duration-200"
        >
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
              Inbox
            </span>
            <button
              onClick={() => {
                setActiveChatTitle('Support & Enquiries');
                setActiveChatSubtitle('Accounts and Scheduling Support');
                setActiveTab('thread');
              }}
              className="flex items-center gap-1 bg-primary-fixed text-primary px-3 py-1.5 rounded-full font-label-md text-label-md shadow-sm active:scale-95 transition-transform hover:bg-primary hover:text-on-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              New +
            </button>
          </div>

          {/* Conversations Stack */}
          <div className="flex flex-col gap-space-sm">
            {/* Row 1: Unread / Highlighted (F&F Team) */}
            <div
              onClick={() => {
                setActiveChatTitle('Fairybread & Fractions Team');
                setActiveChatSubtitle('Tutor Team • Emma');
                setActiveTab('thread');
              }}
              className="relative flex flex-col gap-2 p-4 bg-primary-fixed/30 rounded-lg shadow-sm cursor-pointer transition-all active:scale-[0.99] hover:bg-primary-fixed/45 border border-primary-fixed"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0 w-11 h-11 rounded-full bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center shadow-sm">
                    F&F
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-secondary ring-2 ring-surface" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Fairybread & Fractions Team
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      Tutor Team • Emma
                    </span>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-bold shrink-0">
                  Just now
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 pl-14">
                Hi Sarah, don't forget Emma's diagnostic review tomorrow at 3:30 PM!
              </p>
              <div className="flex items-center justify-between pt-1 pl-14">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    notifications_active
                  </span>
                  Reminder
                </span>
                <span className="flex items-center gap-0.5 text-primary font-label-sm text-label-sm font-bold">
                  View chat
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                </span>
              </div>
            </div>

            {/* Row 2: Tutor Row (Jessica Taylor) */}
            <div
              onClick={() => {
                setActiveChatTitle('Jessica Taylor (Tutor)');
                setActiveChatSubtitle('Math Foundations · Studio 1');
                setActiveTab('thread');
              }}
              className="flex flex-col gap-2 p-4 bg-surface-container-lowest rounded-lg shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer active:scale-[0.99] border border-outline-variant/10"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-tertiary-container text-on-tertiary font-headline-sm text-headline-sm flex items-center justify-center shadow-sm">
                    JT
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Jessica Taylor (Tutor)
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Math Foundations
                    </span>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-outline shrink-0">
                  Yesterday
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 pl-14">
                Emma solved the equivalent fractions puzzle today with no hints!
              </p>
              <div className="flex items-center justify-end pl-14">
                <span className="material-symbols-outlined text-outline text-[20px]">
                  chevron_right
                </span>
              </div>
            </div>

            {/* Row 3: Admin & Billing */}
            <div
              onClick={() => {
                setActiveChatTitle('Admin & Billing');
                setActiveChatSubtitle('Accounts Desk');
                setActiveTab('thread');
              }}
              className="flex flex-col gap-2 p-4 bg-surface-container-lowest rounded-lg shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer active:scale-[0.99] border border-outline-variant/10"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center shadow-sm">
                    A
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Admin & Billing
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      Accounts Desk
                    </span>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-outline shrink-0">
                  Mon
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 pl-14">
                Your Term 3 receipt has been processed. Thank you!
              </p>
              <div className="flex items-center justify-end pl-14">
                <span className="material-symbols-outlined text-outline text-[20px]">
                  chevron_right
                </span>
              </div>
            </div>
          </div>

          {/* Quick Tip Banner */}
          <div className="flex items-center gap-3 p-3.5 bg-surface-container rounded-lg border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
              tips_and_updates
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tutors typically share review feedback within 2 hours after every completed session.
            </p>
          </div>
        </section>
      )}

      {/* SECTION 2: CONVERSATION THREAD PREVIEW */}
      {activeTab === 'thread' && (
        <section
          id="view-thread"
          className="flex flex-col bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden transition-opacity duration-200 border border-outline-variant/15"
        >
          {/* Thread Header */}
          <div className="flex items-center justify-between p-4 bg-surface-container-low shadow-sm border-b border-surface-container">
            <div className="flex items-center gap-3 min-w-0">
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 -ml-1 cursor-pointer"
                onClick={() => setActiveTab('inbox')}
                aria-label="Back to inbox"
              >
                <span className="material-symbols-outlined text-[20px]">
                  arrow_back
                </span>
              </button>
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center shadow-sm">
                FF
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                  {activeChatTitle}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {activeChatSubtitle}
                </span>
              </div>
            </div>
            <button
              aria-label="Thread options"
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                more_vert
              </span>
            </button>
          </div>

          {/* Context Badge & Date Pip */}
          <div className="flex flex-col items-center gap-2 pt-4 px-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm shadow-sm">
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                notifications_active
              </span>
              Assessment reminder
            </span>
            <span className="font-label-sm text-label-sm text-outline">Today</span>
          </div>

          {/* Chat Bubbles Stream */}
          <div className="flex flex-col gap-3 p-4 min-h-[260px]">
            {messages.map((msg, index) => {
              const isParent = msg.sender === 'parent';
              return (
                <div
                  key={msg.id || index}
                  className={`flex flex-col ${
                    isParent
                      ? 'items-end self-end max-w-[85%] gap-1'
                      : 'items-start max-w-[85%] gap-1'
                  }`}
                >
                  <div
                    className={`p-3.5 shadow-sm ${
                      isParent
                        ? 'bg-primary text-on-primary rounded-2xl rounded-tr-sm'
                        : 'bg-surface-container-high text-on-surface rounded-2xl rounded-tl-sm'
                    }`}
                  >
                    <p className="font-body-md text-body-md leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${
                      isParent ? 'pr-1' : 'pl-1'
                    }`}
                  >
                    <span className="font-body-sm text-body-sm text-outline">
                      {msg.timestamp}
                    </span>
                    {isParent && (
                      <span className="material-symbols-outlined text-primary text-[14px]">
                        done_all
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Embedded Bottom Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-surface-container-low flex items-center gap-2 border-t border-surface-container"
          >
            <button
              type="button"
              aria-label="Add attachment"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                add_circle
              </span>
            </button>
            <div className="flex-1 relative flex items-center">
              <input
                id="message-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Write a message..."
                className="w-full py-2.5 pl-4 pr-10 rounded-full bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-inner outline-none transition-all placeholder:text-outline border border-outline-variant/20 focus:border-primary"
              />
              <button
                type="button"
                aria-label="Add emoji"
                onClick={() => setInputMessage((prev) => prev + ' 😊')}
                className="absolute right-3 text-outline hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  sentiment_satisfied
                </span>
              </button>
            </div>
            <button
              type="submit"
              aria-label="Send message"
              className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform shrink-0 hover:bg-primary-container cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
            </button>
          </form>
        </section>
      )}
    </div>
  );
};
