import useSWR from 'swr';
import * as api from "../services/articles";
import useArticlesStore from '../store/articles';


export const useArticlesHooks = () => {
    
  const { addArticles, searchArticles, articles, addOneDataArticles, addCommentsArticles } =
    useArticlesStore();



    return {
        GetArticles : () =>  
          useSWR("allArticles", async () => {
            const response = await api.getArticles();
            console.log('sw all articles ', response);
            addArticles(response);
            console.log(articles, 'ini articles dari hook 1');
            return response;
          }),

        GetOneArticles : (searchArticles) => {
          useSWR('get one articles', async() => {
            const response = await api.getOneArticles(searchArticles);
            console.log('swr one articles ', response);
            addOneDataArticles(response);
            return response;
          })
        }

      }
}