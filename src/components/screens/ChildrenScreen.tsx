import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../../types';
import { initialChildren } from '../../data';

interface ChildrenScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onAddChild?: () => void;
}

export const ChildrenScreen: React.FC<ChildrenScreenProps> = ({
  onNavigate,
  onAddChild,
}) => {
  const [children] = useState(initialChildren);

  return (
    <div className="flex flex-col w-full gap-space-lg pb-6">
      {/* Header & Introductions */}
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
            My Family
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
          My children
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant italic opacity-90">
          Keep an eye on their learning journey.
        </p>
      </div>

      {/* Section Title & Add Child CTA */}
      <div className="flex items-center justify-between gap-space-sm bg-surface-container-low p-space-md rounded-2xl shadow-sm border border-outline-variant/10">
        <div className="flex flex-col min-w-0">
          <span className="font-headline-sm text-headline-sm text-on-surface truncate">
            Meet the learners
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
            Every child has their own kind of brilliant.
          </span>
        </div>
        <button
          onClick={() => onAddChild?.()}
          className="shrink-0 flex items-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary px-4 py-2.5 rounded-full shadow-sm active:scale-95 transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span className="font-label-md text-label-md">Add a child</span>
        </button>
      </div>

      {/* Children Stack */}
      <div className="flex flex-col gap-space-md">
        {children.map((child, index) => (
          <div
            key={child.id}
            className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-[0_4px_20px_-2px_rgba(78,54,42,0.06)] border border-outline-variant/15 flex flex-col gap-space-md transition-all duration-200"
          >
            {/* Child Top Row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-space-md">
                <div
                  className={`w-14 h-14 rounded-full ${child.avatarBg} ${child.avatarText} flex items-center justify-center font-headline-sm text-headline-sm shadow-md ring-4 ${child.ringColor}`}
                >
                  {child.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    {child.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {child.yearGroup} · {child.school}
                  </span>
                </div>
              </div>
              <button
                aria-label={`More options for ${child.name}`}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container text-outline hover:text-on-surface transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">
                  more_horiz
                </span>
              </button>
            </div>

            {/* Subject Tag Pills */}
            <div className="flex flex-wrap gap-1.5">
              {child.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex flex-col gap-space-sm pt-1">
              {/* Math */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center font-label-md text-label-md">
                  <span className="text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Mathematics
                  </span>
                  <span className="text-primary font-bold">{child.mathProgress}%</span>
                </div>
                <div className="w-full h-2.5 bg-primary-fixed rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${child.mathProgress}%` }}
                  />
                </div>
              </div>

              {/* English */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center font-label-md text-label-md">
                  <span className="text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    English
                  </span>
                  <span className="text-secondary font-bold">
                    {child.englishProgress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-secondary-fixed rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-700"
                    style={{ width: `${child.englishProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Card CTA */}
            {/* Spec: Element (xpath: //button[contains(., 'View profile')][1]) → Reports — Learning Journey (push transition) */}
            <button
              onClick={() => onNavigate('reports', 'push')}
              className="w-full mt-1 bg-surface-container hover:bg-surface-container-high active:scale-[0.98] text-on-surface py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all group cursor-pointer"
              type="button"
            >
              <span className="font-label-md text-label-md">View profile</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Warm Support Banner with Fairybread Sprinkles Detail */}
      <div className="bg-surface-container-low rounded-2xl p-space-md flex items-center gap-space-md border border-outline-variant/10">
        <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[22px]">
            auto_awesome
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Weekly tutor summaries updated
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Check individual progress notes for tutor tips & practice ideas.
          </span>
        </div>
      </div>
    </div>
  );
};
