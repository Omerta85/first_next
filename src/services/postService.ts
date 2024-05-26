import {apiService, IRes} from "@/services/apiService";
import {IPost} from "@/interfaces/postinterfaces";
import {urls} from "@/constants/urls";


const postService ={
    getByUserId:(id:number|string):IRes<IPost[]> =>apiService.get(urls.posts.byUserId(id))
}
export{
    postService
}