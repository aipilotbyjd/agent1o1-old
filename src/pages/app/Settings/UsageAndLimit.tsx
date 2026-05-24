import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Info,
  RefreshCw,
} from 'lucide-react';

const timelineLabels = ['01 May', '03 May', '05 May', '07 May', '09 May', '11 May', '13 May', '15 May', '17 May', '19 May', '21 May', '23 May'];

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

const usageLogs = [
  {
    date: 'May 13, 2026 • 10:47 PM',
    category: 'Agent Chats',
    name: 'Personal Assistant',
    amount: '-27',
    hasAction: true,
    expandable: true,
    categoryTone: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    date: 'May 13, 2026 • 10:08 PM',
    category: 'Agent Chats',
    name: 'Personal Assistant',
    amount: '-56',
    hasAction: true,
    expandable: true,
    categoryTone: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
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
  const [showFilters, setShowFilters] = useState(false);
  const [details, setDetails] = useState(false);
  const [category, setCategory] = useState('All categories');
  const [expandedRow, setExpandedRow] = useState<number | null>(0);

  return (
    <div className='min-h-screen text-slate-900'>
      <div className='mx-auto flex w-full flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8'>
        <div className='rounded-[28px] border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-6 lg:flex lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-blue-600'>Usage & Limits</p>
            <h1 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>
              Your Usage & Limits
            </h1>
            <p className='mt-3 text-sm leading-6 text-slate-600 sm:text-base'>
              Keep your credits, attachments, and audit activity in one premium light-theme workspace.
            </p>
          </div>
          <div className='mt-4 flex items-center gap-3 lg:mt-0'>
            <div className='rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
              Enterprise plan
            </div>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500'
            >
              Upgrade
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className='grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]'>
          <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div>
                <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500'>Credits remaining</p>
                <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>5,617 remaining of 5,000</h2>
              </div>
              <div className='inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700'>
                100% remaining (0 used)
              </div>
            </div>
            <div className='mt-5 h-2 overflow-hidden rounded-full bg-slate-100'>
              <div className='h-full rounded-full bg-blue-600' style={{ width: '100%' }} />
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
                className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500'
              >
                Upgrade
              </button>
            </div>
          </div>

          <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
            <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500'>Credit overage</p>
            <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>0 used of 10,000</h2>
            <p className='mt-2 text-sm font-semibold text-slate-700'>$0.00 spent</p>
            <p className='mt-4 text-sm leading-6 text-slate-600'>
              Turn on credit overage to pay for extra usage ($0.007/credit).
            </p>
            <a href='#' className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-600'>
              Manage overage settings
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
            <div>
              <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500'>Credit usage May 2026</p>
              <h2 className='mt-3 text-3xl font-semibold tracking-tight text-slate-900'>83 credits</h2>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <div className='relative'>
                <select
                  defaultValue='month'
                  className='appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 pr-10 text-sm font-semibold text-slate-800 outline-none focus:border-blue-300'
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
                className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:border-blue-300'
              >
                <RefreshCw size={16} />
              </button>
            </div>
          </div>

          <div className='mt-6 rounded-[22px] border border-slate-200 bg-slate-50 p-4 sm:p-5'>
            <div className='relative h-[280px] overflow-hidden rounded-[18px] bg-white sm:h-[320px]'>
              <div className='absolute inset-x-3 top-6 bottom-24 rounded-[20px] border border-slate-200' />
              <div className='absolute inset-x-0 bottom-12 top-6 grid grid-cols-12 gap-3 px-3'>
                {timelineLabels.map((label) => {
                  const isSpike = label === '13 May';
                  return (
                    <div key={label} className='flex flex-col items-center justify-end gap-3'>
                      <div className='flex h-full w-full items-end justify-center'>
                        <div className='group relative flex w-full justify-center'>
                          {isSpike ? (
                            <>
                              <div className='absolute -top-9 rounded-full bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white opacity-0 transition group-hover:opacity-100'>
                                83 credits
                              </div>
                              <div className='h-[150px] w-full rounded-t-[14px] bg-gradient-to-t from-blue-700 to-blue-400' />
                            </>
                          ) : (
                            <div className='h-[16px] w-full rounded-t-[14px] bg-slate-100' />
                          )}
                        </div>
                      </div>
                      <div className='text-[11px] font-semibold text-slate-500'>{label}</div>
                    </div>
                  );
                })}
              </div>
              <div className='absolute inset-x-3 bottom-12 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-24 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-36 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-48 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-60 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-72 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-84 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-96 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-108 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-120 h-px bg-slate-200' />
              <div className='absolute inset-x-3 bottom-132 h-px bg-slate-200' />
            </div>
          </div>
        </div>

        <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-4'>
              <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500'>Attachments</p>
              <button
                type='button'
                className='inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-blue-300'
              >
                Add image
                <ArrowUpRight size={14} />
              </button>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
              {attachmentImages.map((image) => (
                <div key={image.src} className='group relative overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50'>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]'
                  />
                  <div className='absolute inset-x-3 bottom-3 flex items-center justify-between gap-3'>
                    <div>
                      <p className='text-sm font-semibold text-white'>Usage screenshot</p>
                      <p className='text-xs text-slate-100'>Replace src with your own image</p>
                    </div>
                    <button type='button' className='rounded-full bg-white/90 p-2 text-slate-700 shadow-sm'>
                      <Info size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500'>Credit usage logs</p>
            </div>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setShowFilters((value) => !value)}
                className='inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-blue-300'
              >
                <Filter size={16} />
                Filters
                <ChevronDown size={16} className='text-slate-500' />
              </button>
              {showFilters && (
                <div className='absolute right-0 top-full z-20 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl'>
                  <div className='flex items-center justify-between gap-4'>
                    <label className='text-sm font-semibold text-slate-700'>Detailed view</label>
                    <button
                      type='button'
                      onClick={() => setDetails((value) => !value)}
                      className={`relative h-7 w-12 rounded-full transition ${details ? 'bg-blue-600' : 'bg-slate-200'}`}
                      aria-pressed={details}
                    >
                      <span
                        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${details ? 'left-6' : 'left-1'}`}
                      />
                    </button>
                  </div>
                  <div className='mt-4'>
                    <label className='mb-2 block text-sm font-semibold text-slate-700'>Category</label>
                    <select
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      className='w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300'
                    >
                      <option>All categories</option>
                      <option>Agent Chats</option>
                      <option>Gifted Credits</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='mt-5 overflow-hidden rounded-[22px] border border-slate-200'>
            <div className='grid grid-cols-[48px_minmax(170px,1.2fr)_140px_180px_110px_110px] gap-3 bg-slate-50 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500'>
              <div />
              <div>Date</div>
              <div>Category</div>
              <div>Name</div>
              <div className='text-right'>Amount</div>
              <div>Actions</div>
            </div>
            <div className='divide-y divide-slate-200 bg-white'>
              {usageLogs.map((row, index) => (
                <div key={row.date} className='px-4 py-3 transition hover:bg-slate-50'>
                  <div className='grid grid-cols-[48px_minmax(170px,1.2fr)_140px_180px_110px_110px] items-center gap-3'>
                    <div>
                      {row.expandable ? (
                        <button
                          type='button'
                          onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                          className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700'
                        >
                          <ChevronRight size={16} className={expandedRow === index ? 'rotate-90' : ''} />
                        </button>
                      ) : (
                        <div className='h-8 w-8' />
                      )}
                    </div>
                    <div className='text-sm text-slate-700'>{row.date}</div>
                    <div>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${row.categoryTone}`}>{row.category}</span>
                    </div>
                    <div className='text-sm text-slate-800'>{row.name}</div>
                    <div className={`text-right text-sm font-semibold ${row.category === 'Gifted Credits' ? 'text-emerald-700' : 'text-slate-900'}`}>{row.amount}</div>
                    <div>
                      {row.hasAction ? (
                        <a href='#' className='inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-600'>
                          View
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className='text-sm text-slate-300'>—</span>
                      )}
                    </div>
                  </div>
                  {expandedRow === index && row.expandable && (
                    <div className='mt-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600'>
                      Expanded usage details for this activity are available in the audit trail.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-3'>
              <span className='text-sm text-slate-600'>Rows per page</span>
              <div className='relative'>
                <select
                  defaultValue='20'
                  className='appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 pr-10 text-sm font-semibold text-slate-900 outline-none focus:border-blue-300'
                >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                </select>
                <ChevronDown size={16} className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500' />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-sm font-semibold text-slate-900'>Page 1</span>
              <div className='inline-flex items-center gap-2'>
                <button type='button' className='inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:border-blue-300'>
                  <ChevronLeft size={16} />
                </button>
                <button type='button' className='inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:border-blue-300'>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageAndLimitPage;
