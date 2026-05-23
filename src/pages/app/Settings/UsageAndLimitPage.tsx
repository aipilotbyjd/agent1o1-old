import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Info,
  RefreshCw,
} from 'lucide-react';
import Chart from '@/components/utils/Chart';

const timelineLabels = ['01 May', '03 May', '05 May', '07 May', '09 May', '11 May', '13 May', '15 May', '17 May', '19 May', '21 May', '23 May'];
const creditUsageSeries = [10, 12, 14, 16, 18, 20, 24, 22, 26, 28, 31, 83];
const totalTransactionsSeries = [1000, 3000, 2000, 7000, 5000, 8000, 7500, 6000, 4000, 6500, 7000, 7800];

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: { show: false },
    animations: { enabled: false },
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      columnWidth: '44%',
    },
  },
  stroke: {
    show: true,
    curve: 'straight',
    width: [0, 3],
    colors: ['transparent', '#f59e42'],
  },
  colors: ['#10b981', '#f59e42'],
  dataLabels: {
    enabled: true,
    enabledOnSeries: [0],
    style: {
      colors: ['#0f172a'],
      fontSize: '11px',
      fontWeight: 700,
    },
    offsetY: -10,
  },
  grid: {
    show: true,
    borderColor: 'rgba(148, 163, 184, 0.18)',
    strokeDashArray: 0,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  },
  tooltip: {
    theme: 'light',
    y: [
      { formatter: (value) => `${value} credits` },
      { formatter: (value) => `$${value.toLocaleString()}` },
    ],
  },
  xaxis: {
    categories: timelineLabels,
    labels: {
      style: { colors: '#64748b', fontSize: '11px', fontWeight: 600 },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: [
    {
      title: { text: 'Units Sold', style: { color: '#0f172a', fontWeight: 700 } },
      labels: { style: { colors: '#64748b', fontSize: '11px' } },
      min: 0,
      max: 160,
      tickAmount: 4,
    },
    {
      opposite: true,
      title: { text: 'Total Transactions', style: { color: '#f59e42', fontWeight: 700 } },
      labels: { style: { colors: '#f59e42', fontSize: '11px' } },
      min: 0,
      max: 8000,
      tickAmount: 4,
      formatter: (value) => `$${value.toLocaleString()}`,
    },
  ],
  legend: { show: false },
};

const attachmentImages = [
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    alt: 'Workspace dashboard preview',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    alt: 'Analytics screenshot preview',
  },
];

interface LogItem {
  id: string;
  date: string;
  category: 'Agent Chats' | 'Gifted Credits';
  name: string;
  amount: string;
  hasAction: boolean;
  expandable: boolean;
  categoryTone: string;
}

