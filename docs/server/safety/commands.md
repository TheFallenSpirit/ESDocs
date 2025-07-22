---
description: Learn how to use ES's safety commands, including issuing and undoing safety alerts.
---

# Issuing Safety Alerts
:::info
These commands are only usable by members of the ES Team, or moderators of partnered/whitelisted servers.
:::

ES has 3 commands that can be used to issue safety alerts, they are all subcommands under `/safetyctl`.
You can use any one of these commands to issue a safety alert at any time with the required parameters.

:::tip INFO
Evidence is always required when using safety commands.
You can upload up to 3 pieces of media (image/video) evidence, and you can provide links to external evidence that can't be uploaded to Discord.

To provide links to external evidence, paste the links into the `text-evidence` field, separated by commas.
:::

::: danger WARNING
Misuse of safety commands could result in your user account or server being blacklisted from ES or the safety network.
Only issue safety alerts if you are certain of the offence.
:::


## Flagging a User
Flags should be issued when a user meets a certain criteria (typically a minor).
They are a useful way to inform other servers about a specific user, and let the servers handle punishing that user accordingly.

[Learn more about safety flags here](/server/safety/#flag-types-and-criteria).

To flag a user, you can use `/safetyctl warn`. You will need to specify the flag to add with the `flag` field.
ES will respond with a confirmation prompt, click/press "Yes" to continue.


## Blacklisting a User
Blacklists should be issued when a user severely violates the ES Terms of Use, Discord's policies, or other severe unsafe/malicious actions.
They act like flags by informing other users and servers about the target user, and also restrict their ability to use features on ES.

[Learn more about blacklist types here](/server/safety/#blacklist-types-and-criteria).

When a user is blacklisted, they will no longer be able to use Eternal Slave or it's services.

To blacklist a user, you can use `/safetyctl blacklist`. You will need to specify the blacklist type with the `type` field.
ES will respond with a confirmation prompt, click/press "Yes" to continue.


## Undoing an Infraction
If you ever need to undo a flag or blacklist, you can specify `undo: Yes` when using the relevant command.
This will remove the infraction from the target user, and broadcast a new safety alert informing others the infraction has been removed.

:::tip INFO
You can't remove warns, as they are not unique in the database and have no unique identifier.
If you want to remove a warn, please contact a member of the ES Team directly.
:::
