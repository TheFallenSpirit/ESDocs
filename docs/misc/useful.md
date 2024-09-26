---
description: Learn about useful features like wildcard matching and template variables to level up your experience on Eternal Slave.
---

# Useful Information
Here you will find some useful information regarding Eternal Slave and it's functionality.


## Wildcard Matching
Wildcard matching is available in many parts of ES that require matching words or phrases, including restrictions and custom gags.

You can typically enable wildcard matching by using the `wildcard` option in commands.

With wildcard matching disabled, ES will only match words or phrases exactly. Here's an example of how wildcard matching works:

If the match/trigger is `foxy` and a user sends "My name is Midnight, and I am a cute foxyyyyy" with wildcard off,
ES will not match or respond to this phrase because the word "foxyyyyy" is not an exact match.

But with wildcard matching enabled, if a user sends "My name is Midnight, and I am a cute foxyyyyy",
ES will match or respond to that phrase because `foxy` was found as part of the word "foxyyyyy".


## Template Variables
ES has a set of template variables that you can use in various places for ES's responses.

Here is a list of these variables, and what they provide:

- **{user.id}:** The unique ID of the triggering user.
- **{user.mention}:** A clickable ping/mention of the triggering user.
- **{user.username}:** The unique username of the triggering user.
- **{user.display}:** The display name of the triggering user, this will be the users nickname, global name, or username.

- **{guild.id}:** The unique ID of the current server.
- **{guild.name}:** The name of the current server.

- **{channel.id}:** The unique ID of the channel the response was triggered in.
- **{channel.name}:** The name of the channel the response was triggered in.
- **{channel.mention}:** A clickable mention of the channel the response was triggered in.
