# Tally App - Redux-Inspired State Management

This project is a Redux-inspired implementation of a simple state management store for a Tally App. The app keeps track of a counter and supports actions for incrementing, decrementing, and resetting the counter. This project demonstrates essential state management concepts without involving UI rendering, focusing instead on observing state changes via console logs.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#Prerequisites)
- [Running_the_Code](#running_the_code)
- [Approach](#approach)
- [Challenges](#challenges)

## Overview
The Tally App's store is inspired by Redux principles and follows the Observer pattern. The app maintains a global state for a counter that users can interact with by dispatching actions. These actions include incrementing, decrementing, and resetting the counter. Rather than rendering a UI, the state updates are logged directly to the console to demonstrate the power of state management and the Observer pattern in managing app state changes.

## Features
- **Global Store**: Centralized state management using a global store.
- **Core State Functions**:
  - **`getState`**: Retrieves the current state.
  - **`dispatch`**: Accepts actions (ADD, SUBTRACT, RESET) to modify the state.
  - **`subscribe`**: Allows functions to listen to state updates and log changes.
- **Functional Programming Principles**: Leverages functional programming principles to manage state changes cleanly and effectively.


### Prerequisites
- **Node.js**: This app runs in a JavaScript environment, such as Node.js. Ensure you have Node.js installed on your system.

### Running_the_Code
1. Clone this repository.
2. Run `node store.js` in your terminal.

### Approach
This project uses a simple store implementation inspired by Redux, using functional programming principles. The store consists of `getState`, `dispatch`, and `subscribe` methods. The `subscribe` function registers listeners to log state changes to the console.

## Challenges
The main challenge was structuring the store in a clean, minimalistic way. By focusing on core state management principles, this implementation demonstrates a lightweight store without Redux dependencies.