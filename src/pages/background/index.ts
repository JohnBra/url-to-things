function createTask(tab: chrome.tabs.Tab) {
  const thingsURL = 'things:///add?show-quick-entry=true&title='
    + encodeURIComponent(tab.title as string)
    + '&notes='
    + encodeURIComponent(tab.url as string)
  const element = document.createElement('a')
  element.href = thingsURL
  document.body.appendChild(element)
  element.click()
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id as number },
      args: [tab],
      func: createTask,
    },
    () => null
  );
})
