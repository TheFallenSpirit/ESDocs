# Using Safety Controls
ES has a variety of safety control commands, these are all subcommands under the `/safetyctl` command.
These commands are only usable by members of the ES Team, ES Safety Team, or partnered/whitelisted servers.

:::tip INFO
Evidence is always required when using safety commands.
You can upload up to 3 pieces of media (image/video) evidence, and you can provide links to external evidence that can't be uploaded to Discord.

To provide links to external evidence, paste the links into the `text-evidence` field, separated by commas.
:::

::: danger WARNING
Misuse of safety commands could result in your user account or server being blacklisted from ES or the safety network.
Only issue safety alerts if you are certain of the offence.
:::


## Warning a User
Warnings should be issued for violations of the ES Terms of Use, Discord's policies, and other unsafe/malicious actions that don't require a restriction.

To warn a user, you can use `/safetyctl warn`. ES will respond with a confirmation prompt, click/press "Yes" to continue.


## Flagging a User
Flags should be issued when a user meets a certain criteria (typically a minor).
Flags are a useful way to inform others about a user without restricting them, or them breaking any policies to warrant a warning.

There is currently only one flag, `minor`. This flag is used to alert servers of minors, so they can be removed from 18+ servers more easily.

To flag a user, you can use `/safetyctl warn`. You will need to specify the flag to add with the `flag` field.
ES will respond with a confirmation prompt, click/press "Yes" to continue.


## Restricting a User
Restrictions should be issued for severe violations of the ES Terms of Use, Discord's policies, and other unsafe/malicious actions.
Restrictions will prevent the user from using certain parts, or all of ES. 

There are 3 types of restrictions, here is a quick summary of what they're for:

- **Full:** Fully blacklists the user from ES. They will be unable to use any commands except for info-only commands like help.
- **BDSM:** Blacklists a user from using any commands in the BDSM category. They will still be able to submit confessions, and use roleplay commands.
- **Reports:** Blacklists a user from submitting reports, useful for blocking malicious reporters.
*This restriction will not be broadcasted as a safety alert.*

To restrict a user, you can use `/safetyctl restrict`. You will need to specify the restriction to add with the `type` field.
ES will respond with a confirmation prompt, click/press "Yes" to continue.


## Undoing an Infraction
If you ever need to undo a flag or a restriction, you can specify `undo: Yes` when using the relevant command.
This will remove the infraction from the target user, and broadcast a new safety alert informing others the infraction has been removed.

:::tip INFO
You can't remove warns, as they are not unique in the database and have no unique identifier.
If you want to remove a warn, please contact a member of the ES Team directly.
:::
