import {FC, PropsWithChildren} from "react";
import {postService} from "@/services/postService";

interface IProps extends PropsWithChildren{
    params:{id:string}
}
const Page:FC<IProps> =  async ({params:{id}}) => {
    const{data} = await postService.getByUserId(id)
    return (
        <div>
           Page
        </div>
    );
};

export default Page;