import {create} from 'zustand';


const useArticlesStore = create((set) => ({
  articles: [],
  getOneArticles: {},
  commentsArticles: [],
  searchArticles: "",
  pageArticles : 1,
  setPageArticles : (data) => {
    set({pageArticles : data })
  },
  addFirstArticles : (data) => {
    set((state) => ({articles : state.articles.concat(data) }));
  },

  addArticles: (data) => {
    set((state) => ({ articles: [...state.articles, data] }));
  },

  addOneDataArticles: (data) => {
    set(() => ({ getOneArticles: { data } }));
  },

  addCommentsArticles: (data) => {
    set((state) => ({ commentsArticles: [...state.commentsArticles, data] }));
  },

  setSearchArticles: (data) => {
    set(() => ({ searchArticles: data}));
  },

  filterSearchArticles: (searchArticles) => {
    set((state) => ({
      articles: state.articles.filter((article) =>
        article.name.toLowerCase().includes(searchArticles.toLowerCase())
      ),
    }));
  },
}));


export default useArticlesStore;
