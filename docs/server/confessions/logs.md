# Viewing Confession Logs
Confession logs are a crucial part of server moderation and enforcing your servers rules.
ES keeps indefinite logs of every confession submitted on a per-server basis.
These logs can then be retrieved by server admins and used for moderation purposes.

:::tip INFO
Currently logs can only be viewed by members with the "Administrator" permission.
Changing the permissions for `/confessions view` in integration settings **will not** work.
:::


## Viewing via Confession ID
Every confession submitted on ES has a 10 digit unique numerical identifier attached to it.
This ID is normally found in the title of the confession, as shown in the screenshot below.

![Anonymous Confession Example](/screenshots/server/confessions/confession-example.png)

You can use this ID with the `/confessions view` command to view the confession log.
A confession log will show you the author of the confession, as well as the timestamp when it was submitted.

You can use the `public` option with the command to make the confession log public. By default all logs are ephemeral replies.

Here is a preview of a confession log:

![Confession Log Example](/screenshots/server/confessions/confession-log-example.png)

:::info
Every time a confession log is viewed, ES records who viewed it and if it was public or not.
This measure is in place to prevent abuse of the confession logs system, and to provide privacy to our users.
:::


## Searching for Confessions
If the confession was deleted or you don't have the confession ID, you can use `/confessions search` to browse submitted confessions.
Using the commands options, you can filter by user and channel.

Here is an example of a confessions search for all confessions in `#general`:

![Confession Search Example](/screenshots/server/confessions/confession-search-example.png)

The confession itself is truncated, and you can view the full confession using [`/confessions view`](#viewing-via-confession-id).
If there is more then 8 results, you can view the next page of results by specifying `page: 2` or higher.
