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

You can enable the wildcard option to have ES match any instance of the trigger. Example:

If the trigger is `foxy` and a user sends "My name is Midnight, and I am a cute foxyyyyy" with wildcard off,
ES will not respond to this message because the word "foxyyyyy" is not an exact match.

But with wildcard enabled, if a user sends "My name is Midnight, and I am a cute foxyyyyy",
ES will respond to that message because `foxy` was found as part of "foxyyyyy".

:::tip INFO
If you want to have multiple triggers for a single response,
you can add a new response and put the trigger of the first response as the new response while setting the type to "Response".
:::


## Removing a Response
If you want to remove a response, you can use `/guildctl responses remove` with the trigger of the response.
After removed, ES will no longer respond to that trigger.


## Response Variables
ES has a variety of variables available for custom responses, these variables are currently only available for auto-responses.

Here is a list of these variables, and what they provide:

- **{user.id}:** The unique ID of the triggering user.
- **{user.mention}:** A clickable ping/mention of the triggering user.
- **{user.username}:** The unique username of the triggering user.
- **{user.display}:** The display name of the triggering user, this will be the users nickname, global name, or username.

- **{guild.id}:** The unique ID of the current server.
- **{guild.name}:** The name of the current server.

- **{channel.id}:** The unique ID of the channel the response was triggered in.
- **{channel.name}:** The name of the channel the response was triggered in.
- **{channel.mention}:** A clickable mention of the channel the response was triggered in.
