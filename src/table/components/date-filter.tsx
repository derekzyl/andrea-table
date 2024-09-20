/* eslint-disable @typescript-eslint/no-explicit-any */
// // src/components/Calendar.tsx


// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// interface YearRange {
//   start: number;
//   end: number;
// }

// interface Day {
//   date: number;
//   month: string;
//   year: number;
// }

// export const CalendarFilter: React.FC = () => {
//   const [yearRange, setYearRange] = useState<YearRange>({
//     start: 2000,
//     end: 2024,
//   });
//   const [selectedYear, setSelectedYear] = useState<number | null>(null);
//   const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
//   const [selectedDays, setSelectedDays] = useState<Day[]>([]);
//   const [dayRange, setDayRange] = useState<{
//     start: Day | null;
//     end: Day | null;
//   }>({ start: null, end: null });

//   const handleYearRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setYearRange({ ...yearRange, [e.target.name]: parseInt(e.target.value) });
//   };

//   const handleYearSelect = (year: number) => {
//     setSelectedYear(year);
//     setSelectedMonth(null); // Reset month and day selections
//     setSelectedDays([]);
//     setDayRange({ start: null, end: null });
//   };

//   const handleMonthSelect = (month: string) => {
//     setSelectedMonth(month);
//     setSelectedDays([]);
//     setDayRange({ start: null, end: null });
//   };

//   const handleDayToggle = (day: number) => {
//     if (!selectedYear || !selectedMonth) return;

//     const newDay = { date: day, month: selectedMonth, year: selectedYear };
//     if (dayRange.start && dayRange.end) {
//       setDayRange({ start: newDay, end: null });
//     } else if (dayRange.start && !dayRange.end) {
//       if (newDay.date < dayRange.start.date) {
//         setDayRange({ start: newDay, end: dayRange.start });
//       } else {
//         setDayRange({ start: dayRange.start, end: newDay });
//       }
//     } else {
//       setDayRange({ start: newDay, end: null });
//     }
//   };

//   const daysInMonth = (year: number, month: number) =>
//     new Date(year, month + 1, 0).getDate();

//   const renderDays = () => {
//     if (!selectedYear || !selectedMonth) return null;

//     const monthIndex = months.indexOf(selectedMonth);
//     const daysCount = daysInMonth(selectedYear, monthIndex);

//     return Array.from({ length: daysCount }, (_, i) => i + 1).map((day) => {
//       const isSelected =
//         (dayRange.start && dayRange.start.date === day) ||
//         (dayRange.end && dayRange.end.date === day) ||
//         (dayRange.start &&
//           dayRange.end &&
//           day > dayRange.start.date &&
//           day < dayRange.end.date);

//       const dayStyle = isSelected ? "bg-blue-500 text-white" : "";

//       return (
//         <button
//           key={day}
//           className={`border p-2 ${dayStyle}`}
//           onClick={() => handleDayToggle(day)}
//         >
//           {day}
//         </button>
//       );
//     });
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <label className="block mb-2">Select Year Range:</label>
//         <div className="flex space-x-4">
//           <input
//             type="number"
//             name="start"
//             value={yearRange.start}
//             onChange={handleYearRangeChange}
//             className="border p-2"
//           />
//           <span>to</span>
//           <input
//             type="number"
//             name="end"
//             value={yearRange.end}
//             onChange={handleYearRangeChange}
//             className="border p-2"
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-2">Select Year:</label>
//         <div className="grid grid-cols-4 gap-4">
//           {Array.from(
//             { length: yearRange.end - yearRange.start + 1 },
//             (_, i) => (
//               <button
//                 key={i}
//                 className={`border p-2 ${
//                   selectedYear === yearRange.start + i
//                     ? "bg-blue-500 text-white"
//                     : ""
//                 }`}
//                 onClick={() => handleYearSelect(yearRange.start + i)}
//               >
//                 {yearRange.start + i}
//               </button>
//             )
//           )}
//         </div>
//       </div>

