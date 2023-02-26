function byAlphabeticalURLOrder(tab1, tab2) {
    const domain1 = tab1.url.replace(/^(https?:\/\/)?(www\.)?/, '');
  const domain2 = tab2.url.replace(/^(https?:\/\/)?(www\.)?/, '');
  return domain1.localeCompare(domain2);
  }

  
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
    tabs.sort(byAlphabeticalURLOrder);
   chrome.tabs.move(tabs[0].id, {index: 0});
 for (let i = 0; i < tabs.length; i++) {
    chrome.tabs.move(tabs[i].id, {index: i});
   }
  });