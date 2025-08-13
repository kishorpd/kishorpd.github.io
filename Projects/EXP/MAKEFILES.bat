@echo off
setlocal enabledelayedexpansion

REM --- Define the HTML content ---
set "htmlContent=<font size="+2">Marvel Heroes 2016 | Gazillion Entertainment.</font>"
set "htmlContent=!htmlContent!<a><img src="images/Projects/Banner/MHOmega.jpg" alt="Picture" style="width:auto;max-width:100%%" /></a>"
set "htmlContent=!htmlContent!</br></br>"
set "htmlContent=!htmlContent!<font size="+2">Role : Gameplay/UI Engineer Intern</font>"
set "htmlContent=!htmlContent!</br></br>"
set "htmlContent=!htmlContent!<div  align="left" >Worked with  : Andrew Churchill, Drew Zeller, Peter Pascoal"
set "htmlContent=!htmlContent!</br></br></br>"
set "htmlContent=!htmlContent!Unreal Engine 3, Scaleform, Adobe Flash, ActionScipt 2.0, UnrealScript, C++.</br></br></br>"
set "htmlContent=!htmlContent!Marvel Heroes 2016, originally known as Marvel Heroes, is a free-to-play massively multiplayer online action role-playing video game developed by Gazillion Entertainment and Secret Identity Studios. Characters such as Iron Man, Captain America, Deadpool and Wolverine serve as characters that players can unlock in the game."
set "htmlContent=!htmlContent!Working at Gazillion was a very fun and great experience for me. The team is really cool and always helpful."
set "htmlContent=!htmlContent!My daily tasks were resolving the bugs/defects and implementing User-Stories. We had a daily meeting about what everyone worked on and is going to work on. On Tuesdays we had an Engineering meeting in which one engineer would be giving presentations on one of the complicated systems they have implemented in the game. This was really helpful to know more about the implementations of the systems in game every week."
set "htmlContent=!htmlContent!I had never worked on Scaleform and UnrealEngine 3 using UnrealScript and this was a very good opportunity for me to get my hands on these technologies. It was fun learning new things and getting to work on big systems which are highly data driven.</div>"

REM --- List the files to create ---
set "fileList=poultry-frenzy.html x-pod.html marvel-heroes-omega.html marvel-heroes-2015.html autonomous-car-data.html octtree.html quad-tree.html f-zero.html the-channeler.html lil-rube's-machine.html princess-panic.html vr-manual.html candy-trap.html image-classification.html live-wallpaper-engine.html ml-agents.html christmas-in-igloo-pro.html food-truck-rush.html moonlight-hunt.html clock-tower.html rts-resource-manager.html huffman-compressor.html life-till-2015.html omni-bot.html"

REM --- Create the Projects directory if it doesn't exist ---
if not exist "Projects" (
    mkdir "Projects"
    echo "Projects" directory created.
)

REM --- Loop through the file list and create each file ---
for %%f in (%fileList%) do (
    echo !htmlContent! > "Projects\%%f"
    if !errorlevel! neq 0 (
        echo ERROR: Failed to create file "Projects\%%f"
    ) else (
        echo Successfully created "Projects\%%f"
    )
)

endlocal
pause