This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### ASSUMPTIONS:

1. The API return complete set of menus and their entries.
2. User will not create or delete entries for this feature.
3. UI and feel of the website will improve overtime.

### API format:

parent: {levelName, entries}
entry: {id, name, children}

### PENDING:

1. Integrating with actual http call to fetch menu data.
2. show/hide of menu on user interaction.
