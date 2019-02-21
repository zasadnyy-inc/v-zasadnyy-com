---
layout: article
title: "How to get the most out of friend invites in your app"
headline: "Social features like friend invites or referral campaigns are one of the most overlooked game mechanics. Common questions: how much time does it take to implement them, and what results can you expect? In this post, we’ll shed some light on the implementation process, best practices, and metrics to evaluate your results."
date: 2018-11-28T04:20:38+02:00
estimate: "8 mins"
categories: [user-acquisition, getsocial]
post: true
external: true
sourceName: "Unity Blog"
sourceUrl: "https://medium.com/gdg-lviv/running-successful-call-for-papers-c30514f82474"
---

An easy and free way to grow your user base is by asking existing users to invite their friends (Friend invites).

![Sender-receiver flow](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/sender-receiver-invite-flow.png){:.width-75percent}

The process consists of sending an invitation, receiving one, and installing the app. At the core of the invite flow is a special deep link that holds user information about the referrer. It is smart enough to take the receiver to the proper store depending on their platform, e.g., Google Play on Android or App Store on iOS.

### Measuring invite flow performance

The data and best practices presented in this post are based on analysis of over 88M invites sent using the [GetSocial platform](https://www.getsocial.im/?utm_source=unity&utm_campaign=unity-blog&utm_content=get-the-most-out-si). All apps were segmented into three categories based on the depth of the friend invites integration into the game mechanics – Level 1, Level 2, and Level 3.

To compare the results of different levels of invite integration we’ll use:

- Number of invites sent per 1000 daily active users (DAU)
- Conversion, or the percentage of users who installed the app after receiving an invitation


### Level 1. Just add an “Invite Friend” button

Level 1 stands for a simple “Invite Friend” or “Share” button on the app’s UI.

Assuming you’re using a third-party service, like [GetSocial](https://assetstore.unity.com/packages/tools/integration/getsocial-social-features-for-user-acquisition-engagement-and-re-123383), for the invitation process (read [why it is a bad idea to build it on your own](https://www.getsocial.im/evaluate-build-buy-mobilegrowthstack/?utm_source=unity&utm_campaign=unity-blog&utm_content=get-the-most-out-si)), you only have to decide where to add invite buttons on the UI. SDK integration and testing shouldn’t take more than **1 day** for an experienced developer.

![Level 1 flow](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/just-add-invite-button-flow.png){:.medium-width}

Results can be different depending on the quality of the integration with a median of six invites sent per 1000 DAU and average send to install conversion of 1.3%. The median results are not super impressive, but the upper bound is much better.

![Level 1 results](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/level-1-results.png){:.width-75percent}

We’ve analyzed the top performers of the Level 1 category and found 3 things that were common amongst them: they provide multiple entry points, multiple sharing channels, and use customized invite messages

#### Provide multiple entry points

Users won’t invite friends or share your app if they can’t find how to do it. Place invite buttons on visible places, like the main screen. Or place them in the context of the game flow. For instance, you can ask users to invite friends to beat their score after finishing a level or share a spectacular game event.

![Provide multiple entry points](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/multiple-entry-points.png)

*Multiple entry points for Friend Invites. Doomsday Clicker by PikPok*

[Doomsday Clicker](https://www.getsocial.im/case-study/pikpok/?utm_source=unity&utm_campaign=unity-blog&utm_content=get-the-most-out-si) is doing a great job with share buttons. You can invite a friend from the main menu, share a comparison of player profiles, and show off how you destroyed the world this time.

#### Provide multiple sharing channels

Today’s communication landscape is scattered among hundreds of messengers. I personally have friends on WhatsApp, Facebook Messenger, Line, and Telegram. To make sure that a player can invite any of their friends, we have to provide as many sharing options as possible. Besides that, we have to make sure that users have the same sharing experience everywhere: content is properly displayed and deep linking works as expected.

![Sharing channels breakdown](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/sharing-channels-breakdown.png)

*Sharing channel usage split. Data based on 88M invites sent*

Interestingly, instant messengers surpassed Facebook and Twitter with the volume of invites sent, especially after Facebook [closed their invite friends API](https://blog.getsocial.im/deprecation-of-face?utm_source=unity&utm_campaign=unity-blog&utm_content=get-the-most-out-sibook-invitable-friends-graph-api-and-its-impact-on-organic-growth/) and Twitter removed their integration with iOS.

#### Customize your invite message

Customizing your invite message is the best way to improve the send to install conversion for invites. You can change the message depending on:

- **Entry point**: when shared from the main menu, the message can be more generic, like "Hey, I can't stop playing this game. I believe you'd like it as well [DEEP LINK]", at the end of the level: "I've scored 9999 points in [GAME NAME], try to beat me [DEEP LINK]".
- **Sharing channel:** message for WhatsApp should be more casual and personal but only plain text and an image. On the other hand, email can have more generic but rich HTML content.

![Customized invite messages](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/customize-invite-message.png)

*Customized invite messages. Doomsday Clicker by PikPok*

Doomsday Clicker from PikPok [improved](https://www.getsocial.im/case-study/pikpok/?utm_source=unity&utm_campaign=unity-blog&utm_content=get-the-most-out-si) conversion to 19% after implementing all content optimizations. A conversion that is 14 times higher than average.


### Level 2. Rewarded invites

Let's face it, users usually share the app only when they are very delighted. The vast majority of players are indifferent, they need an extra push or an incentive for bothering their friends with an app invitation. Rewarded invites gives them this push.

Rewarded invites require a validation step to prevent fraud. Depending on the security requirements, you can implement validation on the client side or backend.

![Level 2 flow](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/level-2-flow.png){:.medium-width}

Implementation can take anywhere from **2 to 7 days** depending on how you carry out the invites rewards validation. Comparing to "Level 1. Not rewarded invites", the number of invites sent are 2.7 times higher on average with 5.3 times higher conversion.

![Level 2 results](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/level-2-results.png){:.width-75percent}

While analyzing games on a case by case basis, we've noticed that when the rewarded invites feature is introduced, there is always a spike in the number of invites sent, but later the number drops towards the average. Below we prepared two mechanics that will keep the spikes coming week after week.


#### Offer unique content for recurring invites

Unique in-game content is desirable: epic chests, legendary crystals, space cats, you name it. The goal is to come up with a perk that users can get only by inviting their friends to the game.

![Unique unicorn cat for friend invites](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/recurring-events.png){:.phone-landscape}

*Unique unicorn cat for friend invites. Castle Cats by PocApp*

The designers of Castle Cats came up with the idea to run recurring quests to invite friends to the game with the unique "Minty Heart" cat as a reward for completing the quest.


#### Increase rewards with each invited friend

Another mechanic is to increase the reward for each invited friend. You can also reset the invite counter every week to create a spike at the beginning of the next week.

![Increasing chest rewards for friend invites](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/increase-rewards.png){:.phone-portrait}

*Increasing chest rewards for friend invites. Sonic Forces Speed Battle by SEGA*

Sonic Forces implemented the first part of this mechanic and for every recruited friend, they rewarded the sender with bigger and bigger chests, finishing with an epic chest for the 5th friend.


### Level 3. Invites as a core game mechanic

Both of the previous examples required changes not only to the UI, but also to game mechanics and economy. The next and deepest level of integration is when the game is designed around friend invites.

For multiplayer games, friend invites is a way to start a session with anyone, even if they don't have the app installed. When the session is created, all the joining details are attached to the deferred deep link and sent through one of the social channels.

![Level 3 flow](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/level-3-flow.png){:.width-75percent}

Integrating such friend invites into your core game mechanics can take anywhere **from days to weeks**. It all depends on how deep you want the integration to be and how many of the required features can be provided by the third party SDK you're going to use.

Hard work on the game design phase pays off. We saw apps that are sending over 140 invites per 1000 DAU, which is 22 times (!) higher than "Level 1" integration metrics.


### Fine tuning

To get optimum results you have to tune each step of the invite flow: entry point, invite message, sender's reward, receiver on-boarding, and receiver's reward.

It can take time to test all the steps in this flow. When looking at the friend invite funnel as a whole, based on GetSocial data, the biggest improvements come from making a share button visible and fine-tuning the invite message.

![Fine tuning flow](/img/posts/how-to-get-the-most-out-of-friend-invites-in-your-app/fine-tunin-flow.png){:.phone-landscape}

To fine-tune variables even faster you can use an A/B testing tool. A few months ago, Unity released [native A/B testing tools](https://docs.unity3d.com/Manual/UnityAnalyticsABTesting.html). On the Unity dashboard, they let you define variables, provide a couple of variations, define which metric will determine the winner and configure the best performing value for all users from the Unity Dashboard.


### Conclusion

As with anything, the deeper you go with your integration the better results you will get. By following these best practices, you can push the number of invites sent and conversion to the upper bound of the chart.

Personally, I'd start with a simple "Level 1" integration and add an invite button. If your game is more fun with friends, a tighter "Level 3" integration can yield amazing results. And if you're building a single-player experience, rewarded invites are the sweet spot between time invested and return.

