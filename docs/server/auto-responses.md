---
description: Learn how to configure ES's auto responses in your server, including adding and removing responses.
---

# Managing Auto Responses
ES has the ability to automatically respond to a message trigger with a message or reactions.

There are three types of auto-responses, here's what each of them does:

- **Reply:** ES will reply to the trigger message with your custom response.
- **Message:** ES will send a new message in the trigger message's channel with your custom response.
- **Reaction:** ES will react to the trigger message with your custom reactions.

:::tip INFO
Currently servers can only have up to 15 auto-responses by default, this may change in the future.
If you would like a limit increase, you can contact a member of the ES Team directly.
:::


## Adding a Response
To add a response, you can use `/guildctl responses add`.
You will need to specify a trigger, the response, and the type of response it is.

The trigger is the word or phrase that ES needs to find in a message to respond to it.
The response is a sentence, or up to three comma separated emojis (default or custom) to respond to the trigger with.

:::tip WILDCARD MATCHING
Auto responses support [wildcard matching](/misc/useful#wildcard-matching) for detecting triggers in messages.
:::

:::tip INFO
If you want to have multiple triggers for a single response,
you can add a new response and put the trigger of the first response as the new response while setting the type to "Response".
:::


## Removing a Response
If you want to remove a response, you can use `/guildctl responses remove` with the trigger of the response.
After removed, ES will no longer respond to that trigger.


## Response Variables
ES has a set of variables you can use for auto-responses, to learn more visit [ES Template Variables Documentation](/misc/useful#template-variables).
