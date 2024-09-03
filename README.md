# Frontis Blocks

Frontis Blocks is a WordPress plugin that adds custom blocks to the Gutenberg editor.

## Installation

### Prerequisites

- WordPress 6.0 or higher
- PHP 8 or higher
- Composer
- Node.js (16.x or higher) and npm

### Steps

1. Clone the repository:
   ```
   git clone https://github.com/boom-devs/frontis-blocks
   ```

2. Navigate to the plugin directory:
   ```
   cd frontis-blocks
   ```

3. Install PHP dependencies using Composer:
   ```
   composer install
   ```

4. Install JavaScript dependencies using npm:
   ```
   npm install
   ```

5. Build the assets:
   ```
   npm run build
   ```

6. Activate the plugin in your WordPress admin panel.

## Development

### Available Scripts

In the project directory, you can run:

- `npm start`: Starts the build for development and watches for changes.
- `npm run build`: Builds the app for production.
- `npm run format`: Formats files using WordPress coding standards.
- `npm run lint:css`: Lints CSS files.
- `npm run lint:js`: Lints JavaScript files.
- `npm run packages-update`: Updates WordPress packages to the latest version.
- `npm run plugin-zip`: Creates a zip file of the plugin.

### Development Workflow

1. Start the development server:
   ```
   npm start
   ```

2. Make your changes to the blocks or plugin files.

3. The development server will automatically rebuild the assets as you make changes.

4. When you're ready to create a production build, run:
   ```
   npm run build
   ```

## Creating a Plugin ZIP

To create a ZIP file of your plugin for distribution:

1. Ensure you've built the latest version of your assets:
   ```
   npm run build
   ```

2. Run the plugin-zip script:
   ```
   npm run plugin-zip
   ```

3. The ZIP file will be created in the project root directory.

## Support

For support, please open an issue in the GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the GPL-2.0-or-later License.