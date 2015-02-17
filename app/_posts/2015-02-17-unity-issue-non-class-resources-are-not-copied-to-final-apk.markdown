---
layout: article
title: "Unity issue: non-class resources are not included in final apk"
headline: ""
date: 2015-02-17T14:20:38+02:00
estimate: "4 mins"
categories: [unity3d]
post: true
external: false
---

### Prehistory

Starting from January I'm working for a company called [GetSocial][getsocial]. We are focused on powering more engagement, players and revenue for games by providing easy-to-integrate social building blocks. We already have Android and iOS SDK published and my first task was to build Unity SDK on top of native ones.


### Actually an issue

Recently I found that **non-java resources** (e.g. images, properties, xml configurations) **from included jar libraries are not copied to the final apk** during Unity Android build. As a result as soon as we try to load them from java side - application crashes with `I/WindowState﹕ WIN DEATH: Window...` exception.

During native Android SDK development we had similar issue but it was easily solved by additional gradle configuration. In case of Unity **there is no easy way to modify apk build process**. For sure you can make some magic with apk decompilation, modifing and packaging back, but that's not the solution we're looking for.

Here is simplified diagram for Android apk build process:
![image]({{ site.baseurl }}/img/posts/unity-issue-android-build-process.png)


### Temporary solution

For a temporary solution there are two approaches:

1. Magic with Adnroid SDK. Create a wrapper for `apkbuilder` tool and add misssign resources on this step. This could be the only way if you don't have access to library source code.

2. Hassle with source code. If you're missing configuration files and have access to source code it's possible to hardcode values direclty to java code to remove all references to resources.


### Demo

I've created small demo to show-off the problem. It consist from 2 parts:

``` java title:"Main.java from demo.jar"
public class Main {

    public static void loadPropertiesAndPrintValues() {

        Properties prop = new Properties();
        InputStream in = Main.class.getResourceAsStream("test.properties");

        try {

            prop.load(in);

            String isItWorking = prop.getProperty("is_it_working");
            System.out.print(isItWorking);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

``` csharp title:"TryToLoadJavaProperties.cs from Unity demo project"
public class TryToLoadJavaProperties : MonoBehaviour
{
    void OnGUI()
    {
        if (GUILayout.Button("Execute loadPropertiesAndPrintValues()"))
        {
            var javaClazz = new AndroidJavaObject("com.company.Main");        
            javaClazz.CallStatic("loadPropertiesAndPrintValues");
        }
    }
}
```

Donwload demo Unity project from [here][demo].


[getsocial]: https://www.getsocial.im/
[demo]: {{ site.baseurl }}/files/posts/unity-issue-non-class-resources-are-not-copied-to-final-apk-demo.zip