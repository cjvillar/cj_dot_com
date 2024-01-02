//simple emoji gen for holiday themes on webpage nav component

import React, { useState, useEffect } from 'react';

const HolidayEmoji = () => {
  const [matchingData, setMatchingData] = useState(null);
  //all this to get "DD-YY" format
  const currentDate = new Date(); //current date
  const currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); //month (add 1 to get correct month)
  const currentDay = ('0' + currentDate.getDate()).slice(-2); //day

  const formattedDate = `${currentMonth}-${currentDay}`; //format a"MM-DD"
  console.log(formattedDate); 

  
  const holidayJson = [
    { Date: '01-01', Emoji: '🎉', Tooltip: 'New Year\'s Day' },
    { Date: '02-14', Emoji: '❤️', Tooltip: 'Valentine\'s Day' },
    { Date: '04-22', Emoji: '🌎', Tooltip: 'Earth Day' },
    { Date: '05-27', Emoji: '🇺🇸', Tooltip: 'Memorial Day' },
    { Date: '07-04', Emoji: '🎆', Tooltip: 'Independence Day' },
    { Date: '08-26', Emoji: '🐶', Tooltip: 'Int. Dog Day' },
    { Date: '10', Emoji: '🎃', Tooltip: 'Halloween' },
    { Date: '11-11', Emoji: '🇺🇸', Tooltip: 'Veterans Day' },
    { Date: '12', Emoji: '❄️', Tooltip: 'Happy Holidays!' },
    { Date: '12-25', Emoji: '🎄', Tooltip: 'Christmas Day' },
    { Date: '12-31', Emoji: '🥂', Tooltip: 'Happy NYE!!!' },

    //test data below
    // { Date: '01', Emoji: '🐶', Tooltip: 'Month' },
     //{ Date: '01-02', Emoji: '🦊', Tooltip: 'TODAY' }
  ];

  useEffect(() => {
    // funct to find matching date in holidayJson above
    const findMatchingDate = () => {
      let matchingItem = null; 
  
      holidayJson.forEach(item => {
        const itemDate = new Date(item.Date);
        const dateParts = item.Date.split('-'); // split date string by dash
  
        if (dateParts.length === 2) {
          //two parts, full date with day and month
          if (
            itemDate.getDate() === currentDate.getDate() &&
            itemDate.getMonth() === currentDate.getMonth()
          ) {
            matchingItem = item; //set matchingItem for date with day
          }
        } else if (dateParts.length === 1) {
          //if only one part = month
          if (itemDate.getMonth() === currentDate.getMonth()) {
            if (!matchingItem) {
              matchingItem = item; // set matchingItem for date with only month
            }
          }
        }
      });
  
      setMatchingData(matchingItem); // prioritized date is day only (for holidays)
    };
  
    findMatchingDate(); 
  }, []); //empty dependency array ensures this runs only once on mount
  
  return (
    <>
      {matchingData ? (
        <span title={matchingData.Tooltip}>{matchingData.Emoji}</span>
      ) : (
        <span></span>
      )}
    </>
  );
  
      }
export default HolidayEmoji;
