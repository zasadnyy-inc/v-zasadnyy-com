---
layout: article
title: "Challenges in building Unity native plugins. Intro"
headline: ""
date: 2015-08-05T04:20:38+02:00
estimate: "10 mins"
categories: [unity3d, getsocial]
post: true
external: true
sourceName: "The GetSocial Blog"
sourceUrl: "https://www.getsocial.im/blog/challenges-in-building-unity-native-plugins/"
---

### Prehistory

Half a year ago GetSocial Mobile team had to prepare and release SDK v.3.0 with a lot of new cool features and breaking changes from 2.x version. Just in that time I've joined a company and had a chance to make a complete revamp of Unity SDK.Half a year ago GetSocial Mobile team released SDK v.3.0 with a lot of new cool features and breaking changes from 2.x version. Since then, I’ve joined GetSocial and have had an opportunity to make a complete revamp of their Unity SDK.

In this series of posts, I’ll describe what decisions we made and what challenges our team faced with developing the [GetSocial Unity SDK](https://github.com/getsocial-im/getsocial-unity-sdk).


### Approaches in building Unity SDK

First, we needed to decide which approach to go for in order to create an SDK. 

At that moment, we had [Android SDK](https://github.com/getsocial-im/getsocial-android-sdk) written in Java and [iOS SDK](https://github.com/getsocial-im/getsocial-ios-sdk) in ObjectiveC, both completely native to achieve the best performance and user experience. Unity supports three scripting languages: C#, UnityScript (aka JavaScript), and Boo. We decided to expose API in C# as it's [the most widely used one](http://blogs.unity3d.com/2014/09/03/documentation-unity-scripting-languages-and-you/).

Let’s check which options we had to achieve the goal...


##### Pure C# SDK

The best approach from developer and user perspective as 

- it delivers the best performance;
- it is simple to setup;
- we could make SDK available to 21 platforms supported by Unity.

Looks like an ideal solution, but there are few huge disadvantages:

- at the end we'll have a third huge codebase that should be kept in sync with iOS and Android ones;
- all UI should be reimplemented in C# that is not the easiest task as all games use different UI frameworks.

##### Cross-compilation to C\#

According Google [report](http://gmailblog.blogspot.nl/2014/11/going-under-hood-of-inbox.html), that they managed to reuse 70% of code between Android, iOS and Web Inbox clients, we were so impressed by the idea that decided to give it a try.

Because of similarity between Java and C# we digged in a direction of recompiling Android SDK to C#.

From a positive side, we found that:

- there are tools for cross-compilation like [Java Language Conversion Assistant](http://www.microsoft.com/en-us/download/details.aspx?id=14349) from Microsoft;
- in theory, in the end we get C# library, that is fast; 
- and possible to use on all Unity supported platforms.

On the other hand: 

- it's not possible to cross-compile presentation layer as it uses Android APIs. That means we need to replicate UI part of the SDK manually on C#;
- cross-compilation required a clear separation between business and presentation logic, which would lead to a huge refactoring in Android SDK;
- it would be hard to establish automated C# SDK regenerations when Java source is updated, as cross-compilers produce [upgrade issues](https://msdn.microsoft.com/en-us/library/5atsz094(v=vs.71).aspx) that should be fixed manually.


##### Unity native plugin

Native plugins are platform-specific native code libraries. They can access features like OS calls and third-party code libraries that would otherwise not be available to Unity.

Pros:

- very few code needed; a bridge is a thin adapter layer between API exposed in C# and native SDKs;
- 100% code reuse from native SDKs;
- UI rendering is handled by native side => no problem with variety of Unity UI frameworks.

Cons:

- we’d be able to deploy only to iOS and Android Unity games;
- native SDKs API should be in sync to avoid huge amount of adapter's code in a bridge;
- Unity Java Native Interface implementation has issues (Unity engineers fix them quickly but tend to add a new one on each release).


### Selected approach

We decided to go with Unity native plugin approach as it required the least effort, gave plenty of advantages and flexibility. Now GetSocial Unity SDK has the following architecture:
![GetSocial Unity SDK Architecture]({{ site.baseurl }}/img/posts/challenges-in-building-unity-native-plugins-intro-sdk-architecture.png)

Between C# API and native libraries, we have a bridge layer on Unity and native side. The main task for the bridge is to invoke methods between platforms and convert data to primitive types as we can’t pass objects between platforms.

To communicate between C# code and native side, Unity exposes a wide variety of APIs. On Android: Unity Messaging (the one we use to send messages between GameObjects) and wrappers around Java Native Interface. On iOS, we can invoke extern methods from ObjectiveC and use MonoPInvokeCallbackAttribute to call C# methods from the iOS world.


### Everything is simple, right?

The theory is simple: thin bridge layer, few calls between C# and native platforms, nice demo app and problem solved. But a simple solution doesn’t come without any challenges. Here are a few of my favorites:

 - **performance**: potentially bridge could become a performance-wise bottleneck, especially if calls will be made on each frame (keep in mind [16ms rule](https://www.youtube.com/watch?v=CaMTIgxCSqU));
 - **testability**: with Unity native plugin approach most of the SDK will be in the native code, that means we can test only on iOS or Android device/simulator, but not Unity player;
 - **continuous delivery**: SDK consist of 3 parts, each one has it own build process, setting up build pipeline could be complicated;
 - **version fragmentation**: Unity is a very dynamic platform, each release brings tons of cool features and ... new bugs. Unlike game developers who can select Unity version and use it during whole game life, we have to support all Unity versions starting, at least, from 4.1. 


### Want to know more?

It was only a first post from the series, follow GetSocial on social networks in order not to miss updates and don't hesitate to share your thoughts and experience with building Unity plugins in comments.