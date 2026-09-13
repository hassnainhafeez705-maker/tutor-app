import React, { useState } from 'react';

interface BookClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (bookingTitle: string) => void;
}

export const BookClassModal: React.FC<BookClassModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [child, setChild] = useState('Emma');
  const [subject, setSubject] = useState('Fractions & Decimals');
  const [timeSlot, setTimeSlot] = useState('Tuesday 4:00 PM');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`${subject} for ${child} (${timeSlot})`);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-3xl p-6 w-full max-w-md shadow-2xl border border-outline-variant/30 animate-in fade-in slide-in-from-bottom-6 duration-200">
        <div className="flex justify-between items-start pb-3 border-b border-surface-container">
          <div>
            <h3 className="font-headline-sm text-on-surface">Book a Class</h3>
            <p className="font-body-sm text-on-surface-variant mt-0.5">
              Select student and subject session
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              Learner
            </label>
            <select
              value={child}
              onChange={(e) => setChild(e.target.value)}
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none"
            >
              <option value="Emma">Emma Johnson (Year 4)</option>
              <option value="Oliver">Oliver Williams (Year 6)</option>
              <option value="Sophie">Sophie Baker (Year 2)</option>
            </select>
          </div>

          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              Subject Focus
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none"
            >
              <option value="Fractions Foundations">Fractions Foundations (Math)</option>
              <option value="Multiplication & Mental Math">Multiplication & Mental Math</option>
              <option value="Creative Storycraft">Creative Storycraft (English)</option>
              <option value="Phonics & Early Numeracy">Phonics & Early Numeracy</option>
            </select>
          </div>

          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              Preferred Time Slot
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none"
            >
              <option value="Monday 3:30 PM">Monday 3:30 PM (Studio 1)</option>
              <option value="Wednesday 4:00 PM">Wednesday 4:00 PM (Studio 3)</option>
              <option value="Friday 3:30 PM">Friday 3:30 PM (Studio 1)</option>
              <option value="Saturday 10:00 AM">Saturday 10:00 AM (Studio 1)</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  <span>Confirming session...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">
                    check_circle
                  </span>
                  <span>Confirm Booking</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface AddChildModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, year: string, school: string) => void;
}

export const AddChildModal: React.FC<AddChildModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [name, setName] = useState('');
  const [yearGroup, setYearGroup] = useState('Year 3');
  const [school, setSchool] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name.trim(), yearGroup, school.trim() || "St Michael's Primary");
    setName('');
    setSchool('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-3xl p-6 w-full max-w-md shadow-2xl border border-outline-variant/30 animate-in fade-in slide-in-from-bottom-6 duration-200">
        <div className="flex justify-between items-start pb-3 border-b border-surface-container">
          <div>
            <h3 className="font-headline-sm text-on-surface">Add a Child</h3>
            <p className="font-body-sm text-on-surface-variant mt-0.5">
              Register a new student profile
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              Child's Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Leo Johnson"
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              School Year
            </label>
            <select
              value={yearGroup}
              onChange={(e) => setYearGroup(e.target.value)}
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none"
            >
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
              <option value="Year 5">Year 5</option>
              <option value="Year 6">Year 6</option>
            </select>
          </div>

          <div>
            <label className="font-label-md text-on-surface block mb-1.5">
              School Name
            </label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="e.g. Sunnybank Infants"
              className="w-full p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-body-md outline-none focus:border-primary"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Add Child Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
