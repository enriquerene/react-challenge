# Breaking Bad Name Highlighter App

The Breaking Bad Name Highlighter is a React application that highlights the first occurrence of chemical elements' symbols within a given name and last name. It prioritizes symbols with two letters and ensures unique highlights between the name and last name fields.

## Features

- **Highlight Chemical Symbols**: Automatically highlights the first occurrence of any chemical element symbol within the name and last name.
- **Priority to Two-Letter Symbols**: Gives precedence to chemical symbols with two letters over one-letter symbols.
- **Unique Highlights**: Ensures that symbols highlighted in the name are not reused in the last name.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine using Docker.

### Prerequisites

- [Docker](https://www.docker.com/): Ensure Docker is installed and running on your system. You can download it from the [official website](https://www.docker.com/get-started).

### Running the Application with Docker

1. **Clone the Repository**: Clone this repository to your local machine.

    ```bash
    git clone git@github.com:enriquerene/react-challenge.git
    cd react-challenge
    ```

2. **Build the Docker Image**: Build an image from the Dockerfile.

    ```bash
    docker build -t breaking-bad-app .
    ```

3. **Run the Docker Container**: Run a container from the image you just built.

    ```bash
    docker run -p 80:80 breaking-bad-app
    ```

    This command runs the container and maps port 80 of the container to port 80 on your host machine.

4. **Access the Application**: Open a web browser and navigate to `http://localhost`. You should now see the Breaking Bad Name Highlighter app running.

### Using Docker Compose (Optional)

If you prefer using `docker-compose`, you can start the application with the following command:

    ```bash
    docker-compose up --build
    ```

This command uses the `docker-compose.yml` file to build and start the application. It's particularly useful when your application grows to include more services.

## Usage

1. Enter a name in the "Name" input field.
2. Enter a last name in the "Last Name" input field.
3. Click the "Breakify" button to highlight the chemical element symbols within the name and last name.

