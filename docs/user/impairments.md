---
description: Learn about impairments (gags & mutes) and how they work on Eternal Slave. Part of the ES User Guide.
---

# Impairments
Impairments on ES are a way to manipulate a users speech, either by gagging them or muting them.

:::tip INFO
If you want to impair a user, you must own them on ES, or be a member of their trusted users.
If their auth level is set to public, you'll be able to impair them regardless of their relationships.
:::

Both gags and mutes support the `time` and `local` options when impairing a user.

Using the time option, you can specify a time between 2 minutes and 24 hours.
After this time has expired, the impairment will expire and no longer affect the user.

By default, all impairments are global and affect a user in all servers with ES.
If the local option is specified, the target user will only be impaired in the current server.



## Gagging a User
To gag a user, use `/gag` in any server with Eternal Slave installed.

ES has many gag types to choose from when gagging a user. To select one, use the `type` option when gagging.
Here's a quick overview of ES's gag types:

- **Scramble:** The original gag, this gag scrambles the letters of each word in a message
individually. The intense version will additionally scramble all letters in the message together.

- **Dog:** ES's first animal gag, this gag replaces all words in a message with an equivalent dog sound, from barks to growls.

- **Cat:** Another fun animal gag, this gag replaces all words in a message with an equivalent cat sound, from meows to purrs.

- **UwUify:** One of the best gags for a laugh (and Fallen's favourite), this gag manipulates the text in a message by adding random stutters and
faces (UwU, OwO). The intense version will double the stutters, and almost triple the faces.

- **Gen Z:** We all know how cringe gen-z slang can be, this gag randomly adds gen-z slang to the end of a message.
And has a 20% chance to randomly add gen-z slang after each word in a message.

- **No Vowels:** There's no good way to explain it, it does exactly what it says, removes all vowels (a,e,i,o,u) from a message.

- **Muffle:** A more realistic gag, that does exactly as it sounds, it replaces all words in a message with muffles.

- **Cow, Pig, Mouse:** These gags will replace all words in a message with an equivalent sound from the relevant animal.

- **Amogus:** This gag has a chance of adding Among Us terminology after each word in a message.

If you're an ES premium subscriber, you'll also be able to use [Custom Gags](/user/custom-gags).
They'll show up in the same selector as the normal ones.

To un-gag a user, simply use `/gag` again, and their gag will be removed.
You can also change their gag type, by using `/gag` and specifying a new `type`.



## Muting a User
To mute a user, use `/mute` in any server with Eternal Slave installed.

To un-mute a user, simply use `/mute` again, and they will be un-muted.
