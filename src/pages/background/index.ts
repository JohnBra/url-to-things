console.log('background script loaded')

chrome.commands.onCommand.addListener((command) => {
  if (command === 'send-to-things') {
    console.log('received command', command)
  }
});
