---
layout: article
title: "Public API Design Resources"
headline: "Building a Mobile SDK that works is hard. Exposing great API is even harder. Do it wrong, and it will turn your life into the support nightmare"
date: 2016-12-16T12:20:38+02:00
estimate: "5 mins"
categories: [apidesign, getsocial]
post: true
external: false
---



Around a year ago, we at [GetSocial](https://getsocial.im) decided to rebuild our mobile SDKs from scratch, utilizing 4 years of experience and all best practices possible. The year has come to an end, we're doing last preparations before publishing new shiny SKD and decided to share our findings and pitfalls we had along the way.

To start with, I'm going to share the collection of books, videos, presentations and other resources that we collected and were using during public API design of our new SDK.



### Public API Design Resources

The truth is that **there are not that many resources on the topic**. If you try to [google _"public API design"_](https://lmgtfy.com/?q=public+api+design) most likely you'll get an advertisement from Mulesoft, lot of information on RESTful APIs and very few results on client library API design.

Below you can find a collection of top resources that I collected around the web that are going to help you to create a state of art API in your mobile library.


#### Books

[Practical API Design: Confessions of a Java Framework Architect](https://www.goodreads.com/book/show/4441064-practical-api-design) by Jaroslav Tulach, the designer of NetBeans API. The book starts with a bit of theory on why good API is important and what makes API great. Next chapters cover aspects of practical design and recommendations on how to improve API design skills. It's an advanced level book, but the **must-read for anyone who is building the SDK or library**.

[Framework Design Guidelines: Conventions, Idioms, and Patterns for Reusable .NET Libraries](https://www.goodreads.com/book/show/18311306-framework-design-guidelines?from_search=true) by Microsoft architects Krzysztof Cwalina and Brad Abramscreated. I find this book very interesting, coz it contains explanations from 35 architects of .NET Framework on decisions they made and rules they broke.


[The Little Manual of API Design](https://people.mpi-inf.mpg.de/~jblanche/api-design.pdf) by Jasmin Blanchette from Nokia. A book very similar by content to presentation "How to Design a Good API and Why it Matters" by Joshua Bloch, but for Qt developers.

[The API Book](http://wiki.apidesign.org/wiki/TheAPIBook) is a website created by Jaroslav Tulach. It contains practical advice and solutions to everyday problems during API design and implementation process. If you have a question on what is a better way to implement something, there is a good chance that answer is there.


#### Presentations

[How to Design a Good API & Why it Matters](https://www.infoq.com/presentations/effective-api-design) - the must see presentation recording from Java library designer Joshua Bloch. It is short but contains all the basics you need to know about public API with a lot of examples of 'good' and 'bad' APIs. You can also check [slides](https://www.cs.cmu.edu/~charlie/courses/15-214/2014-fall/slides/17-api-design.pdf).

[Framework Design Guidelines](https://channel9.msdn.com/blogs/pdc2008/pc58) - is an extract from the book by Krzysztof Cwalina and Brad Abramscreated mentioned above. If the book is too much for you, check this video.

[Mobile SDK - Considerations & Best Practices](https://www.youtube.com/watch?v=C2A3MjCA3I4) - presentation by Yaron Karasik, a developer from live chat platform Liveperson. I found this presentation especially useful, as it is **focused on mobile** and also covers best practices about size, resource usage, etc. Slides are available on [Slideshare](http://www.slideshare.net/LivePersonDev/mobile-sdk-considerations-best-practices).



#### Blog Posts
[How to Design a Good, Regular API](https://dzone.com/articles/how-design-good-regular-api) - a great article that focuses on importance of **Regularity** in the library with the examples on how Java API violates this rule.

[API Design Rules for iOS and OS X](http://mattgemmell.com/api-design/) - by Matt Gemmell, a collection of 25 rules for great API that covers class interface, protocols, and notifications. 


### Want to learn more?

This is the list of the top picks from our team, if you have any suggestions, please share your resources in the comments.

If you're interested in the topic and want to learn more, visit my talk at [Mobile Operating Systems Conference](http://romobos.com/) that is going to take place in Cluj-Napoca, Romania on February 16-17th. I'm going to share key findings and failures our team had during the complete rewrite of GetSocial SDK.