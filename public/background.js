// function getTimes(time1, intervals) {
//     const hours = time1.split(":")[0];
//     const mins = Number(time1.split(":")[1]);

//     let times = [time1, `${hours}:0${mins + (1 * intervals)}`, `${hours}:0${mins + (2 * intervals)}`, `${hours}:0${mins + (3 * intervals)}`];

//     return times;
// }

// async function openPopUp() {
//     const t = new Date();
//     const timeToBlast = await chrome.storage.local.get('time1');
//     const intervals = await chrome.storage.local.get('intervals');
//     const times = getTimes(timeToBlast.time1, intervals.intervals);
//     console.log(times);
//     const nowT = `${t.getHours()}:${t.getMinutes()}` 
//     console.log(nowT);


//     if (times.includes(nowT)) {
//         console.log('I am on time');
//         chrome.action.openPopup();
//     }
// }

let popupWindowId = null;

// Function to open or refresh popup
function openOrRefreshPopup() {
  if (popupWindowId !== null) {
    // Popup is already open, refresh it
    chrome.windows.get(popupWindowId, (window) => {
      if (window) {
        console.log('Popup is already open, refreshing...');
        // Refresh the popup content
        chrome.tabs.query({ windowId: popupWindowId }, (tabs) => {
          if (tabs.length > 0) {
            chrome.tabs.reload(tabs[0].id);  // Reload the first tab in the popup window
          }
        });
      } else {
        // Window does not exist anymore, reset the ID and open it again
        popupWindowId = null;
        openPopup();
      }
    });
  } else {
    // Popup is not open, open a new one
    openPopup();
  }
}

// Function to open a new popup
function openPopup() {
  chrome.windows.create({
    url: 'index.html',
    type: 'popup',
    width: 400,
    height: 600,

  }, (newWindow) => {
    popupWindowId = newWindow.id;
  });
}


chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('hourlyAlarm', {
    delayInMinutes: 0.15,
    periodInMinutes: 0.15
  });
});

// Listen for the alarm event
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'hourlyAlarm') {
    console.log('Hourly alarm triggered, opening popup.');
    const { time1 } = await chrome.storage.local.get('time1')
    console.log(time1);
    const { time2 } = await chrome.storage.local.get('time2')
    console.log(time2);
    const { time3 } = await chrome.storage.local.get('time3')
    console.log(time3);

    const date = new Date(Date.now());
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    console.log(formattedTime);

    if (formattedTime === time1 || formattedTime === time2 || formattedTime === time3) {
      openOrRefreshPopup();
    }
  }
});