weexpack platform add ios
weexpack platform add android

npm run build
npm run dev & npm run serve

weexpack run ios

cd platforms/ios
pod install

xcode open .xcworkspace
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/