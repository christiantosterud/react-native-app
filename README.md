## github basics
- visit https://training.github.com/downloads/github-git-cheat-sheet/ to look at a cheat sheet of some basic commands and to help you get started
- You need to make sure that you set all of your global variables to the same ones used on your github account
## installing vscode
- visit https://code.visualstudio.com/docs/setup/windows for documentation on how to download and setup vscode for windows
- visit https://code.visualstudio.com/docs/editor/github to get github integrated with vscode it will make your life a lot easier
### Setting up Expo on your device
#### iOS
1. Go to the App Store and Download Expo
2. This is the link to their documentation https://expo.dev/
#### Windows
- Check to see if you have Node.js installed. Open a terminal and type
- `node -v`
- If you have a version that is > 12 and < 17 skip past the next bullet point
- Go to https://nodejs.org/en/download/ and download the LTS version also called the stable version. **DO NOT DOWNLOAD THE CURRENT RELEASE**
- Open a terminal again and type 
- `npm install -g expo-cli`
- Type the following commands in whichever directory you want to clone the repository in
- `git clone https://github.com/christiantosterud/react-native-app.git`
- `cd react-native-app`
- `npm start`
- Hopefully this will start the server and it will prompt you to give some input on what you want to   do next
-  Follow the steps it tells you to render the application on your iphone, android, or in the web broswer
> Note: pressing `w` to render on the web is required to be able to scan the qr code and view it in the mobile app
-This application is pure javascript so I have linked a few resources below to help in any questions you might have regarding the react native framework

## Helpful Links
1. https://reactnative.dev/docs/components-and-apis#ios-components-and-apis
2. https://blog.logrocket.com/how-to-implement-faceid-and-touchid-in-react-native-and-expo/
