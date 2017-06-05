#!/bin/bash

rm platforms/android/build/outputs/apk/*

ionic cordova build android --release --prod

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore pracascomwifisp.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk pracascomwifisp

zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk  platforms/android/build/outputs/apk/pracascomwifisp.apk
