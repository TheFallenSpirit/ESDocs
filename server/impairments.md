# Impairments • Server Config
To open the impairments config panel, use `/guildctl impairments`. This should bring up the following panel:

![Impairments Panel - ES Server Config](/screenshots/server/impairments-panel.png)

You can use the buttons on this panel to set the hierarchy level, set the required bypass permissions, and update local impairment managers.

:::tip INFO
These configuration options only effect local impairments, global impairments are not configurable by server.
:::


## Setting the Hierarchy Level
The hierarchy level is the most important option for local impairments.
This level will determine which members are allowed to locally impair other members.

There are 3 hierarchy levels, here is an explanation of each level:

- **None / No Hierarchy:** Any member that has a manager role will be allowed to locally impair other members, regardless of their roles or position.
- **Basic Hierarchy:** Members must have a higher role in the server hierarchy (role list) to be able to locally impair another member.
- **Custom Hierarchy:** A member must have a higher manager role in the server hierarchy (role list) to be able to locally impair another member.

To set the hierarchy level, you can click/press the "Set Level" button. You should see the following select menu:

![Set Hierarchy Level - ES Impairments Config](/screenshots/server/impairments-set-level.png)

Using this select menu, you can choose a new hierarchy level for your server.


## Setting the Bypass Permission
The bypass permission is the required Discord permission to bypass the hierarchy, and locally impair anyone regardless of their roles or position.

ES provides a variety of permissions that this can be set to, so you can choose the one that's best for your server.

To set the required bypass permission, you can click/press the "Set Bypass" button. You should see the following select menu:

![Set Bypass Perms - ES Impairments Config](/screenshots/server/impairments-set-bypass.png)

Using this select menu, you can choose a new required bypass permission for your server.


## Updating the Manager Roles
The manager roles are key to members being able to locally impair other members.
When using a custom hierarchy, these roles are treated as the hierarchy, and ES will check for a member's highest manager role.

:::tip INFO
A member **must** have a manager role to be able to locally impair another member.
This is only overridden if the member has the bypass permission, or owns / is trusted by the target member.
:::

To set the manager roles, you can click/press the "Set Managers" button. You should see the following select menu:

![Set Managers - ES Impairments Config](/screenshots/server/impairments-set-managers.png)

Using this select menu, you can choose new manager roles for your server.

:::tip INFO
If you want to clear the manager roles, you can click/press the "Clear Managers" button.
:::
