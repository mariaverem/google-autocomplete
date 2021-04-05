# google-autocomplite
Provides autocomplete location suggestions from Google with showing a map.
## Setting up the Project

Install the repository:
```sh
git clone https://github.com/mariaverem/google-autocomplite.git
```

After that, move it into the google-autocomplite directory and run it from the terminal:
```
cd google-autocomplite
npm start
```

Before geting started, you need the API-Key for the Google Places API. I store Google API Key in the .env file — you should too. Please, see .env.example file.

## Some Code tips

- Main SearchLocation component is working with the Google Place Autocomplete API.
- Func loadScript was implemented for dynamic JavaScript for fast page speed load on public pages. It dynamically loads JavaScript files with a callback when finished. 
- Assign the Google Place Map to the autoComplete variable when the component is rendered.
- Listen to the input change whenever a user selects one of the autocomplete suggestions.
- Show the map by location code.