//       {selectedYear && (
//         <div className="mb-4">
//           <label className="block mb-2">Select Month:</label>
//           <div className="grid grid-cols-3 gap-4">
//             {months.map((month, index) => (
//               <button
//                 key={index}
//                 className={`border p-2 ${
//                   selectedMonth === month ? "bg-blue-500 text-white" : ""
//                 }`}
//                 onClick={() => handleMonthSelect(month)}
//               >
//                 {month}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {selectedYear && selectedMonth && (
//         <div className="mb-4">
//           <label className="block mb-2">Select Days:</label>
//           <div className="grid grid-cols-7 gap-4">{renderDays()}</div>
//         </div>
//       )}
//     </div>
//   );
// };




// import { useEffect, useRef } from 'react';
// import { Transition } from "react-transition-group";
// import './tailwind.css'; // Ensure you have TailwindCSS imported

// const DatePicker: React.FC = () => {
//   const [showDatepicker, setShowDatepicker] = useState(false);
//   const [showFromHourPicker, setShowFromHourPicker] = useState(false);
//   const [showToHourPicker, setShowToHourPicker] = useState(false);
//   const [showFromMinutePicker, setShowFromMinutePicker] = useState(false);
//   const [showToMinutePicker, setShowToMinutePicker] = useState(false);
//   const [timePickerDisabled, setTimePickerDisabled] = useState(true);
//   const [dateFromYmdHis, setDateFromYmdHis] = useState('');
//   const [dateToYmdHis, setDateToYmdHis] = useState('');
//   const [outputDateFromValue, setOutputDateFromValue] = useState('');
//   const [outputDateToValue, setOutputDateToValue] = useState('');
//   const [currentDate, setCurrentDate] = useState<Date | null>(null);
//   const [dateFrom, setDateFrom] = useState<Date | null>(null);
//   const [dateTo, setDateTo] = useState<Date | null>(null);
//   const [endToShow, setEndToShow] = useState('');
//   const [timeMode, setTimeMode] = useState(12);
//   const [hourFromValue, setHourFromValue] = useState(12);
//   const [hourToValue, setHourToValue] = useState(11);
//   const [hour24FromValue, setHour24FromValue] = useState(0);
//   const [hour24ToValue, setHour24ToValue] = useState(23);
//   const [meridiemFrom, setMeridiemFrom] = useState('am');
//   const [meridiemTo, setMeridiemTo] = useState('pm');
//   const [minuteFromValue, setMinuteFromValue] = useState('00');
//   const [minuteToValue, setMinuteToValue] = useState('59');
//   const [selecting, setSelecting] = useState(false);
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [noOfDays, setNoOfDays] = useState<number[]>([]);
//   const [blankdays, setBlankdays] = useState<number[]>([]);
//   const [hoursFrom, setHoursFrom] = useState<number[]>([]);
//   const [hoursTo, setHoursTo] = useState<number[]>([]);
//   const [minutesFrom, setMinutesFrom] = useState<number[]>([]);
//   const [minutesTo, setMinutesTo] = useState<number[]>([]);
//   const [meridiemsFrom, setMeridiemsFrom] = useState<string[]>([]);
//   const [meridiemsTo, setMeridiemsTo] = useState<string[]>([]);

