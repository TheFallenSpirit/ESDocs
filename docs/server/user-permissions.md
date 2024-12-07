---
description: Learn about ES's advanced user permissions system, how to manage permissions, and view a list of all permissions.
---

# User Permissions
ES has an advanced permissions system for server admins to have fine grained control over their servers and which roles can do what things on ES.

This permissions system uses strings (eg. `impairments.gag-message-peeking`) attached to roles to determine if a member has permission to do something.


## Adding Permissions
To add a permission string to a role, you can use `/guildctl permissions add`.
When using this command, you need to specify the role to add permissions to, and a [permission string](#permissions-list) to add.

:::tip INFO
Don't add any permissions to the `@everyone` role. ES doesn't support this role, and these permissions won't work.
Instead you can create a role that you assign to all members by default, and give that role your desired permissions.
:::


## Removing Permissions
To remove a permission string from a role, you can use `/guildctl permissions remove`.
When using this command, you need to specify the role to remove permissions from, and a [permission string](#permissions-list) to remove.


## Permissions List
Below is a list of each string permission ES has, and a description of what it's for.

- **`general`**
  - `general.config`: View the General Config Panel
    - `general.config.*`: Manage all General Config Panel Options (Wildcard)
    - `general.config.logs`: Manage the Logs Channel
    - `general.config.colour`: Manage the Default Guild Embed Colour
    - `general.config.admin-binding`: Toggle Admin Binding Status
  - `general.ignore.*`: Manage all Ignored Channels (Wildcard)
    - `general.ignore.add`: Add Channels to Ignored Channels List
    - `general.ignore.remove`: Remove Channels from Ignored Channels List
    - `general.ignore.clear`: Clear all Ignored Channels
- **`impairments`**
  - `impairments.bulk-impair`: Impair all Members of this Server or all Members of a Role
  - `impairments.bypass-hierarchy`: Bypass the Impairments Hierarchy (Impair Anyone)
  - `impairments.gag-message-peeking`: Use Gag Message Peeking (View Original Gag Messages)
  - `impairments.config`: View the Impairments Config Panel
  - `impairments.config.*`: Manage all Impairments Config Panel Options (Wildcard)
    - `impairments.config.level`: Manage the Impairments Hierarchy Level
    - `impairments.config.managers`: Manage the Impairments Manager Roles
    - `impairments.config.gag-message-peeking`: Manage Gag Message Peeking
  - `impairments.custom-gags`: View all Custom Gags
    - `impairments.custom-gags.*`: Manage all Custom Gags and Custom Gag Options (Wildcard)
    - `impairments.custom-gags.create`: Create new Custom Gags
    - `impairments.custom-gags.delete`: Delete existing Custom Gags
    - `impairments.custom-gags.add-rules`: Add Rules to Custom Gags
    - `impairments.custom-gags.remove-rules`: Remove Rules from Custom Gags
- **`chastity`**
  - `chastity.config`: View the Chastity Config Panel
    - `chastity.config.*`: Manage all Chastity Config Panel Options (Wildcard)
    - `chastity.config.mode`: Manage the Chastity Mode
    - `chastity.config.role`: Manage the Chastity Role
    - `chastity.config.channels`: Manage the Chastity Channels
    - `chastity.config.reset`: Reset all Chastity Config Options
- **`confessions`**
  - `confessions.*`: Manage the Confessions System and all Confessions Config Options (Wildcard)
  - `confessions.config`: View the Confessions Config Panel
    - `confessions.config.*`: Manage all Confessions Config Panel Options (Wildcard)
    - `confessions.config.toggle`: Manage the Confessions System State
    - `confessions.config.response`: Manage the Confessions Custom Response
    - `confessions.config.reset`: Reset all Confessions Config Options
  - `confessions.channels`
    - `confessions.channels.*`: Manage all Confessions Channels
    - `confessions.channels.add`: Add Channels to the Confessions System
    - `confessions.channels.remove`: Remove Channels from the Confessions System
  - `confessions.blacklist`
    - `confessions.blacklist.*`: Manage the Confessions Blacklist
    - `confessions.blacklist.add`: Add Users to the Confessions Blacklist
    - `confessions.blacklist.remove`: Remove Users from the Confessions Blacklist
    - `confessions.blacklist.clear`: Clear all Confession Blacklisted Users
- **`safety`**
  - `safety.*`: Manage the Safety System and all Safety Config Options (Wildcard)
  - `safety.subscriptions`: View the Safety Subscriptions Panel
    - `safety.subscriptions.*`: Manage all Safety Subscriptions (Wildcard)
    - `safety.subscriptions.add`: Add Subscriptions to the Safety Subscriptions
    - `safety.subscriptions.remove`: Remove Subscriptions from the Safety Subscriptions
    - `safety.subscriptions.clear`: Clear all Safety Subscriptions
  - `safety.flag`: Flag Users on the ES Safety Network
  - `safety.warn`: Warn Users on the ES Safety Network
  - `safety.blacklist`: Blacklist Users on the ES Safety Network
  - `safety.alerts.ban`: Ban Users from Safety Alerts
- **`responses`**
  - `responses.config.*`: Manage all Auto Responses
    - `responses.config.add`: Add Auto Responses
    - `responses.config.remove`: Remove Auth Responses
- **`utilities`**
  - `utilities.force-unbind`: Force-unbind Users from All Channels
- **`*`**: All Permissions (Manage all Config Options & Use all Privileged Commands)
