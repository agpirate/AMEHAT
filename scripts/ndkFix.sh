#!/bin/bash
echo "Fixing NDK configuration..."

# Install NDK (if you have sdkmanager configured)
# rm -rf $ANDROID_HOME/ndk
# sdkmanager --install "ndk;26.1.10909125"

# Clean project
cd android
./gradlew clean
cd ..



# Update local.properties to point to correct NDK
# NDK_PATH="$ANDROID_HOME/ndk/26.1.10909125"
# if [ -d "$NDK_PATH" ]; then
#     echo "ndk.dir=$NDK_PATH" >> android/local.properties
# fi

# Reinstall dependencies
# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Build again
# npx react-native run-android