# URI Command Obsidian PLugin

Execute a command palette command via an Obsidian URI.

## Idea

1. create URI: obsidian://command?id=$ID_OF_COMMAND
2. run app.commands.executeCommandById($ID_OF_COMMAND)

### Stretch Goals
- lookup commands IDs command?
- Map command name to ID?

## How to use

You need the ID of the command palette command you want to run. You can find that by running the following in the Developer Console:

`app.commands.listCommands()`

Create a <button> or a markdown link `[]()` with the uri: obsidian://command?id=$ID_OF_COMMAND where $ID_OF_COMMAND is the ID of the command you want to run.

The link should now execute the commmand.

Example:
`[Pin Note](obsidian://command?id=workspace:toggle-pin)`
