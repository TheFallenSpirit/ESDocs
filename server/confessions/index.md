# Confessions • Server Config
To open the confessions config panel, use `/confessions config`. This should bring up the following panel:

![Confessions Panel - ES Server Config](/screenshots/server/confessions/config-panel.png)

You can use this panel to toggle confessions, set a custom confessions response, and reset the config.


## Toggling Confessions
The confessions state will determine whether members can use `/confess` to submit a confession in your server.

To enable or disable confessions, you can click/press the "Enable Confessions" or "Disable Confessions" button.
The button with the opposite state will always be showing, so if confessions are enabled, you will see the "Disable Confessions" button.


## Managing Channels
Every channel that you want members to be able to submit confessions in needs to be added to the confessions channel list.
You have a few options when adding a channel, here is a summary of what they're for:

- `description`: A custom description to show in the channel selector when submitting a confession.
- `thread-mode`: When enabled, ES will automatically create a thread for each confession submitted in this channel.

To add a confessions channel, use `/confessions channels add` with the above options.

:::tip INFO
If you no longer want members to be able to submit confessions in a channel, you can use `/confessions channels remove` to remove it.
:::


## Setting a Custom Response
When there is a custom response, ES will show the custom response whenever someone submits a confession.
This is useful for informing members of rules with confessions, or informing confessors of anything else.

To set a custom response, you can click/press the "Set Response" button. You should see the following modal:

![Set Custom Response - ES Confessions Config](/screenshots/server/confessions/set-response.png)

Inside the box, you can edit your existing response, or enter a new one up to 1024 characters long.

:::tip INFO
You can use basic markdown formatting for the response. Some examples are: `**bold text**`, `__underline text__`, and `# headers`.
:::


## Managing Blacklist
Server admins can utilise the confessions blacklist to prevent rule breakers from submitting confessions.
This is useful if a member is evading auto-mod, or is breaking rules in confessions.

### Adding a User to the Blacklist:
You can add a user to the confessions blacklist by using `/confessions blacklist add`.
After adding a user to the blacklist, they will no longer be able to submit confessions unless they are removed.

### Removing a User from the Blacklist:
You can remove a user from the confessions blacklist by using `/confessions blacklist remove`.
They will immediately be able to submit confessions again in your server.


## Resetting your Config
If you want to reset your confessions config, you can click/press the "Reset Config" button.
This will disable confessions, remove all confession channels, and clear your custom response.

:::tip INFO
When resetting your config, ES will not remove your blacklisted users.
If you want to clear all blacklisted users, you can click/press the "Clear Blacklist" button.
:::

:::danger
If you clear blacklisted users, any users that have been blacklisted will immediately be able to submit confessions again.
Do not clear the blacklist unless you absolutely understand what this means.
:::