const INITIAL_USAGE_LOGS: LogItem[] = [
  {
    id: '1',
    date: 'May 13, 2026 • 10:47 PM',
    category: 'Agent Chats',
    name: 'Personal Assistant',
    amount: '-27',
    hasAction: true,
    expandable: true,
    categoryTone: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: '2',
    date: 'May 13, 2026 • 10:08 PM',
    category: 'Agent Chats',
    name: 'Personal Assistant',
    amount: '-56',
    hasAction: true,
    expandable: true,
    categoryTone: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: '3',
    date: 'May 13, 2026 • 09:52 PM',
    category: 'Gifted Credits',
    name: '—',
    amount: '+700',
    hasAction: false,
    expandable: false,
    categoryTone: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
];

const UsageAndLimitPage = () => {
  // Page Core Interactive UI States
  const [showFilters, setShowFilters] = useState(false);
  const [details, setDetails] = useState(false);
  const [category, setCategory] = useState('All categories');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Dynamic Table & Pagination States
  const [logs, setLogs] = useState<LogItem[]>(INITIAL_USAGE_LOGS);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Modal Form Dynamic Controlled Inputs State
  const [newCategory, setNewCategory] = useState<'Agent Chats' | 'Gifted Credits'>('Agent Chats');
  const [newName, setNewName] = useState('');
  const [newAmount, setNewAmount] = useState('');

  // Handler function to process data formatting and append row to state
  const handleAddLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAmount || isNaN(Number(newAmount))) return;

    const numericAmount = Number(newAmount);
    const now = new Date();
    
    // Generates localized timestamp layout string
    const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) + 
      ' • ' + 
      now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const newLogItem: LogItem = {
      id: crypto.randomUUID(),
      date: formattedDate,
      category: newCategory,
      name: newCategory === 'Gifted Credits' ? '—' : newName || 'Assistant AI Node',
      amount: numericAmount >= 0 ? `+${numericAmount}` : `${numericAmount}`,
      hasAction: newCategory === 'Agent Chats',
      expandable: newCategory === 'Agent Chats',
      categoryTone: newCategory === 'Gifted Credits' 
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };

    setLogs((prev) => [newLogItem, ...prev]);
    
    // Flush input control strings
    setNewName('');
    setNewAmount('');
    setCurrentPage(1); 
  };

  // Memoized client filter logic pipeline
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      if (category === 'All categories') return true;
      return log.category === category;
    });
  }, [logs, category]);

  // Pagination calculation vectors
  const totalPages = Math.ceil(filteredLogs.length / rowsPerPage) || 1;
  const pageStart = filteredLogs.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const pageEnd = filteredLogs.length === 0 ? 0 : Math.min(currentPage * rowsPerPage, filteredLogs.length);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedLogs = useMemo(() => {
    const startIdx = (currentPage - 1) * rowsPerPage;
    return filteredLogs.slice(startIdx, startIdx + rowsPerPage);
  }, [filteredLogs, currentPage, rowsPerPage]);

  return (
  <main className="min-h-0 flex-1 overflow-y-auto">
    <div className='min-h-screen text-slate-900 pb-12'>
      <div className='mx-auto flex w-full flex-col gap-6 px-0 py-2 lg:px-8 max-w-[1600px]'>
        
        {/* Banner Section */}
        <div className=' px-0 py-0 sm:px-6 lg:flex lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <h1 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>
              Your Usage & Limits
            </h1>
            <p className='mt-3 text-sm leading-6 text-slate-600 sm:text-base'>
              Keep your credits, attachments, and audit activity in one premium light-theme workspace.
            </p>
          </div>
         
        </div>

        {/* Info Grid Analytics Row */}
        <div className='grid gap-4 xl:grid-cols-[1fr_1fr]'>
          <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-6'>
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div>
                <p className='text-[14px] font-bold capitalize  text-slate-500'>Credits remaining</p>
                <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>5,617 remaining of 5,000</h2>
              </div>
              <div className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700'>
                100% remaining (0 used)
              </div>
            </div>
            <div className='mt-5 h-2 overflow-hidden rounded-full bg-slate-100'>
              <div className='h-full rounded-full bg-emerald-600' style={{ width: '100%' }} />
            </div>
            <div className='mt-5 flex flex-wrap items-center justify-between gap-3'>
              <div className='flex items-center gap-2 text-sm text-slate-600'>
                <span>Resets to 5,000 credits on Jun 1, 2026</span>
                <button type='button' aria-label='More info' className='rounded-full bg-slate-100 p-1 text-slate-500 hover:bg-slate-200'>
                  <Info size={15} />
                </button>
              </div>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500'
              >
                Upgrade
              </button>
            </div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-6'>
            <p className='text-[14px] font-bold capitalize  text-slate-500'>Credit overage</p>
            <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>0 used of 10,000</h2>
            <p className='mt-2 text-sm font-semibold text-slate-700'>$0.00 spent</p>
            <p className='mt-4 text-sm leading-6 text-slate-600'>
              Turn on credit overage to pay for extra usage ($0.007/credit).
            </p>
            <a href='#' className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-600'>
              Manage overage settings
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Timeline Graphic Panel */}
        <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <p className='text-[14px] font-bold capitalize  text-slate-500'>Credit usage May 2026</p>
              <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>83 credits</h2>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <div className='relative'>
                <select
                  defaultValue='month'
                  className='appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 pr-10 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-300'
                >
                  <option value='month'>Month</option>
                  <option value='week'>Week</option>
                </select>
                <ChevronDown size={16} className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500' />
              </div>
              <div className='inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800'>
                <button type='button' aria-label='Previous period' className='rounded-md p-1 text-slate-500'>
                  <ChevronLeft size={16} />
                </button>
                <span>May 2026</span>
                <button type='button' aria-label='Next period' className='rounded-md p-1 text-slate-300' disabled>
                  <ChevronRight size={16} />
                </button>
              </div>
              <button
                type='button'
                aria-label='Refresh usage chart'
                className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:border-emerald-300'
              >
                <RefreshCw size={16} />
              </button>
            </div>
          </div>

          <div className='mt-6 rounded-[22px] border border-slate-200 bg-slate-50 p-4 sm:p-5'>
            <div className='rounded-[20px] bg-white p-3 sm:p-4'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500'>Average trend</p>
                  <p className='mt-1 text-sm text-slate-600'>Smooth usage curve for the month</p>
                </div>
                <div className='rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700'>
                  +38% vs prior period
                </div>
              </div>

              <div className='mt-4 overflow-hidden rounded-[18px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3 sm:p-4'>
                <div className='w-full'>
                  <Chart
                    type='bar'
                    height={320}
                    width='100%'
                    options={chartOptions}
                    series={[
                      { name: 'Units Sold', type: 'bar', data: creditUsageSeries },
                      { name: 'Total Transactions', type: 'line', data: totalTransactionsSeries },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC LOGS TABLE BLOCK INTEGRATED WITH ROW ADDITION INJECTOR */}
        <div className='rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 space-y-6'>
          
          {/* Header Row Actions Controls */}
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-[14px] font-bold capitalize  text-slate-500'>Credit usage logs</p>
            </div>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setShowFilters((value) => !value)}
                className='inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-emerald-300'
              >
                <Filter size={16} />
                Filters
                <ChevronDown size={16} className={`text-slate-500 transition-transform duration-150 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              {showFilters && (
                <div className='absolute right-0 top-full z-20 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl space-y-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <label className='text-sm font-semibold text-slate-700 cursor-pointer' htmlFor='table-details-toggle'>Detailed view</label>
                    <button
                      id='table-details-toggle'
                      type='button'
                      onClick={() => setDetails((value) => !value)}
                      className={`relative h-7 w-12 rounded-full transition ${details ? 'bg-emerald-600' : 'bg-slate-200'}`}
                      aria-pressed={details}
                    >
                      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${details ? 'left-6' : 'left-1'}`} />
                    </button>
                  </div>
                  <div>
                    <label className='mb-2 block text-sm font-semibold text-slate-700'>Category</label>
                    <select
                      value={category}
                      onChange={(event) => { setCategory(event.target.value); setCurrentPage(1); }}
                      className='w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-300'
                    >
                      <option value='All categories'>All categories</option>
                      <option value='Agent Chats'>Agent Chats</option>
                      <option value='Gifted Credits'>Gifted Credits</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DYNAMIC ROW INSERTION COMPONENT DRAWER INLINE PANEL */}
          <div className='bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4'>
            <form onSubmit={handleAddLogSubmit} className='grid grid-cols-1 sm:grid-cols-4 gap-3 items-end'>
              <div className='flex flex-col gap-1.5'>
                <label className='text-[11px] font-bold capitalize  tracking-wider text-black-500'>Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className='w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 outline-none focus:border-emerald-400'
                >
                  <option value="Agent Chats">Agent Chats</option>
                  <option value="Gifted Credits">Gifted Credits</option>
                </select>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-[11px] font-bold capitalize  tracking-wider text-black-500'>Entity Name</label>
                <input
                  type='text'
                  placeholder={newCategory === 'Gifted Credits' ? '—' : 'e.g. Code Reviewer Agent'}
                  disabled={newCategory === 'Gifted Credits'}
                  value={newCategory === 'Gifted Credits' ? '' : newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className='w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 outline-none focus:border-emerald-400 disabled:bg-slate-100 disabled:text-slate-400'
                />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-[11px] font-bold capitalize  tracking-wider text-black-500'>Amount Balance</label>
                <input
                  type='number'
                  placeholder={newCategory === 'Gifted Credits' ? '700' : '-45'}
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className='w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 font-mono outline-none focus:border-emerald-400'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition h-[34px]'
              >
                Add Log Entry
              </button>
            </form>
          </div>

          {/* MAIN CONTAINER LAYOUT DATA GRAPH MARKUP VIEW */}
          <div className='mt-5 overflow-hidden rounded-[22px] border border-slate-200'>
            <div className='grid grid-cols-[48px_minmax(170px,1.2fr)_140px_180px_110px_110px] gap-3 bg-slate-50 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 select-none'>
              <div />
              <div>Date</div>
              <div>Category</div>
              <div>Name</div>
              <div className='text-right'>Amount</div>
              <div className='pl-3'>Actions</div>
            </div>
            <div className='divide-y divide-slate-200 bg-white'>
              {paginatedLogs.length === 0 ? (
                <div className='p-8 text-center text-xs text-slate-400 font-medium'>
                  No deployment workspace activity logs found matching the filters.
                </div>
              ) : (
                paginatedLogs.map((row) => {
                  const isExpanded = expandedRow === row.id;
                  return (
                    <div key={row.id} className='px-4 py-3 transition hover:bg-slate-50/60'>
                      <div className='grid grid-cols-[48px_minmax(170px,1.2fr)_140px_180px_110px_110px] items-center gap-3'>
                        <div>
                          {row.expandable ? (
                            <button
                              type='button'
                              onClick={() => setExpandedRow(isExpanded ? null : row.id)}
                              className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition'
                            >
                              <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            </button>
                          ) : (
                            <div className='h-8 w-8' />
                          )}
                        </div>
                        <div className='text-sm text-slate-700 font-normal whitespace-nowrap'>{row.date}</div>
                        <div>
                          <span className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-semibold ${row.categoryTone}`}>
                            {row.category}
                          </span>
                        </div>
                        <div className='text-sm text-slate-800 truncate pr-2'>{row.name}</div>
                        <div className={`text-right text-sm font-mono tracking-tight font-semibold ${row.category === 'Gifted Credits' ? 'text-emerald-700' : 'text-slate-900'}`}>
                          {row.amount}
                        </div>
                        <div className='pl-3'>
                          {row.hasAction ? (
                            <a href='#' className='inline-flex items-center gap-0.5 text-sm font-semibold text-emerald-700 hover:text-emerald-600'>
                              View
                              <ArrowUpRight size={14} />
                            </a>
                          ) : (
                            <span className='text-sm text-slate-300'>—</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Detailed View Options Controlled Via Both Row Expanse and Global Filter Toggle */}
                      {((isExpanded && row.expandable) || details) && (
                        <div className='mt-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-xs text-slate-500 animate-in fade-in slide-in-from-top-1 duration-150'>
                          <span className="font-semibold text-slate-700 block mb-0.5">Execution Log ID: {row.id}</span>
                          Expanded usage details and transaction metadata variables for this automation pipeline cycle are verified within backend workspace cluster audit tables.
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* TABLE FOOTER CONTROL AND DYNAMIC PAGINATION ENGINE LINKS */}
          <div className='mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-3'>
              <span className='text-sm text-slate-600'>Rows per page</span>
              <div className='relative'>
                <select
                  value={rowsPerPage}
                  onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                  className='appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 pr-10 text-sm font-semibold text-slate-900 outline-none focus:border-emerald-300 cursor-pointer'
                >
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                </select>
                <ChevronDown size={16} className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500' />
              </div>
            </div>
            
            <div className='flex flex-col gap-2 sm:items-end'>
              <span className='text-sm font-semibold text-slate-900'>
                Showing {pageStart}-{pageEnd} of {filteredLogs.length} logs
              </span>
              <div className='flex items-center gap-3'>
                <span className='text-sm text-slate-600'>
                  Page {currentPage} of {totalPages}
                </span>
                <div className='inline-flex items-center gap-2'>
                  <button 
                    type='button' 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                      currentPage === 1 
                        ? 'border-slate-100 bg-white text-slate-200 cursor-not-allowed' 
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-emerald-300'
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    type='button'
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                      currentPage === totalPages 
                        ? 'border-slate-100 bg-white text-slate-200 cursor-not-allowed' 
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-emerald-300'
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
  );
};

export default UsageAndLimitPage;