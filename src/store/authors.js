import { create } from "zustand";

const useAuthorStore = create((set) => ({
  authors: [],
  getOneDataAuthor: {},
  articlesAuthor: [],
  searchAuthor: "",

  addAuthor: (data) => {
    set((state) => ({ authors: [...state.authors, data] }));
  },

  addOneDataAuthor: (data) => {
    set(() => ({ getOneDataAuthor: { data } }));
  },

  addArticlesAuthor: (data) => {
    set((state) => ({ articlesAuthor: [...state.articlesAuthor, data] }));
  },

  updateAuthor: (data) => {
    set((state) => ({
      authors: state.authors.map((author) =>
        author.id === data.id ? data : author
      ),
    }));
  },

  deleteAuthor: (authorId) => {
    set((state) => ({
      authors: state.authors.filter((author) => author.id !== authorId),
    }));
  },

  setSearchAuthors: (searchAuthor) => {
    set((state) => ({
      authors: state.authors.filter((author) =>
        author.name.toLowerCase().includes(searchAuthor.toLowerCase())
      ),
    }));
  },
}));

export default useAuthorStore;
