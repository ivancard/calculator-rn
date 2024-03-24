# React Native Calculator

This is a calculator application developed with React Native, a framework for building native applications for iOS and Android using JavaScript and React.

## Features

- Intuitive and easy-to-use user interface.
- Basic operations: addition, subtraction, multiplication, and division.
- Support for decimal numbers.
- Button to change the sign of a number.
- Button to delete the last digit entered.
- Button to clear the calculator and start a new operation.
- Display of the previous operation result.

## Demostration

![Texto alternativo](./assets/calculator-gif.gif)

## Project Structure

The project follows a modular structure and is organized as follows:

```
├── Config
│   └── Theme
│       └── app-theme.js    # Application styles and colors
├── Presentation
│   ├── Components
│   │   └── CalculatorButton.js  # Reusable component for calculator buttons
│   ├── Hooks
│   │   └── useCalculator.js     # Custom hook handling the calculator logic
│   └── Screens
│       └── CalculatorScreen.js  # Main calculator screen
├── App.js                       # Application entry point
└── README.md
```

## Technologies Used

- **React Native**: Framework for building native applications with JavaScript and React.
- **Expo**: Platform for developing and testing React Native applications.
- **React Hooks**: Use of hooks like `useState` and `useEffect` for state management and side effects.
- **Custom Hooks**: Creation of a custom `useCalculator` hook to encapsulate the calculator logic.

## Installation and Running

1. Make sure you have Node.js and the Expo client installed on your machine.
2. Clone this repository: `git clone https://github.com/your-username/react-native-calculator.git`
3. Navigate to the project directory: `cd react-native-calculator`
4. Install dependencies: `npm install`
5. Start the application with Expo: `npm start`
6. Scan the QR code with the Expo Go app (Android) or Camera (iOS) to view the application on your mobile device.

## Contributing

If you want to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a new branch for your contribution: `git checkout -b my-new-feature`
3. Make your changes and commit with descriptive messages: `git commit -m "Add new feature"`
4. Push your changes to your remote repository: `git push origin my-new-feature`
5. Create a Pull Request in this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
