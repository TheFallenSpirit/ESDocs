# Safety - Server Config
To open the safety config panel, use `/guildctl safety`. This should bring up the following panel:

![Safety Panel - ES Server Config](/screenshots/server/safety/safety-panel.png)

You can use the buttons on this panel to subscribe to safety alerts, configure auto bans, mentions, and more.


## Subscribing to Safety Alerts
Safety alerts are alerts created by the ES Safety team or partnered servers, these alerts can be one of three types:

- **Warn:** A warning is when a user is warned for a violation of the ES Terms of Use or Discord's policies.
- **Flag:** A flag indicates that the user meets a certain criteria (typically a minor), and exists to inform servers of that.
- **Restriction:** A restriction is issued when a user has severely violated the ES Terms of Use or Discord's policies.
Restrictions will prevent the user from using certain parts, or all of ES.

To subscribe to safety alerts, you need to set an alerts channel, and select some subscriptions.

1. To set an alerts channel, you can click/press the "Set Alerts" button. You should see the following select menu:

![Set Alerts - ES Safety Config](/screenshots/server/safety/set-alerts.png)

Using this select menu, you can choose a channel in your server to receive safety alerts in.

:::warning
Make sure that ES has the "View Channel" and "Send Messages" permissions in your selected alerts channel.
You will not receive safety alerts otherwise.
:::

2. To select your subscriptions, you can click/press the "Set Subscriptions" button. You should see the following select menu:

![Set Subscriptions - ES Safety Config](/screenshots/server/safety/set-subscriptions.png)

Using this select menu, you can choose the safety alert types you want to receive.

::: tip INFO
You will receive a safety alert whenever some is warned, flagged, or restricted on ES.
You will also receive a safety alert whenever a user with any infractions attempts to join your server.
:::


## Setting Alert Mentions
Alert mentions are roles that ES will ping (mention) when sending safety alerts.
These are useful to notify admins or members of dangerous users joining your server or being flagged.

To set your mention roles, you can click/press the "Set Mentions" button. You should see the following select menu:

![Set Mentions - ES Safety Config](/screenshots/server/safety/set-mentions.png)

Using this select menu, you can choose the roles you want ES to mention when sending safety alerts.


## Configuring Auto-Ban
Auto-ban is useful to keep dangerous users out of your server.
When enabled, ES will auto-ban users with your selected subscriptions when they attempt to join your server, or even before that if possible.

To set your auto-ban subscriptions, you can click/press the "Set Auto-Ban button. You should see the following select menu:

![Set Auto-Ban Subscriptions - ES Safety Config](/screenshots/server/safety/set-auto-ban.png)

Using this select menu, you can choose the safety alert types you want to auto-ban.

::: warning
Make sure that ES has the "Ban Members" permission, and is above your default member roles in the hierarchy.
ES will not attempt to ban any members above it in the hierarchy.
:::