//   const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const datepickerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside, true);
//     return () => {
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   }, []);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (datepickerRef.current && !datepickerRef.current.contains(event.target as Node)) {
//       setShowDatepicker(false);
//     }
//   };

//   const convertFromYmd = (dateYmd: string): Date => {
//     const year = Number(dateYmd.substr(0, 4));
//     const month = Number(dateYmd.substr(5, 2)) - 1;
//     const date = Number(dateYmd.substr(8, 2));
//     return new Date(year, month, date);
//   };

//   const convertToYmd = (dateObject: Date): string => {
//     const year = dateObject.getFullYear();
//     const month = dateObject.getMonth() + 1;
//     const date = dateObject.getDate();
//     return `${year}-${('0' + month).slice(-2)}-${('0' + date).slice(-2)}`;
//   };

//   const init = () => {
//     let initialDateFrom = dateFrom;
//     let initialDateTo = dateTo;

//     if (!dateFrom) {
//       initialDateFrom = dateFromYmdHis ? convertFromYmd(dateFromYmdHis) : null;
//       setDateFrom(initialDateFrom);
//     }

//     if (!dateTo) {
//       initialDateTo = dateToYmdHis ? convertFromYmd(dateToYmdHis) : null;
//       setDateTo(initialDateTo);
//     }

//     if (!initialDateFrom) {
//       initialDateFrom = initialDateTo;
//       setDateFrom(initialDateFrom);
//     }

//     if (!initialDateTo) {
//       initialDateTo = initialDateFrom;
//       setDateTo(initialDateTo);
//     }

//     if (endToShow === 'from' && initialDateFrom) {
//       setCurrentDate(initialDateFrom);
//     } else if (endToShow === 'to' && initialDateTo) {
//       setCurrentDate(initialDateTo);
//     } else {
//       setCurrentDate(new Date());
//     }

//     const currentMonth = currentDate?.getMonth() ?? new Date().getMonth();
//     const currentYear = currentDate?.getFullYear() ?? new Date().getFullYear();

//     if (month !== currentMonth || year !== currentYear) {
//       setMonth(currentMonth);
//       setYear(currentYear);
//       getNoOfDays(currentMonth, currentYear);
//     }

//     setDateValues();
//     getMeridansFrom();
//     getMeridansTo();
//   };

//   const changeTimeMode = () => {
//     if (timeMode === 12) {
//       let hourFrom = hour24FromValue;
//       if (hourFrom === 0) {
//         hourFrom = 12;
//       } else if (hourFrom > 12) {
//         hourFrom -= 12;
//       }

//       let hourTo = hour24ToValue;
//       if (hourTo === 0) {
//         hourTo = 12;
//       } else if (hourTo > 12) {
//         hourTo -= 12;
//       }

//       setMeridiemFrom(hour24FromValue > 11 ? 'pm' : 'am');
//       setMeridiemTo(hour24ToValue > 11 ? 'pm' : 'am');
//       getHour('from', hourFrom);
//       getHour('to', hourTo);
//     } else {
//       getHour('from', hour24FromValue);
//       getHour('to', hour24ToValue);
//     }
//   };

//   const isToday = (date: number): boolean => {
//     const today = new Date();
//     const d = new Date(year, month, date);
//     return today.toDateString() === d.toDateString();
//   };

//   const isDateFrom = (date: number): boolean => {
//     const d = new Date(year, month, date);
//     return dateFrom ? d.getTime() === dateFrom.getTime() : false;
//   };

//   const isDateTo = (date: number): boolean => {
//     const d = new Date(year, month, date);
//     return dateTo ? d.getTime() === dateTo.getTime() : false;
//   };

//   const isSingleDay = (): boolean => {
//     return dateFrom && dateTo ? dateFrom.getTime() === dateTo.getTime() : false;
//   };

//   const isInRange = (date: number): boolean => {
//     const d = new Date(year, month, date);
//     return dateFrom && dateTo ? d > dateFrom && d < dateTo : false;
//   };

//   const isDisabledFromHour = (hour: number): boolean => {
//     let hour24 = hour;
//     if (timeMode === 12) {
//       if (hour === 12 && meridiemFrom === 'am') {
//         hour24 = 0;
//       } else if (hour < 12 && meridiemFrom === 'pm') {
//         hour24 += 12;
//       }
//     }
//     return isSingleDay() && hour24 > hour24ToValue;
//   };

//   const isDisabledToHour = (hour: number): boolean => {
//     let hour24 = hour;
//     if (timeMode === 12) {
//       if (hour === 12 && meridiemTo === 'am') {
//         hour24 = 0;
//       } else if (hour < 12 && meridiemTo === 'pm') {
//         hour24 += 12;
//       }
//     }
//     return isSingleDay() && hour24 < hour24FromValue;
//   };

//   const outputDateValues = () => {
//     if (dateFrom) {
//       const timeFromString = getTimeString('from');
//       const dateFromString = convertToYmd(dateFrom);
//       const dateTimeFrom = new Date(`${dateFromString}T${timeFromString}`);
//       setOutputDateFromValue(formatDateTime(dateTimeFrom));
//       setDateFromYmdHis(formatDateTime(dateTimeFrom));
//     } else {
//       setOutputDateFromValue('');
//       setDateFromYmdHis('');
//     }

//     if (dateTo) {
//       const timeToString = getTimeString('to');
//       const dateToString = convertToYmd(dateTo);
//       const dateTimeTo = new Date(`${dateToString}T${timeToString}`);
//       setOutputDateToValue(formatDateTime(dateTimeTo));
//       setDateToYmdHis(formatDateTime(dateTimeTo));
//     } else {
//       setOutputDateToValue('');
//       setDateToYmdHis('');
//     }
//   };

//   const getTimeString = (fromOrTo: string): string => {
//     let hour, minute, meridiem;
//     if (fromOrTo === 'from') {
//       hour = timeMode === 12 ? hourFromValue : hour24FromValue;
//       minute = minuteFromValue;
//       meridiem = meridiemFrom;
//     } else {
//       hour = timeMode === 12 ? hourToValue : hour24ToValue;
//       minute = minuteToValue;
//       meridiem = meridiemTo;
//     }

//     if (timeMode === 12) {
//       hour = hour === 12 ? 0 : hour;
//       if (meridiem === 'pm') {
//         hour += 12;
//       }
//     }

//     return `${('0' + hour).slice(-2)}:${minute}`;
//   };

//   const formatDateTime = (date: Date): string => {
//     const year = date.getFullYear();
//     const month = ('0' + (date.getMonth() + 1)).slice(-2);
//     const day = ('0' + date.getDate()).slice(-2);
//     const hour = ('0' + date.getHours()).slice(-2);
//     const minute = ('0' + date.getMinutes()).slice(-2);
//     const second = ('0' + date.getSeconds()).slice(-2);
//     return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
//   };

//   const getDateValue = (date: number, hover: boolean) => {
//     const selectedDate = new Date(year, month, date);

//     if (hover) {
//       setSelecting(true);
//       if (endToShow === 'from') {
//         if (!dateTo || selectedDate.getTime() < dateTo.getTime()) {
//           setDateFrom(selectedDate);
//         } else {
//           setDateFrom(dateTo);
//         }
//       } else {
//         if (!dateFrom || selectedDate.getTime() > dateFrom.getTime()) {
//           setDateTo(selectedDate);
//         } else {
//           setDateTo(dateFrom);
//         }
//       }
//     } else {
//       if (endToShow === 'from') {
//         if (dateTo && selectedDate.getTime() > dateTo.getTime()) {
//           setDateFrom(dateTo);
//         } else {
//           setDateFrom(selectedDate);
//         }
//         setEndToShow('to');
//       } else {
//         if (dateFrom && selectedDate.getTime() < dateFrom.getTime()) {
//           setDateTo(dateFrom);
//         } else {
//           setDateTo(selectedDate);
//         }
//         setShowDatepicker(false);
//       }
//     }

//     outputDateValues();
//   };

//   const getHour = (fromOrTo: string, hour: number) => {
//     if (fromOrTo === 'from') {
//       setHourFromValue(hour);
//       if (timeMode === 12) {
//         let hour24 = hour === 12 && meridiemFrom === 'am' ? 0 : hour;
//         if (hour < 12 && meridiemFrom === 'pm') {
//           hour24 += 12;
//         }
//         setHour24FromValue(hour24);
//       } else {
//         setHour24FromValue(hour);
//       }
//     } else {
//       setHourToValue(hour);
//       if (timeMode === 12) {
//         let hour24 = hour === 12 && meridiemTo === 'am' ? 0 : hour;
//         if (hour < 12 && meridiemTo === 'pm') {
//           hour24 += 12;
//         }
//         setHour24ToValue(hour24);
//       } else {
//         setHour24ToValue(hour);
//       }
//     }

//     outputDateValues();
//   };

//   const getMeridansFrom = () => {
//     setMeridiemsFrom(['am', 'pm']);
//   };

//   const getMeridansTo = () => {
//     setMeridiemsTo(['am', 'pm']);
//   };

//   const getNoOfDays = (month: number, year: number) => {
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

//     setNoOfDays(daysArray);
//     setBlankdays(blanks);
//   };

//   useEffect(() => {
//     getNoOfDays(month, year);
//   }, [month, year]);

//   return (
//     <div className="h-screen w-screen flex justify-center bg-blue-100 px-4">
//       <div className="antialiased sans-serif">
//         <div ref={datepickerRef}>
//           <div className="container mx-auto py-2 md:py-10">
//             <div>
//               <span className="font-bold my-1 text-gray-700 block">Results (would normally be hidden)</span>
//               <input type="text" name="date_from" value={dateFromYmdHis} readOnly className="mr-2"/>
//               <input type="text" name="date_to" value={dateToYmdHis} readOnly className="mt-2 sm:mt-0 ml-0 sm:ml-2"/>
//               <label htmlFor="timemode" className="font-bold mt-3 mb-1 text-gray-700 block">Time Input Mode</label>
//               <select id="timemode" value={timeMode} onChange={(e) => setTimeMode(Number(e.target.value))} className="focus:outline-none border-none p-2 rounded-md border-r border-gray-300">
//                 <option value={12}>12 Hour Clock</option>
//                 <option value={24}>24 Hour Clock</option>
//               </select>
//               <label htmlFor="datepicker" className="font-bold mt-3 mb-1 text-gray-700 block">Select Date/Time Range</label>
//               <div className="relative" onClick={() => setShowDatepicker(true)}>
//                 <div className="inline-flex items-center border rounded-md mt-3 bg-gray-200">
//                   <input
//                     type="text"
//                     onClick={() => { setEndToShow('from'); init(); setShowDatepicker(true); }}
//                     value={outputDateFromValue}
//                     className={`focus:outline-none border-none p-2 w-40 rounded-l-md border-r border-gray-300 ${endToShow === 'from' ? 'font-semibold' : ''}`}
//                   />
//                   <div className="inline-block px-2 h-full">to</div>
//                   <input
//                     type="text"
//                     onClick={() => { setEndToShow('to'); init(); setShowDatepicker(true); }}
//                     value={outputDateToValue}
//                     className={`focus:outline-none border-none p-2 w-40 rounded-r-md border-l border-gray-300 ${endToShow === 'to' ? 'font-semibold' : ''}`}
//                   />
//                 </div>
//                 {showDatepicker && (
//                   <div className="absolute bg-white mt-2 rounded-lg shadow p-4 sm:w-80 w-full">
//                     <div className="flex flex-col items-center">
//                       <div className="w-full flex justify-between items-center mb-2">
//                         <div>
//                           <span className="text-lg font-bold text-gray-800">{MONTH_NAMES[month]}</span>
//                           <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
//                         </div>
//                         <div>
//                           <button
//                             type="button"
//                             className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
//                             onClick={() => { if (month === 0) { setYear(year - 1); setMonth(11); } else { setMonth(month - 1); } getNoOfDays(month, year); }}
//                           >
//                             <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                             </svg>
//                           </button>
//                           <button
//                             type="button"
//                             className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
//                             onClick={() => { if (month === 11) { setYear(year + 1); setMonth(0); } else { setMonth(month + 1); } getNoOfDays(month, year); }}
//                           >
//                             <svg className="h-6 w-6 text-gray-500 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                       <div className="flex flex-wrap mb-3 -mx-1">
//                         {DAYS.map((day, idx) => (
//                           <div key={idx} className="px-1">
//                             <div className="text-gray-800 font-medium text-center text-sm">{day}</div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="flex flex-wrap -mx-1">
//                         {blankdays.map((_, idx) => (
//                           <div key={idx} style={{ width: '14.26%' }} className="text-center border p-1 border-transparent text-sm"></div>
//                         ))}
//                         {noOfDays.map((date, idx) => (
//                           <div key={idx} style={{ width: '14.26%' }} className="px-1 mb-1">
//                             <div
//                               onClick={() => getDateValue(date, false)}
//                               className={`cursor-pointer text-center text-sm leading-loose transition ease-in-out duration-100 rounded-full
//                                 ${isToday(date) ? 'bg-blue-500 text-white' : isDateFrom(date) ? 'bg-blue-200 text-blue-700' : isDateTo(date) ? 'bg-blue-700 text-white' : isInRange(date) ? 'bg-blue-200 text-blue-700' : 'text-gray-700 hover:bg-blue-200'}
//                               `}
//                             >
//                               {date}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="w-full flex">
//                 <div className="mt-3 mr-2 w-full">
//                   <div className="w-full flex flex-wrap">
//                     <div className="w-1/3">
//                       <label htmlFor="fromHour" className="font-bold mb-1 text-gray-700 block">Hour</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           name="fromHour"
//                           id="fromHour"
//                           value={hourFromValue}
//                           onClick={() => { setShowFromHourPicker(!showFromHourPicker); setShowToHourPicker(false); setShowFromMinutePicker(false); setShowToMinutePicker(false); }}
//                           className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//                           readOnly
//                         />
//                         {showFromHourPicker && (
//                           <div className="absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50">
//                             {hoursFrom.map((hour) => (
//                               <div
//                                 key={hour}
//                                 className={`p-2 text-center cursor-pointer ${isDisabledFromHour(hour) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-200'}`}
//                                 onClick={() => { if (!isDisabledFromHour(hour)) { getHour('from', hour); setShowFromHourPicker(false); } }}
//                               >
//                                 {hour}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="w-1/3">
//                       <label htmlFor="fromMinute" className="font-bold mb-1 text-gray-700 block">Minute</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           name="fromMinute"
//                           id="fromMinute"
//                           value={minuteFromValue}
//                           onClick={() => { setShowFromMinutePicker(!showFromMinutePicker); setShowFromHourPicker(false); setShowToHourPicker(false); setShowToMinutePicker(false); }}
//                           className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//                           readOnly
//                         />
//                         {showFromMinutePicker && (
//                           <div className="absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50">
//                             {minutesFrom.map((minute) => (
//                               <div
//                                 key={minute}
//                                 className="p-2 text-center cursor-pointer hover:bg-gray-200"
//                                 onClick={() => { setMinuteFromValue(('0' + minute).slice(-2)); setShowFromMinutePicker(false); outputDateValues(); }}
//                               >
//                                 {('0' + minute).slice(-2)}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     {timeMode === 12 && (
//                       <div className="w-1/3">
//                         <label htmlFor="fromMeridiem" className="font-bold mb-1 text-gray-700 block">AM/PM</label>
//                         <div className="relative">
//                           <input
//                             type="text"
//                             name="fromMeridiem"
//                             id="fromMeridiem"
//                             value={meridiemFrom}
//                             onClick={() => { setShowFromMinutePicker(false); setShowFromHourPicker(false); setShowToHourPicker(false); setShowToMinutePicker(false); }}
//                             onChange={(e) => { setMeridiemFrom(e.target.value); outputDateValues(); }}
//                             className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//                           />
//                           <div className="absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50">
//                             {meridiemsFrom.map((meridiem) => (
//                               <div
//                                 key={meridiem}
//                                 className="p-2 text-center cursor-pointer hover:bg-gray-200"
//                                 onClick={() => { setMeridiemFrom(meridiem); outputDateValues(); }}
//                               >
//                                 {meridiem}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="mt-3 ml-2 w-full">
//                   <div className="w-full flex flex-wrap">
//                     <div className="w-1/3">
//                       <label htmlFor="toHour" className="font-bold mb-1 text-gray-700 block">Hour</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           name="toHour"
//                           id="toHour"
//                           value={hourToValue}
//                           onClick={() => { setShowToHourPicker(!showToHourPicker); setShowFromHourPicker(false); setShowFromMinutePicker(false); setShowToMinutePicker(false); }}
//                           className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//                           readOnly
//                         />
//                         {showToHourPicker && (
//                           <div className="absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50">
//                             {hoursTo.map((hour) => (
//                               <div
//                                 key={hour}
//                                 className={`p-2 text-center cursor-pointer ${isDisabledToHour(hour) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-200'}`}
//                                 onClick={() => { if (!isDisabledToHour(hour)) { getHour('to', hour); setShowToHourPicker(false); } }}
//                               >
//                                 {hour}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="w-1/3">
//                       <label htmlFor="toMinute" className="font-bold mb-1 text-gray-700 block">Minute</label>
//                       <div className="relative">
//                         <input
//                           type="text"
//                           name="toMinute"
//                           id="toMinute"
//                           value={minuteToValue}
//                           onClick={() => { setShowToMinutePicker(!showToMinutePicker); setShowFromHourPicker(false); setShowFromMinutePicker(false); setShowToHourPicker(false); }}
//                           className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//                           readOnly
//                         />
//                         {showToMinutePicker && (
//                           <div className="absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50">
//                             {minutesTo.map((minute) => (
//                               <div
//                                 key={minute}
//                                 className="p-2 text-center cursor-pointer hover:bg-gray-200"
//                                 onClick={() => { setMinuteToValue(('0' + minute).slice(-2)); setShowToMinutePicker(false); outputDateValues(); }}
//                               >
//                                 {('0' + minute).slice(-2)}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
                 
//     {timeMode === 12 && (
//       <div className="w-1/3">
//         <label htmlFor="toMeridiem" className="font-bold mb-1 text-gray-700 block">AM/PM</label>
//         <div className="relative">
//           <input
//             type="text"
//             name="toMeridiem"
//             id="toMeridiem"
//             value={meridiemTo}
//             onClick={() => { setShowFromMinutePicker(false); setShowFromHourPicker(false); setShowToHourPicker(false); setShowToMinutePicker(false); }}
//             onChange={(e) => { setMeridiemTo(e.target.value); outputDateValues(); }}
//             className="focus:outline-none border-none p-2 w-full rounded-md bg-gray-200 text-center"
//           />
//           {/* Add Transition component for animations */}
//           <Transition in={timeMode === 12} timeout={transitionDuration}>
//             {(state) => (
//               <div
//                 className={`absolute mt-1 rounded-md shadow-lg bg-white overflow-hidden z-50 ${
//                   state === 'entering' || state === 'entered' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'
//                 }`}
//                 style={{
//                   transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
//                 }}
//               >
//                 {/* Your content inside the transition component */}
//                 {/* For example, dropdown options for AM/PM */}
//               </div>
//             )}
//           </Transition>
//         </div>
//       </div>
//     )}




// src/components/DateRangePicker.tsx
// src/components/DateRangePicker.tsx
// src/components/DateRangePicker.tsx
// src/components/DateRangePicker.tsx
import dayjs from 'dayjs';
import { range } from 'lodash';
import { useEffect, useState } from 'react';

import { handleFilterSelect } from '../functions/filter';
import { useTableContext } from '../hooks/context';
import { IconBxLeftArrow, IconBxRightArrow, IconDeleteEmpty } from '../icons';

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const isDateInRange = (date: string, startDate: string, endDate: string) => {
  return startDate && endDate && dayjs(date).isAfter(dayjs(startDate)) && dayjs(date).isBefore(dayjs(endDate));
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const CalendarFilter= ({data}:{data:any}) => {

  const { state, dispatch } = useTableContext();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(dayjs().month());
  const [currentYear, setCurrentYear] = useState<number>(dayjs().year());
  const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false);
  const [showYearDropdown, setShowYearDropdown] = useState<boolean>(false);

  const handleDateClick = (date: string, ) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate('');
    } else if (dayjs(date).isBefore(dayjs(startDate))) {
      setStartDate(date);
    } else {
      setEndDate(date);
      // handleFilterSelect(dispatch, state, {startDate, endDate},'calendarFilter', data.header, data.data)
    }

    // if (startDate && endDate) {
    //   handleFilterSelect(dispatch, state, {startDate, endDate},'calendarFilter', data.header, data.data)
    // }
  };

  useEffect(() => {     if (startDate && endDate) {
      handleFilterSelect(dispatch, state, {startDate, endDate},'calendarFilter', data.header, data.data)
    }},[ endDate, startDate])
  function handleDeleteDates (){
    setStartDate('')
    setEndDate('')
    handleFilterSelect(
            
            dispatch,
            state,
            { startDate:"All", endDate:"All" },
            "calendarFilter",
            data.header,
            data.data
          );
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const startDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    const daysArray = range(1, daysInMonth + 1);

    return (
      <div className="custom-date-filter-box-andrea">
        <div className="custom-date-filter-box-andrea-button">
          <button
            className="custom-date-filter-box-andrea-button-button"
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
          >
            <IconBxLeftArrow />
          </button>
          <div className="flex items-center">
            <div
              className="font-bold cursor-pointer mr-2"
              onClick={() => setShowMonthDropdown(!showMonthDropdown)}
            >
              {months[currentMonth]}
            </div>
            <div
              className="font-bold cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              {currentYear}
            </div>
          </div>
          <button
            className="p-2 bg-transparent rounded"
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
          >
            <IconBxRightArrow />
          </button>
        </div>
        {showMonthDropdown && (
          <div className="custom-dropdown-andrea-calendar">
            {months.map((month, index) => (
              <div
                key={index}
                className="p-1 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setCurrentMonth(index);
                  setShowMonthDropdown(false);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        )}
        {showYearDropdown && (
          <div className="custom-dropdown-andrea-calendar">
            {range(currentYear - 10, currentYear + 11).map((year:any) => (
              <div
                key={year}
                className="p-1 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setCurrentYear(year);
                  setShowYearDropdown(false);
                }}
              >
                {year}
              </div>
            ))}
          </div>
        )}
        <div className="custom-grid-calendar-andrea">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium"
              style={{
              
                textAlign: "center",
                fontWeight:500
            }}
            >
              {day}
            </div>
          ))}
          {range(0, startDayOfWeek).map((_:any, index) => (
            <div key={index}></div>
          ))}
          {daysArray.map((day:any) => {
            const date = dayjs(new Date(currentYear, currentMonth, day)).format(
              "YYYY-MM-DD"
            );
            const isSelected =
              (startDate && date === dayjs(startDate).format("YYYY-MM-DD")) ||
              (endDate && date === dayjs(endDate).format("YYYY-MM-DD"));
            const inRange = isDateInRange(date, startDate, endDate);
            return (
              <div
                key={day}
                style={{
  padding:"8px",textAlign:"center", borderRadius:"4px", background:isSelected?"hsl(120,70%,30%)":inRange?"hsl(120,50%,80%)":""
}}

                className={`p-2 text-center cursor-pointer rounded-[6px] ${
                  isSelected
                    ? "bg-[var(--primary-dark)] text-white"
                    : inRange
                    ? "bg-[var(--primary-lightest)]"
                    : ""
                }`}
                onClick={() => handleDateClick(date)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };































  return (
    <div
      className="relative inline-block"
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        className="flex space-x-4 p-2  rounded-md shadow-md place-items-center"
        style={{
          display: "flex",
          borderRadius: "6px",
          placeItems: "center",
        }}
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            style={{
              display: "block",
            }}
            htmlFor="startDate"
          >
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            value={startDate}
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            className="custom-input-calendar-input-dated"
          />
        </div>
        <div
          onClick={() => {
            handleDeleteDates();
          }}
          className="cursor-pointer text-[var(--error-dark)] w-6 h-6"
          style={{
            width:"24px",
            height: "24px",
            color:'hsl(0,100%, 48%)'
          }}
        >
          <IconDeleteEmpty />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            style={{
              display: "block",
            }}
            htmlFor="endDate"
          >
            End Date
          </label>
          <input
            type="text"
            id="endDate"
            value={endDate}
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            className="custom-input-calendar-input-dated"
          />
        </div>
      </div>
      {showCalendar && (
        <div
          className="absolute top-16 left-0 z-10"
          style={{
            position: "absolute",
            top: "64px",
            left: "0px",
            zIndex: 10,
          }}
        >
          {renderCalendar()}
        </div>
      )}
    </div>
  );
};









