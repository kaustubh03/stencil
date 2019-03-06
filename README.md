# Stencil React Boilerplate

The Boilerplate consists of React, Redux and is configured to use Storybook and Hygen.

## Getting Started!

Step 1 : Navigate to Project Root and Install all the dependencies and packages using yarn by following command.

```cmd
yarn install
```

Step 2 : To run the development server run following command.

```
yarn start
```

Note : By default the server will run on port 3000.

## Run Storybook

Step 1: Install Storybook globally in your system.

```
yarn global add @storybook/cli
```

Step 2 : Run Storybook into the Project using following command.

```
yarn run storybook
```

## Run Test Suites Using Jest.

Step 1 : Navigate to Project Root and Open Terminal there.

Step 2 : Run Following Command to Run all The test suites and cases.

```
yarn test
```

To Add More Stories And Test each component Separately add a .stories.js file in each Component Directory.

## Use Hygen Code Generator For Generating Components

Step 1: Install Hygen Globally into your system using

```
yarn add global hygen
```

We have already designed templates For making Smart and Dumb Components.

Step 3: For Instance : To Create Smart Component. Run

```
hygen smart new --name MyComponent
```

You'll See Separate Organised Folder For MyComponent has Been Created with code.
