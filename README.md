# URI Command Obsidian PLugin

## WARNING
**Using this could execute have unintended consequences. You could inadvertanly run a command by clicking on a link outside of Obsidian (in your browser) with unintended consequences. Be sure you know what you're doing and use at your own risk**

**I had to extetend the base Obsidian API to use `executeCommandById()` so this may break at some point**

Execute a command palette command via an Obsidian URI.

## Idea

1. create URI: obsidian://command?id=$ID_OF_COMMAND
2. run app.commands.executeCommandById($ID_OF_COMMAND)

### Stretch Goals
- lookup commands IDs command?
- Map command name to ID?
- Add a secret key to avoid unwanted external command execution

## How to use

You need the ID of the command palette command you want to run. You can find that by running the following in the Developer Console:

`app.commands.listCommands()`

Create a `<button>` or a markdown link `[]()` with the uri: obsidian://command?id=$ID_OF_COMMAND where $ID_OF_COMMAND is the ID of the command you want to run.

The link should now execute the commmand.

Example:
`[Pin Note](obsidian://command?id=workspace:toggle-pin)`

```
<form action="obsidian://command?id=workspace:toggle-pin"> <button type="submit" width=100% >Toggle Pin</button> </form>
```
