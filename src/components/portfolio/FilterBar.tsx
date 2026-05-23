interface FilterBarProps {
  category: string;
  setCategory: (val: string) => void;
  budget: string;
  setBudget: (val: string) => void;
  duration: string;
  setDuration: (val: string) => void;
  onReset: () => void;
  showingCount: number;
}

export default function FilterBar({
  category,
  setCategory,
  budget,
  setBudget,
  duration,
  setDuration,
  onReset,
  showingCount
}: FilterBarProps) {
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Office'];
  const budgets = [
    { label: 'All Budgets', value: 'All' },
    { label: 'Under ₹10L', value: 'under-10' },
    { label: '₹10L–₹25L', value: '10-25' },
    { label: '₹25L–₹50L', value: '25-50' },
    { label: '₹50L+', value: 'over-50' }
  ];
  const durations = [
    { label: 'All Durations', value: 'All' },
    { label: 'Under 3 Months', value: 'under-3' },
    { label: '3–6 Months', value: '3-6' },
    { label: '6–12 Months', value: '6-12' },
    { label: '1 Year+', value: 'over-12' }
  ];

  return (
    <div
      id="rds-portfolio-filters"
      className="pb-6 border-b border-[var(--color-gold)]/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 select-none"
    >
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        
        {/* Category Dropdown */}
        <div className="flex flex-col space-y-1.5 min-w-[150px]">
          <span className="text-[10px] font-light uppercase tracking-wider text-[var(--text-muted)] font-jost">
            Category
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent border-b border-[var(--border-color)] text-[13px] font-light font-jost py-1.5 focus:outline-none focus:border-[var(--color-gold)] text-[var(--text-color)] cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-[var(--card-color)] text-[var(--text-color)]">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="flex flex-col space-y-1.5 min-w-[150px]">
          <span className="text-[10px] font-light uppercase tracking-wider text-[var(--text-muted)] font-jost">
            Budget
          </span>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="bg-transparent border-b border-[var(--border-color)] text-[13px] font-light font-jost py-1.5 focus:outline-none focus:border-[var(--color-gold)] text-[var(--text-color)] cursor-pointer"
          >
            {budgets.map((b) => (
              <option key={b.value} value={b.value} className="bg-[var(--card-color)] text-[var(--text-color)]">
                {b.label}
              </option>
            ))}
          </select>
        </div>

        {/* Duration Dropdown */}
        <div className="flex flex-col space-y-1.5 min-w-[150px]">
          <span className="text-[10px] font-light uppercase tracking-wider text-[var(--text-muted)] font-jost">
            Duration
          </span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-transparent border-b border-[var(--border-color)] text-[13px] font-light font-jost py-1.5 focus:outline-none focus:border-[var(--color-gold)] text-[var(--text-color)] cursor-pointer"
          >
            {durations.map((d) => (
              <option key={d.value} value={d.value} className="bg-[var(--card-color)] text-[var(--text-color)]">
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Trigger Link */}
        <button
          onClick={onReset}
          className="text-xs font-light text-[var(--color-gold)] hover:text-[var(--color-gold-light)] font-jost transition-colors underline underline-offset-4 cursor-pointer mt-5 md:mt-4 self-start"
        >
          Reset Filters
        </button>
      </div>

      {/* Dyn Count Label */}
      <div className="text-[12px] font-light font-jost tracking-widest text-[var(--text-muted)] uppercase self-end md:self-center">
        Showing <span className="text-[var(--color-gold)] font-medium">{showingCount}</span> project{showingCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
