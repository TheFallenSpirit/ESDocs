---
description: Learn about ES's required permissions, and extra permissions that ES might need.
---

# Required Permissions
ES requires certain permissions for certain commands, and a few default permissions for basic functionality of the bot.


## Default Permissions
The following permissions are required for ES to function, and ES won't allow you to use any BDSM commands without them:

- **"View Channels", "Read Message History":**
These permissions are required so ES can see your servers channels, know where to send messages, and see messages that other members send.
Messages are processed in accordance with ES's [Privacy Policy](/legal/privacy).
- **"Send Messages", "Embed Links", "Use External Emojis":**
These permissions are required so ES can send messages in your server, as well as sending GIFs and using it's custom emojis.
- **"Manage Messages":** This permission is required so ES can delete messages when a user is impaired or restricted.
- **"View Audit Log":** This permission is required so ES can see who deleted a message.
The audit log is checked to determine if a message was self deleted or not for the snipe feature.


## Feature Specific Permissions
Some of ES's commands and features require more permissions then the default ones.
These commands/features are listed below, and what permissions they require.

### `/gag`, `/say`:
- **"Manage Channels", "Manage Webhooks":**
These permissions are required so ES can view your channel configurations, and create webhooks for gag/say messages.

### `/nick`, `/rename`:
- **"Manage Nicknames":** This permission is required so ES can rename users in your server.

### `/bind`, `/chastity`:
- **"Manage Roles":** This permission is required so ES can edit permission overrides on channels,
and remove roles of users when binding them [(for admin binding)](/server/general#toggling-admin-binding).
- **"Manage Channels:** This permission is required to ES can edit permission overrides on channels in your server.

### Auto Responses:
- **"Add Reactions":** This permission is required so ES can react to messages for any configured reaction auto-responses.


## Separate Feature Permissions
The following features do not require ES's default permissions that the rest of the bot requires.

### Safety Alerts:
- **"Ban Members":** This permission is required so ES can check if a member is banned, and provide a one-click ban button under safety alerts.

Safety alerts also require the following permissions in the subscribed alert channel(s):

- **"View Channel":** This permission is required so ES can view the channel and it's info/permissions.
- **"Send Messages":** This permission is required so ES can send the safety alerts in the chosen channel.
- **"Mention Everyone":** This permission is required so ES can ping/mention any roles specified in the subscriptions custom content.

If ES doesn't have these permissions, you will not receive safety alerts during a broadcast or member join.