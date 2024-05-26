import {apiService, IRes} from "@/services/apiService";
import {IUser} from "@/interfaces/userinterfaces";
import {urls} from "@/constants/urls";

const userService ={
    getAll:():IRes<IUser[]> => apiService.get(urls.users)
}
export {userService}