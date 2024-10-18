---
description: Learn how to manage custom gags and custom gag rules on Eternal Slave. Part of the ES User Guide.
---

# Managing Custom Gags
Custom Gags are a powerful and highly customisable premium feature of ES.
Using Custom Gags you can manipulate your subs speech in many ways, extending the gagging system to it's full potential.

::: tip INFO
Custom Gags are a premium feature of ES, available with all premium plans. You can view premium plans by using `/premium`.

ES Plus subscribers will get 5 custom gags, ES Ultimate subscribers will get 10 custom gags, and ES Advanced subscribers will get 3 server-wide custom gags.
:::

## Creating a Custom Gag
To create a custom gag, use `/custom-gag create`. You will need to specify a name for the gag (up to 32 characters).
If you're in a server with an ES Advanced subscription, you can specify `server: Yes` to create the gag in the server.

After creating a custom gag for yourself, it will show up in your gag type selector when using `/gag`.
If the custom gag was created for a server, it will show up in the gag type selector for all members in that server when using `/gag`.

To customise how a custom gag works, you'll need to [add some rules to it](#adding-custom-gag-rules).


## Deleting a Custom Gag
If you want to delete a custom gag, you can use `/custom-gag delete` and select the gag you want to delete from the selector.
After deleting, the specified custom gag will no longer show up in your gag type selector, and you'll no longer be able to use it.


## Adding Custom Gag Rules
Gag rules are the core of custom gags, you can add up to 10 rules per custom gag, allowing you to customise how the gag works.

There are 4 types of gag rules, these types determine the core of how the rule will function. Here is an explanation of each type and how they work:

- **Replace Message:** This gag rule type will replace the targets entire message with the provided content.
- [**Replace Word/Phrase:**](#matching-words-or-phrases) This gag rule type will replace a specific word or phrase, or every word in the targets message with the provided content.
This gag rule type supports the use of the `match` and `wildcard` options.
- [**Append after Word/Phrase:**](#matching-words-or-phrases) This gag rule type will add/append the provided content after a specific word or or phrase, or every word in the targets message.
This gag rule type supports the use of the `match` and `wildcard` options.
- **Append to End of Message:** This gag rule type will add/append the provided content to the end of the targets message.

:::tip INFO
"Replace Message" rules supersede all other rules in a custom gag. If you add a Replace Message rule, it will always be prioritised.
:::

You can add a rule to a custom gag by using `/custom-gag rules add` and selecting the gag from the selector.
When adding a rule, you must specify the `type`, and `content` options with each gag rule.

### Matching Words or Phrases
You can use the `match` option to specify a word or phrase you want "Replace Word/Phrase" or "Append after Word/Phrase" rules to match.

If a match is provided, they will append after or replace each occurrence of the specified word or phrase.

If no match is provided, they will append after or replace each word in a message.
If there are multiple append or replace rules, one will be randomly chosen for each word.

### Providing a Chance
You can use the `chance` option to specify how likely a rule is to execute, this option can be a number from 1-100.
The chance option is a percentage of how often this rule will execute, if left blank, a rule will execute 100% of the time.

:::tip WILDCARD MATCHING
The "Replace Word/Phrase" and "Append after Word/Phrase" rule types support
[wildcard matching](/misc/useful#wildcard-matching) for matching words or phrases in messages.
You can use the `wildcard` option to enable [wildcard matching](/misc/useful#wildcard-matching).
:::


## Removing a Custom Gag Rule
To remove a gag rule, use `/custom-gag rules remove` and select the custom gag, as well as the rule from the selector.

:::tip INFO
When adding or removing a custom gag rule, any users currently gagged with the specified custom gag will need to be re-gagged for the changes to take effect.
:::
