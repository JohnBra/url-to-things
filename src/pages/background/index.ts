function createTask(tab: chrome.tabs.Tab) {
  const thingsURL = 'things:///add?show-quick-entry=true&title='
    + encodeURIComponent(tab.title as string)
    + '&notes='
    + encodeURIComponent(tab.url as string)
  window.open(thingsURL)
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id as number },
      args: [tab] as any,
      func: createTask,
    },
    () => null
  );
})
