# Chastity • Server Config
To open the chastity config panel, you can use `/guildctl chastity`. This should bring up the following panel:

![Chastity Panel - ES Server Config](/screenshots/server/chastity-panel.png)

You can use the buttons below to set the chastity mode, set the chastity role, and the nsfw channels.


## Setting the Chastity Mode
Your servers chastity mode is an important setting, as this will determine how ES handles chastity when someone is put in it.
There are 4 options for chastity modes, here's a quick explanation of what they do:

- **None:** Chastity will be disabled in your server, and ES will prevent members from using the `/chastity` command.
- **Give Role:** ES will give the target member a role when they are put in chastity, and will remove it when they are removed from chastity.
- **Permission Override:** ES will add permission overrides to all of your servers configured NSFW channels, denying the target member from seeing them.
These overrides will be automatically removed when the member is removed from chastity.
- **Both:** ES will give the target member a role, and add permission overrides to all of your servers configured NSFW channels.

To set the chastity mode, you can click/press the "Set Mode" button. You should see the following select menu:

![Set Chastity Mode - ES Chastity Config](/screenshots/server/chastity-set-mode.png)

Using this select menu, you can choose a new chastity mode for your server.


## Setting the Chastity Role
Your servers chastity role is the role that ES will give members when they are put in chastity if your chastity mode is set to "Give Role" or "Both".

To set the chastity role, you can click/press the "Set Role" button. You should see the following select menu:

![Set Chastity Role - ES Chastity Config](/screenshots/server/chastity-set-role.png)

Using this select menu, you can choose a new chastity role for your server.


## Managing NSFW Channels
Your servers NSFW channels are the channels that ES will create permission overwrites on when a
user is put in chastity if your chastity mode is set to "Permission Overwrite" or "Both".

To add some NSFW channels, you can click/press the "Add Channels" button. You should see the following select menu:

![Add NSFW Channels - ES Chastity Config](/screenshots/server/chastity-add-channels.png)

Using this select menu, you can add NSFW channels to your servers chastity config.


## Resetting your Chastity Config
If you want to quickly disable chastity, or remove all your channels, you can reset your config.

To reset your config, click/press the "Reset Config" button. ES will prompt you for confirmation.

:::warning
By resetting your config, you will disable the `/chastity` command in your server. 
Any users that are currently in chastity will need to be manually removed, as the command will no longer function.
:::
