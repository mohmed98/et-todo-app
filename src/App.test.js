import {
  render,
  screen,
  fireEvent,
  getByTestId,
  queryByTestId,
} from "@testing-library/react";
import App from "./App";

test("renders todo app", () => {
  render(<App />);
  const title = screen.getByRole('heading', { name: /ToDo/i });
  expect(title).toBeInTheDocument();
});

test("adds new todos", () => {
  const { container } = render(<App />);

  const todoText = "say hello to the world";
  fireEvent.change(screen.getByPlaceholderText(/What do you need to do\?/i), {
    target: { value: todoText },
  });

  expect(container.querySelector(".add-new-todo").value).toContain(todoText);

  fireEvent.click(screen.getByText(/\+/i));

  expect(container.querySelector(".todo-list").textContent).toContain(todoText);
  expect(container.querySelector(".add-new-todo").value).not.toContain(
    todoText
  );
});

test("deletes selected todos", () => {
  // Render the app
  const { container } = render(<App />);

  // Add a todo
  const todoText = "Test todo";
  fireEvent.change(screen.getByPlaceholderText(/What do you need to do\?/i), {
    target: { value: todoText },
  });
  fireEvent.click(screen.getByText(/\+/i));

  // Find the delete button and click it
  fireEvent.click(screen.getByText(/Select todos you want to delete/i));

  // Check if the todo is deleted
  expect(container.querySelector(".todo-list")).toBeInTheDocument();
});


