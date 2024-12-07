---
description: Learn about Eternal Slave's safety alerts, including how they work, what they're for, and how to subscribe to them.
---

# Safety Alerts
On this page you will learn about safety alerts, how they work, what they're for, and how to subscribe to them.


## What are Safety Alerts?
Safety alerts are alerts/notices issued to subscribed servers by the ES Team or partnered/whitelisted servers.
These alerts can be one of three types:

- **Warn:** A general warning that a user is has broken a severe rule, the ES Terms of Use, or Discord's policies.

- **Blacklist:** A user will be blacklisted when they have severely violated the ES Terms of Use, Discord's policies,
or is a danger to the BDSM community and doesn't fit into a flag.
When a user is blacklisted, they will not be able to use Eternal Slave or any of it's services.

- **Flag:** An informal notice that a specific user has met a specific criteria or done something specific.
Flags are purely informal and it's up to the servers to decide what punishments to issue users that have been flagged.

### Flag Types & Criteria
There are 2 flag types that can be issued to a user, here's an explanation of them:

- **"Minor":** This flag is issued to users that have been confirmed to be under the age of 18,
typically though a minor trap or the user themselves confirming it.

- **"Findom":** This flag is issued to users that have been confirmed to be a financial dominant.


## Managing Subscriptions
To view your servers safety alert subscriptions, use `/guildctl safety view`. This should bring up the following panel:

![Safety Panel - ES Server Config](/screenshots/server/safety/safety-panel.png)

If you want to clear your servers safety subscriptions, click/press the "Clear Subscriptions" button and follow the prompt.


## Subscribing to Safety Alerts
If you want to subscribe to safety alerts in your server, use `/guildctl safety add`.
There are 4 options you need to provide when using this command:

- **`subscription`:** The type of alert you want to subscribe to, or the flag you want to subscribe to.
- **`channel`:** The channel you want this type of safety alerts to be sent in.
- **`auto-ban`:** If you want users targeted by this type of safety alerts to be automatically banned from your server.
- **`custom-content` (optional):** Any custom content to include with this type of safety alert messages in your server.
Can be roles to ping, instructions for staff, or anything else.

Make sure ES has the required permissions in your specified channel, or else you won't receive safety alerts.
You can [learn more about permissions here](/server/bot-permissions#safety-alerts).

## Unsubscribing from Safety Alerts
If you want to unsubscribe from a safety alert, you can use `/guildctl safety remove` and specify the alert type to unsubscribe from.
