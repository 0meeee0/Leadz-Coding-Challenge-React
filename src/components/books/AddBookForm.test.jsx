import React from "react";
import { render, screen } from "@testing-library/react";
import AddBookForm from "./AddBookForm"

jest.mock("../../hooks/useAddBookForm", () => {
  return jest.fn(() => ({
    authors: [],
    formData: {
      title: "",
      genre: "",
      description: "",
      publishDate: "",
      author: "",
    },
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  }));
});

test("AddBookForm renders", () => {
  render(<AddBookForm />);

  const formElement = screen.getByTestId("add-book-form");
  expect(formElement).toBeDefined();
});

test("AddBookForm contains expected inputs", () => {
  render(<AddBookForm />);

  const titleInput = screen.getByLabelText(/title/i);
  const genreInput = screen.getByLabelText(/genre/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const publishDateInput = screen.getByLabelText(/publish date/i);
  const authorSelect = screen.getByLabelText(/author/i);

  expect(titleInput).toBeDefined();
  expect(genreInput).toBeDefined();
  expect(descriptionInput).toBeDefined();
  expect(publishDateInput).toBeDefined();
  expect(authorSelect).toBeDefined();
});
