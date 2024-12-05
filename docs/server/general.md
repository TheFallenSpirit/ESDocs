# General • Server Config
To open the general config panel, use `/guildctl general`. This should bring up the following panel:

![General Panel - ES Server Config](/screenshots/server/general-panel.png)

You can use the buttons on this panel to update the logs channel, set the servers default colour, and enable or disable admin binding.


## Setting up Logs
When logs are properly configured, ES will log messages deleted by impairments and restrictions in your logs channel.
Messages sent using `/say` will also be logged.

To set the logs channel, you can click/press the "Set Logs" button. You should then see the following select menu:

![Set Logs - ES General Config](/screenshots/server/general-set-logs.png)

Using this select menu, you can choose a channel in your server that you want ES to send logs to.

::: tip INFO
If you want to clear the logs channel, you can click/press the "Clear Logs" button. After this you will no longer receive logs.
:::


## Setting the Default Colour
When a default colour is set, ES will use this colour in all embeds by default. This includes logs, profiles, confessions, info commands, and more.

::: tip INFO
If a user has a custom profile colour set, the servers default colour will be overridden when using `/profile`.
:::

To set the default colour, you can click/press the "Set Colour" button. You should see the following modal:

![Set Colour - ES General Config](/screenshots/server/general-set-colour.png)

Inside the box, you can enter a new HEX code to use as your servers default colour. If you had a previous default colour, it will be shown here.

::: warning
You must provide a valid HEX code, if the hex code is not valid ES will not accept it.
You can choose and convert HEX codes [here](https://www.hexcolortool.com/).
:::


## Toggling Gag Message Logs
When gag message logs are enabled, ES will store a users original message before it is deleted.
Other members will then be able to view it by clicking the button under the gag message.

To enable or disable gag message logs, click/press the "Gag Message Logs" button.


## Toggling Admin Binding
When admin binding is enabled, any members that are below ES in your role hierarchy will be bindable, regardless of their permissions.

::: danger
If admin binding is enabled and a member attempts to bind an admin, ES will remove all of the target members roles that have the "Administrator" permission.
Do not enable admin binding if you don't want your admins getting temporarily demoted. All roles will be returned after they are unbound.
:::

To enable or disable admin binding, click/press the "Admin Bind" button.
ES should reply with a message confirming that you have enabled or disabled admin binding in your server.
