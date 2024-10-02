let isSidebarOpen = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('hourlyAlarm', {
    delayInMinutes: 0.15,
    periodInMinutes: 1
  });

  chrome.alarms.create('resetDailyFlags', {
    when: getTimeUntilMidnight(),
    periodInMinutes: 1440
  });
});

function injectSidebar(forceReopen = false) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    if (isSidebarOpen && forceReopen) {
      chrome.tabs.sendMessage(activeTab.id, { action: 'removeSidebar' }, () => {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          files: ['injectSidebar.js']
        }, () => {
          chrome.tabs.sendMessage(activeTab.id, { action: 'createSidebar' });
          isSidebarOpen = true;
        });
      });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['injectSidebar.js']
      }, () => {
        chrome.tabs.sendMessage(activeTab.id, { action: isSidebarOpen ? 'removeSidebar' : 'createSidebar' });
        isSidebarOpen = !isSidebarOpen;
      });
    }
  });
}

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime();
}

function resetDailyFlags() {
  chrome.storage.local.set({ openedForTime1: false, openedForTime2: false, openedForTime3: false });
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'hourlyAlarm') {
    const { time1, time2, time3, openedForTime1, openedForTime2, openedForTime3 } = await chrome.storage.local.get({
      time1: null,
      time2: null,
      time3: null,
      openedForTime1: false,
      openedForTime2: false,
      openedForTime3: false
    });

    const date = new Date(Date.now());
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    if (formattedTime === time1 && !openedForTime1) {
      injectSidebar(true);
      await chrome.storage.local.set({ openedForTime1: true });
    } else if (formattedTime === time2 && !openedForTime2) {
      injectSidebar(true);
      await chrome.storage.local.set({ openedForTime2: true });
    } else if (formattedTime === time3 && !openedForTime3) {
      injectSidebar(true);
      await chrome.storage.local.set({ openedForTime3: true });
    }
  }

  if (alarm.name === 'resetDailyFlags') {
    resetDailyFlags();
  }
});

chrome.action.onClicked.addListener(() => {
  injectSidebar();
});